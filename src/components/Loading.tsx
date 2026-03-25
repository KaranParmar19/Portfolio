import { useEffect, useState, useRef } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const bootLogs = [
  "INITIALIZING NEURAL FORGE KERNEL...",
  "RESOLVING DOM DEPENDENCIES...",
  "MOUNTING REACT NODE TREE...",
  "ALLOCATING VRAM FOR WEBGL...",
  "ESTABLISHING SECURE SOCKET CONNECTIONS...",
  "CACHING ASSETS AND FONTS...",
  "INJECTING GSAP SCROLLTRIGGERS...",
  "SYNCHRONIZING ANIMATION TIMELINES...",
  "CALIBRATING VIEWPORT DIMENSIONS...",
  "COMPILING FINAL BUNDLE...",
];

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  
  const stageRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Derive visible logs based on percentage
  useEffect(() => {
    const logCount = Math.floor((percent / 100) * bootLogs.length);
    setVisibleLogs(bootLogs.slice(0, logCount === 0 && percent > 0 ? 1 : logCount));
  }, [percent]);

  useEffect(() => {
    if (percent < 100) return;
    const t1 = setTimeout(() => {
      setLoaded(true);
      const t2 = setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
      return () => clearTimeout(t2);
    }, 600);
    return () => clearTimeout(t1);
  }, [percent >= 100]);

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 1200); // Wait for CRT animation
      }
    });
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (clicked || !wrapRef.current || !stageRef.current) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Spotlight update
    wrapRef.current.style.setProperty("--mouse-x", `${clientX}px`);
    wrapRef.current.style.setProperty("--mouse-y", `${clientY}px`);
    
    // 3D Tilt calculation
    const xPos = (clientX / innerWidth) - 0.5;
    const yPos = (clientY / innerHeight) - 0.5;
    
    // Rotate max 15deg
    stageRef.current.style.transform = `rotateX(${yPos * -15}deg) rotateY(${xPos * 15}deg)`;
  }

  // Calculate liquid fill path. Bottom to top.
  // 100% fill = 0% clip. 0% fill = 100% clip.
  const fillY = `${100 - percent}%`;

  return (
    <div 
      className={`loading-screen ${clicked ? "loading-exit" : ""}`}
      onMouseMove={handleMouseMove}
      ref={wrapRef}
    >
      <div className="loading-crt-overlay" />
      <div className="loading-spotlight" />
      
      <div className="loading-subtitle">SYSTEM BOOT</div>

      {/* Terminal Logs */}
      <div className="loading-terminal">
        {visibleLogs.map((log, idx) => (
          <div 
            key={idx} 
            className={`loading-log-line active ${idx === bootLogs.length - 1 && percent === 100 ? 'success' : ''}`}
          >
            &gt; {log} {idx === bootLogs.length - 1 && percent === 100 ? '[OK]' : ''}
          </div>
        ))}
      </div>

      {/* Centered Graphic */}
      <div className="loading-center-stage" ref={stageRef}>
        <div className={`loading-logo-wrapper ${loaded ? "loading-glitch" : ""}`}>
          <div style={{ position: "relative" }}>
            <h1 className="loading-logo-text">KP</h1>
            <h1 
              className="loading-logo-text loading-logo-fill" 
              style={{ '--fill-y': fillY } as React.CSSProperties}
            >
              KP
            </h1>
          </div>
          
          <div className="loading-progress-display">
            <span className="loading-percent">{percent}</span>
            <span className="loading-target">%</span>
            {loaded && <span className="loading-target" style={{ marginLeft: "12px", color: "white" }}>READY_</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;


