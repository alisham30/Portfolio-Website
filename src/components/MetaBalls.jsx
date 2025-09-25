import { useEffect, useRef } from 'react';
import './MetaBalls.css';

const MetaBalls = ({
  className = '',
  color = '#8b5cf6',
  speed = 0.3,
  enableMouseInteraction = true,
  ballCount = 15,
  cursorBallColor = '#ec4899',
  cursorBallSize = 3,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInside = false;

    // Create balls
    const balls = [];
    for (let i = 0; i < ballCount; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 30 + 20,
        originalRadius: Math.random() * 30 + 20,
      });
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    function onMouseMove(e) {
      if (!enableMouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function onMouseEnter() {
      if (!enableMouseInteraction) return;
      isMouseInside = true;
    }

    function onMouseLeave() {
      if (!enableMouseInteraction) return;
      isMouseInside = false;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw balls
      balls.forEach((ball, index) => {
        // Update position
        ball.x += ball.vx * speed;
        ball.y += ball.vy * speed;

        // Bounce off edges
        if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
          ball.vx = -ball.vx;
        }
        if (ball.y < ball.radius || ball.y > canvas.height - ball.radius) {
          ball.vy = -ball.vy;
        }

        // Keep balls in bounds
        ball.x = Math.max(ball.radius, Math.min(canvas.width - ball.radius, ball.x));
        ball.y = Math.max(ball.radius, Math.min(canvas.height - ball.radius, ball.y));

        // Create metaball effect by drawing multiple overlapping circles
        const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius * 2);
        gradient.addColorStop(0, color + '80');
        gradient.addColorStop(0.5, color + '40');
        gradient.addColorStop(1, color + '00');

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw cursor ball if mouse is inside
      if (isMouseInside && enableMouseInteraction) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, cursorBallSize * 20);
        gradient.addColorStop(0, cursorBallColor + '60');
        gradient.addColorStop(0.5, cursorBallColor + '30');
        gradient.addColorStop(1, cursorBallColor + '00');

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, cursorBallSize * 20, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    // Setup event listeners
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseenter', onMouseEnter);
    canvas.addEventListener('mouseleave', onMouseLeave);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseenter', onMouseEnter);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [color, cursorBallColor, speed, enableMouseInteraction, ballCount, cursorBallSize]);

  return <canvas ref={canvasRef} className={`metaballs-container ${className}`} />;
};

export default MetaBalls;
