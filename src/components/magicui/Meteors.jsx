// Pre-computed at module level so Math.random() is never called during render
const MAX_METEORS = 40;
const METEOR_POOL = Array.from({ length: MAX_METEORS }, (_, idx) => ({
  id: idx,
  left: Math.floor(Math.random() * 800 - 400) + 'px',
  delay: (Math.random() * 0.6 + 0.2).toFixed(2) + 's',
  duration: Math.floor(Math.random() * 8 + 2) + 's',
}));

export const Meteors = ({ number = 20 }) => {
  const meteors = METEOR_POOL.slice(0, number);

  return (
    <>
      {meteors.map((m) => (
        <span
          key={'meteor' + m.id}
          className="animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          style={{ top: 0, left: m.left, animationDelay: m.delay, animationDuration: m.duration }}
        ></span>
      ))}
    </>
  );
};