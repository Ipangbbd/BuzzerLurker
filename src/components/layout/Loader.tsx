import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const leftDoorControls = useAnimation();
  const rightDoorControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    // Start doors opening after mount
    setTimeout(() => {
      leftDoorControls.start({ x: '-100%' });
      rightDoorControls.start({ x: '100%' });
    }, 100);
    // Show content after doors are mostly open
    setTimeout(() => {
      contentControls.start({ opacity: 1, y: 0 });
    }, 900);
    // Finish loader after full animation
    const finishTimer = setTimeout(() => onFinish(), 1800);
    return () => clearTimeout(finishTimer);
  }, [onFinish, leftDoorControls, rightDoorControls, contentControls]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-dark overflow-hidden">
      {/* Sliding Doors */}
      <motion.div
        className="fixed top-0 left-0 h-full w-1/2 bg-primary-dark z-50"
        initial={{ x: 0 }}
        animate={leftDoorControls}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
        style={{ borderRight: '1px solid rgba(0,0,0,0.05)' }}
      />
      <motion.div
        className="fixed top-0 right-0 h-full w-1/2 bg-primary-dark z-50"
        initial={{ x: 0 }}
        animate={rightDoorControls}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
        style={{ borderLeft: '1px solid rgba(0,0,0,0.05)' }}
      />
      {/* Loader Content */}
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 32 }}
        animate={contentControls}
        transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
        style={{ zIndex: 10 }}
      >
        <div className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3333 16.0001C25.3333 21.1527 21.1526 25.3334 16 25.3334C10.8474 25.3334 6.66663 21.1527 6.66663 16.0001C6.66663 10.8475 10.8474 6.66675 16 6.66675C19.9372 6.66675 23.2851 9.13313 24.6666 12.3334" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 11.3333C18.8889 12.8888 19.3333 16.2222 19.3333 16.6666C19.3333 18.6666 18 20.6666 16 21.3333C14 20.6666 12.6667 18.6666 12.6667 16.6666C12.6667 16.2222 13.1111 12.8888 16 11.3333Z" fill="#dc2626" />
          </svg>
          <span className="text-2xl font-bold text-text-primary tracking-tight">buzzerlurker.com</span>
        </div>
        <div className="w-32 h-2 rounded-full bg-primary-light overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full bg-accent-teal rounded-full animate-loader-bar" style={{ width: '60%' }} />
        </div>
      </motion.div>
      <style>{`
        @keyframes loader-bar {
          0% { left: -60%; width: 40%; }
          50% { left: 30%; width: 60%; }
          100% { left: 100%; width: 40%; }
        }
        .animate-loader-bar {
          animation: loader-bar 1.2s cubic-bezier(.77,0,.18,1) infinite;
        }
      `}</style>
    </div>
  );
}
