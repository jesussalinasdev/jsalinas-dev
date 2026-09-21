/**
 * Signal field: one fixed, viewport-sized WebGL canvas behind the whole page.
 * Sections marked [data-field] are transparent and show it; every other
 * section paints its own ground over it. Slow topographic waves drift with
 * the scroll, and ripples travel out from a point the way a message arrives.
 *
 * Why one fixed canvas: a canvas that scrolls with its section can fall out
 * of sync with the page on some GPUs (Chrome on Windows/Intel), leaving
 * smeared or unpainted areas. A fixed layer never moves, so it cannot.
 *
 * Budget rules for mid-range phones:
 * - raw WebGL, no library; reduced resolution, capped fps
 * - draws only while a [data-field] section is on screen and the tab is visible
 * - weak device, data saver or reduced motion: still frames redrawn on scroll
 * - no WebGL at all: the CSS ground underneath stays as the fallback
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const MAX_RIPPLES = 8;

const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform float uScroll;
uniform vec2 uPointer;
uniform vec4 uRip[${MAX_RIPPLES}];
uniform vec3 uGround;
uniform vec3 uField;
uniform vec3 uSignal;
uniform float uShade;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
    float v = 0.5 * noise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p;
    v += 0.25 * noise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p;
    v += 0.125 * noise(p);
    return v / 0.875;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;
    vec2 p = vec2(uv.x * aspect, uv.y);

    float ring = 0.0;
    float bend = 0.0;
    for (int i = 0; i < ${MAX_RIPPLES}; i++) {
        vec4 r = uRip[i];
        if (r.w <= 0.0) continue;
        float age = uTime - r.z;
        if (age < 0.0 || age > 7.0) continue;
        float d = distance(p, vec2(r.x * aspect, r.y));
        float front = age * 0.34;
        float band = exp(-pow((d - front) * 16.0, 2.0));
        float fade = exp(-age * 0.62) * r.w;
        ring += band * fade;
        bend += band * fade * 0.16;
    }

    // The field drifts with the page, at half the scroll speed.
    vec2 q = p + vec2(0.0, uScroll);
    vec2 drift = vec2(uTime * 0.018, uTime * 0.011);
    vec2 toPointer = p - vec2(uPointer.x * aspect, uPointer.y);
    float lens = exp(-dot(toPointer, toPointer) * 9.0) * 0.06;
    float field = fbm(q * 1.35 + drift) + bend + lens;

    float contour = abs(fract(field * 9.0 - uTime * 0.035) - 0.5);
    float line = 1.0 - smoothstep(0.0, 0.07, contour);

    vec3 col = uGround;
    col = mix(col, uField * 0.5, smoothstep(0.3, 0.95, field) * 0.7);
    col += uField * line * (0.18 + 0.34 * smoothstep(0.35, 0.9, field));
    col = mix(col, uSignal, clamp(ring, 0.0, 1.0) * 0.5);
    col += uSignal * line * clamp(ring * 2.0, 0.0, 1.0) * 0.3;

    // Keep the reading side calm.
    float calm = mix(uShade, 1.0, smoothstep(0.05, 0.75, uv.x));
    col *= calm;

    gl_FragColor = vec4(col, 1.0);
}
`;

const hex = (h: string) => {
    const n = parseInt(h.slice(1), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const COLORS = {
    ground: hex('#0b111b'),
    field: hex('#3a72e8'),
    signal: hex('#ffd23f'),
};

/** Ripple anchored to the page: x in viewport fraction, y in page pixels. */
type Ripple = { x: number; pageY: number; t0: number; strength: number };

function isLowPower() {
    const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean };
    };
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = Boolean(nav.connection?.saveData);
    const weak = (nav.hardwareConcurrency || 8) <= 4 && (nav.deviceMemory || 8) <= 4;
    return reduced || saveData || weak;
}

export function mountSignal(canvas: HTMLCanvasElement) {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-field]')];
    if (!sections.length) return null;

    const gl = canvas.getContext('webgl', {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: 'low-power',
        preserveDrawingBuffer: true,
    });
    if (!gl) return null;

    const compile = (type: number, src: string) => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return null;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(prog, name);
    const uRes = u('uRes');
    const uTime = u('uTime');
    const uScroll = u('uScroll');
    const uPointer = u('uPointer');
    const uRip = u('uRip');
    const uShade = u('uShade');
    gl.uniform3fv(u('uGround'), COLORS.ground);
    gl.uniform3fv(u('uField'), COLORS.field);
    gl.uniform3fv(u('uSignal'), COLORS.signal);

    const still = isLowPower();
    const ripples: Ripple[] = [];
    const ripData = new Float32Array(MAX_RIPPLES * 4);
    const pointer = { x: -2, y: -2, tx: -2, ty: -2 };
    const start = performance.now();
    const pingAt = new Map<HTMLElement, number>();
    const visible = new Set<HTMLElement>();
    let now = still ? 9 : 0;
    let raf = 0;
    let last = 0;
    let shown = false;
    let stillQueued = false;

    const narrow = () => innerWidth < 768;
    const frameGap = () => (narrow() ? 1000 / 30 : 1000 / 50);

    function resize() {
        const dpr = Math.min(devicePixelRatio || 1, 2);
        const scale = narrow() ? 0.5 : 0.6;
        const w = Math.max(1, Math.round(canvas.clientWidth * dpr * scale));
        const h = Math.max(1, Math.round(canvas.clientHeight * dpr * scale));
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
            gl!.viewport(0, 0, w, h);
        }
    }

    /** Point an element pings from: x in viewport fraction, y in page pixels. */
    function pointOf(el: Element): [number, number] {
        const r = el.getBoundingClientRect();
        return [(r.left + r.width * 0.12) / innerWidth, r.top + r.height * 0.5 + scrollY];
    }

    function originOf(section: HTMLElement): [number, number] {
        const selector = section.dataset.fieldOrigin;
        const el = selector ? section.querySelector<HTMLElement>(selector) : null;
        if (el && el.offsetParent !== null) return pointOf(el);
        const fx = Number(section.dataset.fieldX ?? 0.75);
        const fy = Number(section.dataset.fieldY ?? 0.45);
        const r = section.getBoundingClientRect();
        return [fx, r.top + scrollY + r.height * fy];
    }

    function addRipple(x: number, pageY: number, strength = 1, at = now) {
        ripples.push({ x, pageY, t0: at, strength });
        while (ripples.length > MAX_RIPPLES) ripples.shift();
    }

    /** The field section nearest the viewport centre sets the text-side shade. */
    function currentShade() {
        let best = 0.3;
        let dist = Infinity;
        for (const s of visible) {
            const r = s.getBoundingClientRect();
            const d = Math.abs(r.top + r.height / 2 - innerHeight / 2);
            if (d < dist) {
                dist = d;
                best = Number(s.dataset.fieldShade ?? 0.3);
            }
        }
        return 1 - best;
    }

    function draw() {
        const h = innerHeight || 1;
        ripData.fill(0);
        ripples.forEach((r, i) => ripData.set([r.x, 1 - (r.pageY - scrollY) / h, r.t0, r.strength], i * 4));
        pointer.x += (pointer.tx - pointer.x) * 0.08;
        pointer.y += (pointer.ty - pointer.y) * 0.08;
        gl!.uniform2f(uRes, canvas.width, canvas.height);
        gl!.uniform1f(uTime, now);
        // Half-speed parallax keeps the drift smooth at the capped frame rate.
        gl!.uniform1f(uScroll, (-scrollY / h) * 0.5);
        gl!.uniform2f(uPointer, pointer.x, pointer.y);
        gl!.uniform4fv(uRip, ripData);
        gl!.uniform1f(uShade, currentShade());
        gl!.drawArrays(gl!.TRIANGLES, 0, 3);
        if (!shown) {
            shown = true;
            canvas.classList.add('is-live');
        }
    }

    function tick(ts: number) {
        raf = requestAnimationFrame(tick);
        if (ts - last < frameGap()) return;
        last = ts;
        now = (ts - start) / 1000;
        for (const s of visible) {
            const every = Number(s.dataset.fieldPing ?? 0);
            if (!every) continue;
            if (!pingAt.has(s)) pingAt.set(s, now + 0.5);
            if (now >= pingAt.get(s)!) {
                addRipple(...originOf(s), 1);
                pingAt.set(s, now + every);
            }
        }
        draw();
    }

    function run() {
        if (still || raf || !visible.size || document.hidden) return;
        last = 0;
        raf = requestAnimationFrame(tick);
    }

    function stop() {
        cancelAnimationFrame(raf);
        raf = 0;
    }

    // Still mode: frozen ripples, redrawn once per scroll frame.
    function drawStill() {
        if (stillQueued) return;
        stillQueued = true;
        requestAnimationFrame(() => {
            stillQueued = false;
            draw();
        });
    }

    if (still) {
        for (const s of sections) {
            const [x, y] = originOf(s);
            addRipple(x, y, 0.9, 7.2);
            addRipple(x, y, 0.7, 5.4);
        }
        addEventListener('scroll', drawStill, { passive: true });
    }

    new ResizeObserver(() => {
        resize();
        draw();
    }).observe(canvas);

    const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
            const s = e.target as HTMLElement;
            if (e.isIntersecting) visible.add(s);
            else visible.delete(s);
        }
        if (visible.size) {
            draw();
            run();
        } else {
            stop();
        }
    });
    sections.forEach((s) => io.observe(s));

    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : run()));

    // Any element can ask for a ripple from itself (e.g. a message arriving).
    document.addEventListener('signal:request', (e) => {
        if (still) return;
        const el = (e as CustomEvent<{ el?: Element }>).detail?.el;
        if (el) addRipple(...pointOf(el), 1.15);
    });

    // Taps and clicks do not ripple: on phones every scroll gesture would fire one.
    // Only a mouse leans the waves, gently.
    for (const s of sections) {
        s.addEventListener('pointermove', (e) => {
            if (e.pointerType !== 'mouse') return;
            pointer.tx = e.clientX / innerWidth;
            pointer.ty = 1 - e.clientY / innerHeight;
        });
    }

    return { addRipple };
}
