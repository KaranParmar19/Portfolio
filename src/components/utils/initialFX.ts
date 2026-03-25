import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

gsap.registerPlugin(SplitText);

let hasRun = false;

export function initialFX() {
  if (hasRun) return; // Prevent React StrictMode double-execution
  hasRun = true;

  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }

  // Set the background completely black initially, then fade to obsidian
  gsap.to("body", {
    backgroundColor: "var(--bg)",
    duration: 0.5,
    delay: 0.1,
  });

  // Setup GSAP Timeline
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Ensure these elements are hidden for the splash sequence
  gsap.set([
    ".landing-status",
    ".landing-greeting",
    ".landing-name",
    ".landing-role-line",
    ".landing-cta-row a",
    ".landing-stat",
    ".landing-stat-divider",
    ".landing-float-tag",
    ".landing-scroll"
  ], { opacity: 0 });
  gsap.set(".header, .icons-section", { opacity: 0 });

  // ==========================================
  // SPLASH SEQUENCE (Title Card flashes)
  // ==========================================
  
  // 1. SOFTWARE
  tl.fromTo(".splash-word-1",
    { opacity: 0, scale: 0.85, filter: "blur(8px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.15, ease: "power2.out" }
  )
  .to(".splash-word-1", { opacity: 0, scale: 1.1, filter: "blur(4px)", duration: 0.15 }, "+=0.15")
  
  // 2. DEVELOPMENT
  .fromTo(".splash-word-2",
    { opacity: 0, scale: 0.85, filter: "blur(8px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.15, ease: "power2.out" }
  )
  .to(".splash-word-2", { opacity: 0, scale: 1.1, filter: "blur(4px)", duration: 0.15 }, "+=0.15")
  
  // 3. ENGINEER (Hits hard, turns amber, explodes out to reveal the site)
  .fromTo(".splash-word-3",
    { opacity: 0, scale: 0.85, filter: "blur(8px)", color: "var(--text-primary)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", color: "var(--amber)", duration: 0.2, ease: "power2.out" }
  )
  .to(".splash-word-3", { 
    opacity: 0, 
    scale: 3, 
    filter: "blur(20px)", 
    duration: 0.5, 
    ease: "power4.in" 
  }, "+=0.4")
  .set(".landing-splash-overlay", { display: "none" }) // Kill overlay

  // ==========================================
  // REGULAR LANDING ENTRANCE
  // ==========================================

  // Fade in fixed header & socials
  .fromTo(
    ".header, .icons-section",
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.2" // Overlap slightly with the explosion
  )

  // 1. Status Pill
  .fromTo(
    ".landing-status",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8 },
    "-=0.6"
  )
  // 2. Greeting "Hi, I'm"
  .fromTo(
    ".landing-greeting",
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.8 },
    "-=0.6"
  )
  // 3. The huge Name text
  .fromTo(
    ".landing-name",
    { opacity: 0, y: 50, filter: "blur(10px)" },
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
    "-=0.6"
  )
  // 4. Role Line (Divider + Text)
  .fromTo(
    ".landing-role-line",
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 1 },
    "-=0.5"
  )
  // 5. CTAs
  .fromTo(
    ".landing-cta-row a",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
    "-=0.6"
  )
  // 6. Stats Row
  .fromTo(
    ".landing-stat, .landing-stat-divider",
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.05 },
    "-=0.6"
  )
  // 7. Floating Decor Tags on the right
  .fromTo(
    ".landing-float-tag",
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 1.2 },
    "-=0.6"
  )
  // 8. Scroll Down Indicator
  .fromTo(
    ".landing-scroll",
    { opacity: 0, height: 0 },
    { opacity: 1, height: "100px", duration: 1 },
    "-=0.2"
  );
}
