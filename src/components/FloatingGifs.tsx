import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaTimes } from "react-icons/fa";

const basePath = import.meta.env.BASE_URL;


const gifUrls = [
  `${basePath}gifs/gif1.gif`,
  `${basePath}gifs/gif2.gif`,
  `${basePath}gifs/gif3.gif`,
  `${basePath}gifs/gif4.gif`,
  `${basePath}gifs/gif5.gif`,
  `${basePath}gifs/gif6.gif`,
  `${basePath}gifs/gif7.gif`,
  `${basePath}gifs/gif8.gif`,
  `${basePath}gifs/gif9.gif`,
  `${basePath}gifs/gif10.gif`,
  `${basePath}gifs/gif11.gif`,
  `${basePath}gifs/gif12.gif`,
  `${basePath}gifs/gif13.gif`,
  `${basePath}gifs/gif14.gif`,
];

interface FloatingGifItem {
  id: number;
  imageUrl: string;
  x: number;
  y: number;
}

interface FloatingGifsProps {
  isVideoPlaying?: boolean;
  showInterval?: number;
  changeInterval?: number;
}

export default function FloatingGifs({ 
  isVideoPlaying = false, 
  showInterval = 15000,
  changeInterval = 10000,
}: FloatingGifsProps) {
  const [currentGif, setCurrentGif] = useState<FloatingGifItem | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const changeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const floatRef = useRef<HTMLDivElement>(null);

  const getRandomPosition = useCallback(() => {
    const padding = 80;
    const gifSize = 160;
    const maxX = window.innerWidth - gifSize - padding;
    const maxY = window.innerHeight - gifSize - padding;
    return { 
      x: Math.max(padding, Math.min(maxX, Math.random() * maxX)), 
      y: Math.max(padding, Math.min(maxY, Math.random() * maxY))
    };
  }, []);

  const getRandomGif = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * gifUrls.length);
    const position = getRandomPosition();
    return {
      id: Date.now(),
      imageUrl: gifUrls[randomIndex],
      x: position.x,
      y: position.y,
    };
  }, [getRandomPosition]);

  const showGif = useCallback(() => {
    if (isVideoPlaying) return;
    const newGif = getRandomGif();
    setCurrentGif(newGif);
  }, [isVideoPlaying, getRandomGif]);

  const scheduleNextGif = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isVideoPlaying && !currentGif) {
        showGif();
      }
    }, showInterval);
  }, [isVideoPlaying, currentGif, showGif, showInterval]);

  useEffect(() => {
    scheduleNextGif();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNextGif]);

  useEffect(() => {
    if (!currentGif || isVideoPlaying) return;
    
    const runChangeCycle = () => {
      if (changeTimerRef.current) clearTimeout(changeTimerRef.current);
      changeTimerRef.current = setTimeout(() => {
        if (currentGif && !isVideoPlaying) {
          const newGif = getRandomGif();
          setCurrentGif(newGif);
          runChangeCycle();
        }
      }, changeInterval);
    };
    runChangeCycle();
    
    return () => {
      if (changeTimerRef.current) clearTimeout(changeTimerRef.current);
    };
  }, [currentGif, isVideoPlaying, getRandomGif, changeInterval]);

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const handleActivity = () => {
      if (currentGif) {
        setCurrentGif(null);
        if (changeTimerRef.current) clearTimeout(changeTimerRef.current);
      }
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (!isVideoPlaying && !currentGif) {
          showGif();
        }
      }, showInterval);
    };

    events.forEach(event => window.addEventListener(event, handleActivity));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleActivity));
    };
  }, [currentGif, isVideoPlaying, showGif, showInterval]);

  useEffect(() => {
    if (!currentGif || isDragging) return;

    let time = 0;
    let animationId: number;

    const animate = () => {
      if (!floatRef.current) return;
      time += 0.02;
      
      const moveX = Math.sin(time) * 30;
      const moveY = Math.cos(time * 1.2) * 25;
      const rotate = Math.sin(time * 0.8) * 8;
      const scale = 1 + Math.sin(time * 1.5) * 0.03;
      
      floatRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg) scale(${scale})`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [currentGif, isDragging]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !currentGif) return;
    
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    let newX = startPos.x + deltaX;
    let newY = startPos.y + deltaY;
    
    const gifSize = 160;
    newX = Math.max(0, Math.min(window.innerWidth - gifSize, newX));
    newY = Math.max(0, Math.min(window.innerHeight - gifSize, newY));
    
    setCurrentGif(prev => prev ? { ...prev, x: newX, y: newY } : null);
  }, [isDragging, dragStart.x, dragStart.y, startPos.x, startPos.y, currentGif]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setStartPos({ x: currentGif?.x || 0, y: currentGif?.y || 0 });
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleClose = () => {
    setCurrentGif(null);
    if (changeTimerRef.current) clearTimeout(changeTimerRef.current);
  };

  useEffect(() => {
    const handleResize = () => {
      if (currentGif) {
        const gifSize = 160;
        const maxX = window.innerWidth - gifSize;
        const maxY = window.innerHeight - gifSize;
        setCurrentGif(prev => prev ? {
          ...prev,
          x: Math.max(0, Math.min(maxX, prev.x)),
          y: Math.max(0, Math.min(maxY, prev.y))
        } : null);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentGif]);

  return (
    <AnimatePresence>
      {currentGif && (
        <motion.div
          key={currentGif.id}
          initial={{ opacity: 0, scale: 0.2, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.2, rotate: 180 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
          style={{
            position: 'fixed',
            left: currentGif.x,
            top: currentGif.y,
            zIndex: 9999,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
        >
          <div ref={floatRef} className="relative group">
            <img
              src={currentGif.imageUrl}
              alt="Floating"
              className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full shadow-2xl cursor-grab active:cursor-grabbing"
              onDragStart={(e) => e.preventDefault()}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center text-4xl';
                  fallback.innerHTML = '🎉';
                  parent.appendChild(fallback);
                }
              }}
            />
            
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl group-hover:bg-yellow-400/30 transition-all duration-300" />
            
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
            >
              <FaTimes size={12} />
            </button>
            
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
              🖱️ Перетащи меня!
            </div>
          </div>
          
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black/30 rounded-full blur-md transition-all duration-300 group-hover:w-32 group-hover:bg-black/40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}