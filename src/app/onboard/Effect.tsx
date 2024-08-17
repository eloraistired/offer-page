'use client';
import { ConfettiPiece } from '@/lib/effect';
import * as React from 'react';

export const Effect = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      new ConfettiPiece({ container: container, canvas: canvas }).init();
    }
  }, [canvasRef, containerRef]);
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
