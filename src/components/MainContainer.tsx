import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Achievements from "./Achievements";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    const resizeHandler = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setSplitText();
        setIsDesktopView(window.innerWidth > 1024);
      }, 150);
    };
    // Initial call without debounce
    setSplitText();
    setIsDesktopView(window.innerWidth > 1024);
    window.addEventListener("resize", resizeHandler);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Work />
            <Achievements />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
