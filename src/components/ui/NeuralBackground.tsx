"use client";

import { useEffect, useRef } from "react";

export function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configuration
        const particleCount = 50; // Number of nodes
        const connectionDistance = 150; // Distance to connect nodes
        const mouseDistance = 200; // Distance to connect to mouse

        // Mouse state
        const mouse = { x: 0, y: 0 };

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            
            initParticles();
            
            // If on mobile, manually trigger one draw to create a static painting
            if (width < 768) {
                drawStaticPainting();
            }
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        // Particle Class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow velocity X
                this.vy = (Math.random() - 0.5) * 0.5; // Slow velocity Y
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(59, 130, 246, 0.4)"; // AI Blue
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            // On mobile, use slightly fewer particles for the static painting to keep it clean
            const count = window.innerWidth < 768 ? 30 : particleCount;
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        // Draws the frame exactly once (used for Mobile)
        const drawStaticPainting = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.draw(); // No update() called, it's frozen

                particles.forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 - dist / connectionDistance * 0.2})`; // Neural Purple
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });
        };

        const animate = () => {
            if (!ctx) return;
            
            // Abort animation loop entirely on Mobile (Static painting is drawn on resize/load)
            if (window.innerWidth < 768) {
                return;
            }

            ctx.clearRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();

                // Connect to mouse
                const dxMouse = mouse.x - particle.x;
                const dyMouse = mouse.y - particle.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouseDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.8 - distMouse / mouseDistance * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }

                // Connect to other particles
                particles.forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 - dist / connectionDistance * 0.1})`; // Neural Purple
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize
        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        
        // Start animation loop (it will self-cancel if on mobile)
        if (window.innerWidth >= 768) {
            animate();
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0"
        />
    );
}
