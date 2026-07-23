import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import eyelevelLogo from "@/assets/branding/eyelevel_Logo.svg";
import mascotGrowth from "@/assets/global/mascot/hide.webp";
const navLinks = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/industries",
    label: "Industries",
  },
  {
    href: "/work",
    label: "Portfolio",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

// Custom filled social icons
const SocialIcons = {
  YouTube: () => (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-black">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-black">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-black">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-black">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};
interface HeaderProps {
  compact?: boolean;
}

const Header = ({ compact = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skip scroll behavior for compact mode or if window doesn't exist
    if (compact || typeof window === "undefined") {
      setIsHeaderVisible(true);
      setShowBackToTop(false);
      return;
    }

    const handleScroll = () => {
      // Hero section is approximately 90vh, so around 600-800px
      const heroHeight = window.innerHeight * 0.85;
      const scrollY = window.scrollY;

      // Hide header after scrolling past hero
      setIsHeaderVisible(scrollY < heroHeight);

      // Show back to top button after scrolling past hero
      setShowBackToTop(scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [compact]);

  // We'll use a fixed fullscreen overlay instead of document listeners to ensure it works flawlessly on iOS mobile devices.

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  const scrollToTop = () =>
    new Promise<void>((resolve) => {
      if (typeof window === "undefined") {
        resolve();
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });

      const check = () => {
        if (window.scrollY <= 1) resolve();
        else requestAnimationFrame(check);
      };

      check();
    });

  const openMenuAndScrollTop = async () => {
    await scrollToTop();
    setIsMenuOpen(true);
  };

  return (
    <>
      {/* Invisible Fullscreen Backdrop to catch outside clicks reliably on iOS/Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-transparent"
          />
        )}
      </AnimatePresence>

      {/* Main Header - fades out after hero */}
      <motion.header
        ref={headerRef}
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: isHeaderVisible || isMenuOpen ? 1 : 0,
          y: isHeaderVisible || isMenuOpen ? 0 : -20,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        style={{
          pointerEvents: isHeaderVisible || isMenuOpen ? "auto" : "none",
        }}
        className="absolute top-5 left-0 right-0 z-50 py-0 max-w-5xl mx-auto px-4 md:px-8"
      >
        <nav className="w-full flex items-center justify-between">
          <div
            className="w-full bg-card border-3 border-brand-black shadow-neo-sm px-5 py-2 transition-all rounded-full flex items-center justify-between"
          >
            <Link to="/" className="relative z-50 flex items-center">
              <img loading="lazy"
                src={eyelevelLogo}
                alt="Eyelevel Studio"
                title="Eyelevel Studio"
                className="h-[35px] md:h-[45px] w-auto z-50"
              />
            </Link>

            {!compact && (
              <div className="hidden lg:flex items-center space-x-6 font-bricolage z-50">
                {navLinks.map((link) => {
                  const isActive = location.pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`relative transition-colors text-[15px] ${isActive
                        ? "text-brand-black font-bold"
                        : "text-brand-black/70 hover:text-brand-black font-medium"
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="header-active-indicator"
                          className="absolute -bottom-[4px] left-0 right-0 h-[1.5px] bg-brand-black rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            )}

            {compact ? (
              <div className="hidden md:flex relative items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl relative transition-transform hover:scale-105 bg-card border-3 border-brand-black text-brand-black flex items-center justify-center"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center rounded-full relative font-bricolage z-50">
                <Link to="/booking">
                  <Button
                    size="sm"
                    className="px-6 font-semibold"
                  >
                    Book a call
                  </Button>
                </Link>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center ml-2 transition-transform hover:scale-105 border border-brand-black bg-brand-black text-white"
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden border border-brand-black bg-brand-black text-white w-8 h-8 flex items-center justify-center rounded-full transition-colors z-50"
            >
              {isMenuOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </button>
          </div>
        </nav>

        {/* Expandable fullscreen navigation menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
                y: -10,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                y: 0,
              }}
              exit={{
                height: 0,
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="absolute top-[110%] left-0 right-0 w-full z-40 px-4 md:px-8"
            >
              {/* Cream outer frame with dark green interior */}
              <div
                className="rounded-3xl p-1.5 bg-card border-2 border-brand-black shadow-neo-sm overflow-hidden"
              >
                {/* Dark green interior */}
                <div
                  className="rounded-2xl relative min-h-[40vh] md:min-h-[30vh] bg-background flex flex-col justify-center py-8 overflow-hidden"
                >
                  {/* Navigation links - centered */}
                  <div className="flex flex-col items-center justify-center relative z-10 space-y-1 md:space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`font-dela text-xl md:text-2xl lg:text-3xl tracking-[0.08em] transition-all duration-200 text-primary hover:scale-105 block py-3 md:py-2 text-center ${location.pathname.startsWith(link.href) ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                        >
                          {link.label.toUpperCase()}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mascot inside bottom right corner */}
                  <img loading="lazy"
                    src={mascotGrowth}
                    alt="Eyelevel Mascot"
                    title="Eyelevel Mascot"
                    className="absolute -right-2.5 md:-right-3 bottom-2 md:bottom-4 w-28 md:w-36 lg:w-48 object-contain pointer-events-none opacity-40 md:opacity-100"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header >

      {/* Floating Back to Top / Menu Button */}
      <AnimatePresence>
        {
          showBackToTop && !isMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 100,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 100,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed right-6 bottom-8 z-50 flex flex-col gap-3"
            >
              {/* Menu Button */}
              {/* <motion.button
                onClick={openMenuAndScrollTop}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group relative w-14 h-14 rounded-2xl flex items-center justify-center font-bricolage overflow-hidden bg-primary border-3 border-brand-black"
              >
                <Menu className="w-5 h-5 text-black relative z-10" />

              </motion.button> */}

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden bg-primary border-3 border-brand-black"
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUp className="w-5 h-5 text-black relative z-10" />
                </motion.div>

              </motion.button>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
};
export default Header;


