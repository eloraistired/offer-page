export class EmojiConfetti {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private fettis: Fetti[] = [];
    private animationFrame: number | null = null;
    private freezeConfetti: boolean = false;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas.bind(this));
    }

    private resizeCanvas(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    private createFetti(options: FettiOptions): Fetti {
        const {
            x,
            y,
            angle,
            spread,
            startVelocity,
            color,
            emoji,
            scalar,
            ticks,
        } = options;

        const radAngle = angle * (Math.PI / 180);
        const radSpread = spread * (Math.PI / 180);

        return {
            x,
            y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
            velocity: startVelocity * 0.5 + (Math.random() * startVelocity),
            angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
            tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
            color,
            emoji,
            tick: 0,
            totalTicks: ticks || 200,
            decay: 0.9,
            drift: 0,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: 3,
            ovalScalar: 0.6,
            scalar,
            opacity: 1,
            surfaceFriction: 0.1,
            isFrozen: false,
        };
    }

    private updateFetti(fetti: Fetti): boolean {
        if (this.freezeConfetti) {
            // Apply surface friction
            fetti.velocity *= (1 - fetti.surfaceFriction);
            fetti.gravity *= (1 - fetti.surfaceFriction);

            // Check if the fetti has effectively stopped
            if (Math.abs(fetti.velocity) < 0.01 && Math.abs(fetti.gravity) < 0.01) {
                fetti.velocity = 0;
                fetti.gravity = 0;
                fetti.isFrozen = true;
            }
        }

        if (!fetti.isFrozen) {
            fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
            fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
            fetti.velocity *= fetti.decay;

            if (!this.freezeConfetti) {
                fetti.wobble += fetti.wobbleSpeed;
                fetti.wobbleX = fetti.x + (10 * fetti.scalar * Math.cos(fetti.wobble));
                fetti.wobbleY = fetti.y + (10 * fetti.scalar * Math.sin(fetti.wobble));
            } else {
                fetti.wobbleX = fetti.x;
                fetti.wobbleY = fetti.y;
            }

            fetti.tiltAngle += 0.1;
            fetti.tiltSin = Math.sin(fetti.tiltAngle);
            fetti.tiltCos = Math.cos(fetti.tiltAngle);
            fetti.random = Math.random() + 2;
        }

        const progress = (fetti.tick++) / fetti.totalTicks;

        // Update opacity for fading effect only if not freezing
        if (!this.freezeConfetti) {
            fetti.opacity = 1 - progress;
        }

        this.ctx.font = `${16 * fetti.scalar}px "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif`;
        this.ctx.globalAlpha = fetti.opacity;
        this.ctx.fillText(
            fetti.emoji,
            fetti.wobbleX + (fetti.random * fetti.tiltCos),
            fetti.wobbleY + (fetti.random * fetti.tiltSin)
        );
        this.ctx.globalAlpha = 1;

        return this.freezeConfetti ? !fetti.isFrozen : fetti.tick < fetti.totalTicks;
    }

    private animate(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.fettis = this.fettis.filter(fetti => this.updateFetti(fetti));

        if (this.fettis.length) {
            this.animationFrame = requestAnimationFrame(this.animate.bind(this));
        } else {
            this.animationFrame = null;
            this.freezeConfetti = false;
        }
    }

    public fire(options: FireOptions): void {
        const {
            particleCount = 50,
            angle = 90,
            spread = 45,
            startVelocity = 45,
            decay = 0.9,
            gravity = 1,
            drift = 0,
            scalar = 1,
            origin = { x: 0.5, y: 0.5 },
            freezeConfetti = false,
            ticks = 200,
        } = options;

        const colors = options.colors || ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'];
        const emojis = options.emojis || ['🎉', '🎊', '✨', '⭐️', '🌟'];

        this.freezeConfetti = freezeConfetti;

        const startX = this.canvas.width * origin.x;
        const startY = this.canvas.height * origin.y;

        for (let i = 0; i < particleCount; i++) {
            this.fettis.push(
                this.createFetti({
                    x: startX,
                    y: startY,
                    angle,
                    spread,
                    startVelocity,
                    color: colors[i % colors.length],
                    emoji: emojis[Math.floor(Math.random() * emojis.length)],
                    scalar,
                    ticks,
                })
            );
        }

        if (!this.animationFrame) {
            this.animate();
        }
    }

    public reset(): void {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
        this.fettis = [];
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.freezeConfetti = false;
    }
}

interface Fetti {
    x: number;
    y: number;
    wobble: number;
    wobbleSpeed: number;
    velocity: number;
    angle2D: number;
    tiltAngle: number;
    color: string;
    emoji: string;
    tick: number;
    totalTicks: number;
    decay: number;
    drift: number;
    random: number;
    tiltSin: number;
    tiltCos: number;
    wobbleX: number;
    wobbleY: number;
    gravity: number;
    ovalScalar: number;
    scalar: number;
    opacity: number;
    surfaceFriction: number;
    isFrozen: boolean;
}

interface FettiOptions {
    x: number;
    y: number;
    angle: number;
    spread: number;
    startVelocity: number;
    color: string;
    emoji: string;
    scalar: number;
    ticks?: number;
}

interface FireOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    scalar?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    emojis?: string[];
    freezeConfetti?: boolean;
    ticks?: number;
}