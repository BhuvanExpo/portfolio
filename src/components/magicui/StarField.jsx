import { useRef, useEffect } from 'react';


const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const STAR_COUNT = 200;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }));

    const MAX_FALLING = 6;
    const fallingStars = [];

    const createFallingStar = () => ({
      x: Math.random() * width * 1.2 - width * 0.1,
      y: -10,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 3 + 2,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      opacity: 1,
      thickness: Math.random() * 1.5 + 0.5,
      life: 0,
      maxLife: Math.random() * 200 + 150,
    });

    for (let i = 0; i < 3; i++) {
      const star = createFallingStar();
      star.y = Math.random() * height * 0.5;
      star.life = Math.random() * 100;
      fallingStars.push(star);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.opacity += star.twinkleSpeed * star.twinkleDir;
        if (star.opacity >= 1) { star.opacity = 1; star.twinkleDir = -1; }
        if (star.opacity <= 0.1) { star.opacity = 0.1; star.twinkleDir = 1; }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
        ctx.fill();
      }

      for (let i = fallingStars.length - 1; i >= 0; i--) {
        const fs = fallingStars[i];

        fs.x += Math.cos(fs.angle) * fs.speed;
        fs.y += Math.sin(fs.angle) * fs.speed;
        fs.life++;

        const fadeStart = fs.maxLife * 0.7;
        if (fs.life > fadeStart) {
          fs.opacity = 1 - (fs.life - fadeStart) / (fs.maxLife - fadeStart);
        }

        const tailX = fs.x - Math.cos(fs.angle) * fs.length;
        const tailY = fs.y - Math.sin(fs.angle) * fs.length;

        const gradient = ctx.createLinearGradient(fs.x, fs.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${fs.opacity * 0.9})`);
        gradient.addColorStop(0.4, `rgba(200, 210, 255, ${fs.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(150, 180, 255, 0)`);

        ctx.beginPath();
        ctx.moveTo(fs.x, fs.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = fs.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(fs.x, fs.y, fs.thickness + 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${fs.opacity * 0.8})`;
        ctx.fill();

        if (fs.life >= fs.maxLife || fs.y > height + 20 || fs.x > width + 20) {
          fallingStars.splice(i, 1);
        }
      }

      if (fallingStars.length < MAX_FALLING && Math.random() < 0.02) {
        fallingStars.push(createFallingStar());
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
