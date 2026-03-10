import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple fade-in animation on mount
    setIsLoaded(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'transparent', position: 'relative', overflowX: 'hidden' }}>
      {/* CSS Styles injected via style tag for component portability */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@400;600&family=Syne:wght@700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap');

          body {
            font-family: 'Outfit', sans-serif;
            margin: 0;
            background-color: #050505;
          }
          
          .premium-text {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          .font-logo {
            font-family: 'Syne', sans-serif;
          }

          /* High-Quality SVG Noise/Grain Overlay */
          .bg-grain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 1; /* Above the glow, below the content */
            opacity: 0.12; 
            mix-blend-mode: overlay; 
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }

          /* The "10 Minutes" Text */
          .hero-text-10min {
            background: linear-gradient(180deg, #FC8019 20%, #e06c0e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0px 10px 30px rgba(252, 128, 25, 0.15);
          }

          /* --- NEW RAPID MEDIA STYLES --- */
          .font-image-match { 
            font-family: "Zalando Sans Expanded", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
          }
          .font-covered { 
            font-family: 'Covered By Your Grace', cursive; 
          }
          .media-style {
            letter-spacing: -0.04em;
            line-height: 1.1; /* Increased from 0.6 to prevent the 'i' dot from being clipped */
            transform: skew(-8deg, -4deg);
            display: inline-block;
            padding-top: 0.1em; /* Adds a tiny buffer to guarantee the top isn't cut off */
          }
          .text-colorfull {
            background-image: linear-gradient(to right, #fc8019, #ffb347, #ff6a00, #fc8019);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 3s linear infinite;
          }
          
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease-out, transform 1s ease-out;
          }
          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      {/* The Grain/Noise Overlay */}
      <div className="bg-grain" />

      {/* Main Content */}
      <div className="w-full relative flex justify-center items-start z-10 premium-text">
        <div className="w-full max-w-7xl px-4 pt-4 md:pt-6 text-center flex flex-col items-center sticky top-0 h-screen">
            
          {/* HEADER AREA */}
          <div className="w-full relative flex items-center justify-between md:justify-center mb-10 mt-2">
              
            {/* LEFT: Menu */}
            <button className="md:absolute md:left-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white bg-white flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 active:scale-95">
              <div className="flex flex-col gap-1 md:gap-1.5 items-center justify-center w-4 md:w-5">
                <span className="w-full h-[1.5px] bg-black rounded-full" />
                <span className="w-2/3 h-[1.5px] bg-black rounded-full self-start" />
              </div>
            </button>

            {/* CENTER: Logo */}
            <div className="group cursor-pointer z-10 mx-auto md:mx-0">
              <h2 className="font-logo text-white text-2xl md:text-4xl font-extrabold tracking-tight lowercase">
                yr media
              </h2>
            </div>

            {/* RIGHT: Let's Talk */}
            <button className="md:absolute md:right-0 px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-white bg-white flex items-center gap-2 md:gap-3 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95">
              <span className="text-black text-[10px] md:text-sm font-semibold tracking-wide uppercase md:normal-case">Talk</span>
              <span className="hidden md:flex w-6 h-6 rounded-full bg-black items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>

          {/* Text Content */}
          <div className="relative flex flex-col items-center w-full mt-10 md:mt-16">
            
            <div className={`flex flex-col items-center justify-center fade-in ${isLoaded ? 'visible' : ''} w-full`}>
              
              {/* "YOUR RAPID" - Side by side */}
              <div className="flex flex-row items-center space-x-2 md:space-x-3 lg:space-x-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-image-match uppercase tracking-[0.15em] font-light leading-none text-center">
                <span className="text-white">Your</span>
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
                  Rapid
                </span>
              </div>

              {/* "media" - Centered below with animated orange gradient and skew */}
              {/* Using negative margins to pull the word up closer */}
              <div className="-mt-2 md:-mt-4 lg:-mt-6 flex justify-center relative z-20">
                <span className="font-covered media-style animate-gradient-x text-colorfull text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl lowercase pr-2">
                  media
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
