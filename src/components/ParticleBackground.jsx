import { useEffect, useRef } from 'react';

const GRID_COLS = 16;
const GRID_ROWS = 10;
const COUNT = GRID_COLS * GRID_ROWS;
const INFLUENCE_RADIUS = 180; // px
const PULL_STRENGTH = 0.018;
const RETURN_SPEED = 0.012;

export default function ParticleBackground() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);
  const posRef = useRef([]); // current positions
  const origRef = useRef([]); // original positions
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const digits = '123456789';

    // Build grid items
    container.innerHTML = '';
    elementsRef.current = [];
    posRef.current = [];
    origRef.current = [];

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const cellW = cw / GRID_COLS;
    const cellH = ch / GRID_ROWS;

    for (let i = 0; i < COUNT; i++) {
      const col = i % GRID_COLS;
      const row = Math.floor(i / GRID_COLS);
      const ox = col * cellW + cellW / 2;
      const oy = row * cellH + cellH / 2;

      const el = document.createElement('span');
      el.textContent = digits[i % digits.length];
      el.style.cssText = `
        position: absolute;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px;
        font-weight: 500;
        color: rgba(46,46,56,0.9);
        transform: translate(-50%, -50%);
        pointer-events: none;
        user-select: none;
        will-change: transform, left, top, color;
        transition: color 0.3s;
      `;
      el.style.left = `${ox}px`;
      el.style.top = `${oy}px`;
      container.appendChild(el);
      elementsRef.current.push(el);
      posRef.current.push({ x: ox, y: oy });
      origRef.current.push({ x: ox, y: oy });
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      const cw2 = window.innerWidth;
      const ch2 = window.innerHeight;
      const cellW2 = cw2 / GRID_COLS;
      const cellH2 = ch2 / GRID_ROWS;
      for (let i = 0; i < COUNT; i++) {
        const col = i % GRID_COLS;
        const row = Math.floor(i / GRID_COLS);
        const ox = col * cellW2 + cellW2 / 2;
        const oy = row * cellH2 + cellH2 / 2;
        origRef.current[i] = { x: ox, y: oy };
      }
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < COUNT; i++) {
        const orig = origRef.current[i];
        const pos = posRef.current[i];
        const dx = mx - orig.x;
        const dy = my - orig.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < INFLUENCE_RADIUS) {
          const force = 1 - dist / INFLUENCE_RADIUS;
          const pull = force * force * PULL_STRENGTH;
          pos.x += (mx - pos.x) * pull;
          pos.y += (my - pos.y) * pull;

          // accent color: electric volt #b3f000 tinted
          const t = force;
          const r = Math.round(46 + (179 - 46) * t);
          const g = Math.round(46 + (240 - 46) * t);
          const b = Math.round(56 + (0 - 56) * t);
          const alpha = 0.12 + t * 0.55;
          elementsRef.current[i].style.color = `rgba(${r},${g},${b},${alpha})`;
        } else {
          pos.x += (orig.x - pos.x) * RETURN_SPEED;
          pos.y += (orig.y - pos.y) * RETURN_SPEED;
          elementsRef.current[i].style.color = 'rgba(46,46,56,0.9)';
        }

        elementsRef.current[i].style.left = `${pos.x}px`;
        elementsRef.current[i].style.top = `${pos.y}px`;
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}