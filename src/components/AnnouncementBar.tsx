import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Check if user has already closed the bar in this session
    const barClosed = sessionStorage.getItem("announcementBarClosed");
    if (!barClosed) {
      // Delay the appearance for a smooth entry after page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsClosed(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementBarClosed", "true");
    setTimeout(() => setIsClosed(true), 300);
  };

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-[60] overflow-hidden"
          style={{ backgroundColor: "#E2FEA5" }}
        >
          <div className="relative py-3 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
              <Link 
                to="/booking" 
                className="flex items-center gap-2 group"
              >
                <span 
                  className="font-bricolage font-semibold text-sm md:text-base"
                  style={{ color: "#0a0a0a" }}
                >
                  🚀 Get your free growth audit
                </span>
                <ArrowRight 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  style={{ color: "#0a0a0a" }}
                />
              </Link>
            </div>
            
            <button
              onClick={handleClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors hover:bg-black/10"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" style={{ color: "#0a0a0a" }} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
