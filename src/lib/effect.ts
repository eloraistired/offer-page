export class ConfettiPiece {
    x: number;
    y: number;
    size: number;
    color: string;
    speedY: number;
    speedX: number;
    angle: number;
    rotationSpeed: number;
    opacity: number;
    pieces: ConfettiPiece[];
    colors: string[];
    container: HTMLElement;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    constructor({ container, canvas }: { container: HTMLElement, canvas: HTMLCanvasElement }) {
        this.container = container;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.pieces = [];
        this.colors = ['#1f8ffd', '#f9a15e', '#0dc100', '#6d5ac9', '#da153a', '#3e83bd'];
        this.x = Math.random() * this.canvas.width;
        this.y = -10;
        this.size = Math.random() * 5 + 5;
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.speedY = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.angle = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.opacity = 1;
    }

    create() {
        for (let i = 0; i < 200; i++) {
            this.pieces.push(new ConfettiPiece({ container: this.container, canvas: this.canvas }));
        }
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += this.rotationSpeed;
        if (this.y > this.canvas.height) {
            this.opacity -= 0.02;
        }
    }

    draw() {
        this.ctx?.save();
        this.ctx?.translate(this.x, this.y);
        this.ctx?.rotate(this.angle * Math.PI / 180);
        this.ctx && (this.ctx.fillStyle = this.color);
        this.ctx && (this.ctx.globalAlpha = this.opacity);
        this.ctx?.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        this.ctx?.restore();
    }

    animate() {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.pieces.forEach((piece, index) => {
            piece.update();
            piece.draw();
            if (piece.opacity <= 0) {
                this.pieces.splice(index, 1);
            }
        });
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    init() {
        this.container.appendChild(this.canvas);
        this.create();
        this.bindEvents();
        this.animate();
    }
}
