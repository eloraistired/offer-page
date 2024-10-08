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
            freezeProgress: 0,
        };
    }

    private updateFetti(fetti: Fetti): boolean {
        if (this.freezeConfetti) {
            fetti.freezeProgress = Math.min(1, fetti.freezeProgress + 0.02);
            const easedProgress = this.easeOutCubic(fetti.freezeProgress);
            
            fetti.velocity *= (1 - easedProgress);
            fetti.gravity *= (1 - easedProgress);
            fetti.wobbleSpeed *= (1 - easedProgress);
        }

        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.velocity *= fetti.decay;

        fetti.wobble += fetti.wobbleSpeed * (1 - fetti.freezeProgress);
        fetti.wobbleX = fetti.x + (10 * fetti.scalar * Math.cos(fetti.wobble));
        fetti.wobbleY = fetti.y + (10 * fetti.scalar * Math.sin(fetti.wobble));

        fetti.tiltAngle += 0.1 * (1 - fetti.freezeProgress);
        fetti.tiltSin = Math.sin(fetti.tiltAngle);
        fetti.tiltCos = Math.cos(fetti.tiltAngle);
        fetti.random = Math.random() + 2;

        const progress = (fetti.tick++) / fetti.totalTicks;

        fetti.opacity = 1 - progress;

        this.ctx.font = `${16 * fetti.scalar}px "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif`;
        this.ctx.globalAlpha = fetti.opacity;
        this.ctx.fillText(
            fetti.emoji,
            fetti.wobbleX + (fetti.random * fetti.tiltCos),
            fetti.wobbleY + (fetti.random * fetti.tiltSin)
        );
        this.ctx.globalAlpha = 1;

        return fetti.tick < fetti.totalTicks;
    }

    private easeOutCubic(x: number): number {
        return 1 - Math.pow(1 - x, 3);
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
            ticks = 200,
            origin = { x: 0.5, y: 0.5 },
            emojis = ['🎉', '🎊', '✨', '⭐️', '🌟'],
        } = options;

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
                    color: 'white', // Not used for emojis
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

    public freeze(): void {
        this.freezeConfetti = true;
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
    freezeProgress: number;
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

export interface FireOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    scalar?: number;
    ticks?: number;
    origin?: { x: number; y: number };
    emojis?: string[];
}