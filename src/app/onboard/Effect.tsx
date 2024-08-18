'use client';
import { EmojiConfetti } from '@/lib/effect';
import * as React from 'react';
import type { FireOptions } from '@/lib/effect';

export const Effect = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [confetti, setConfetti] = React.useState<EmojiConfetti | null>(null);

  const emojis = ['🎉', '✨', '⭐️', '🌟', '🩷', '✨', '🌸', '🎈', '🎁', '🎀', '💛', '🩷', '🧡', '💗', '💓', '💙', '💚', '💖', '💘', '💝'];

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const emojiConfetti = new EmojiConfetti(canvas);
      setConfetti(emojiConfetti);
      emojiConfetti.fire({ emojis: ['🎉', '🎊', '✨', '⭐️', '🌟'], scalar: 2, spread: 560, gravity: 5 });
      setTimeout(() => emojiConfetti.fire({ emojis: ['🩷', '✨', '🌸', '🎈', '🎁'], scalar: 2, spread: 560, gravity: 5 }), 500);
      setTimeout(() => emojiConfetti.fire({ emojis: ['🎉', '✨', '⭐️', '🌟'], scalar: 2, spread: 560, gravity: 5 }), 1000);

      setInterval(() => emojiConfetti.fire({ emojis: ['🎉', '✨', '⭐️', '🌟'], scalar: 2, spread: 560, gravity: 5 }), 5000);
      setInterval(() => emojiConfetti.fire({ emojis: ['🩷', '✨', '🌸', '🎈', '🎁'], scalar: 2, spread: 560, gravity: 5 }), 3000);
    }
  }, [canvasRef]);
  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <canvas ref={canvasRef}></canvas>
      </div>
      <h1
        className="text-4xl font-semibold bg-gradient-to-r from-violet-600 to-red-500 inline-block bg-clip-text text-fil [-webkit-text-fill-color:transparent] [-webkit-background-clip:text] py-1 ornament gif relative cursor-pointer select-none"
        onClick={() =>
          confetti &&
          confetti.fire({
            emojis: Array.from({ length: 5 }, () => emojis[Math.floor(Math.random() * emojis.length)]),
            scalar: 2,
            spread: 560,
            gravity: 0,
          })
        }
      >
        Congratulation!
      </h1>
    </>
  );
};
