import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

interface MediaItem {
  src: string;
  type: "image" | "video";
}

interface ServiceGalleryProps {
  media: MediaItem[];
  title: string;
  autoScrollInterval?: number;
}

const ServiceGallery = ({
  media,
  title,
  autoScrollInterval = 4000,
}: ServiceGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = media[currentIndex];
  const isCurrentVideo = currentItem?.type === "video";

  const nextSlide = useCallback(() => {
    if (isVideoPlaying) return;
    setCurrentIndex((prev) => (prev + 1) % media.length);
  }, [media.length, isVideoPlaying]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsVideoPlaying(false);
  }, [media.length]);

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsVideoPlaying(false);
  };

  // Intersection Observer for auto-play on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play video when in view
  useEffect(() => {
    if (isCurrentVideo && videoRef.current) {
      if (isInView) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  }, [isInView, isCurrentVideo, currentIndex]);

  // Auto-scroll functionality (only for images)
  useEffect(() => {
    if (media.length <= 1 || isPaused || isVideoPlaying || isCurrentVideo)
      return;

    const interval = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(interval);
  }, [
    media.length,
    isPaused,
    autoScrollInterval,
    nextSlide,
    isVideoPlaying,
    isCurrentVideo,
  ]);

  // Handle video play/pause
  const toggleVideoPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch {
        setIsVideoPlaying(false);
      }
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  };

  // Reset video state when changing slides
  useEffect(() => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // Auto-play if coming to a video slide while in view
    if (isCurrentVideo && isInView && videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play();
        setIsVideoPlaying(true);
      }, 100);
    }
  }, [currentIndex, isCurrentVideo, isInView]);

  if (media.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative group rounded-3xl overflow-hidden aspect-[6/4]"
      style={{
        border: "1px solid rgba(226, 254, 165, 0.15)",
        boxShadow: "0 25px 80px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Media Content - Cross dissolve effect */}
      <AnimatePresence initial={false}>
        {isCurrentVideo ? (
          <motion.div
            key={`video-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              ref={videoRef}
              src={currentItem.src}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              onClick={toggleVideoPlay}
            />
            {/* Video Controls Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isVideoPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
              style={{
                backgroundColor: isVideoPlaying
                  ? "transparent"
                  : "rgba(0,0,0,0.2)",
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleVideoPlay}
                className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(226, 254, 165, 0.3)",
                  border: "2px solid rgba(226, 254, 165, 0.5)",
                }}
              >
                {isVideoPlaying ? (
                  <Pause className="w-8 h-8" style={{ color: "#E2FEA5" }} />
                ) : (
                  <Play className="w-8 h-8 ml-1" style={{ color: "#E2FEA5" }} />
                )}
              </motion.button>
            </div>

            {/* Mute Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="absolute bottom-4 left-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md z-10"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.2)",
                border: "1px solid rgba(226, 254, 165, 0.3)",
              }}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" style={{ color: "#E2FEA5" }} />
              ) : (
                <Volume2 className="w-5 h-5" style={{ color: "#E2FEA5" }} />
              )}
            </motion.button>
          </motion.div>
        ) : (
          <motion.img
            key={`image-${currentIndex}`}
            src={currentItem.src}
            alt={`${title} - Image ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1A] via-[#0D1F1A]/20 to-transparent opacity-70 pointer-events-none" />

      {/* Navigation Arrows - Only show if multiple items */}
      {media.length > 1 && (
        <>
          {/* Left Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.2)",
              border: "1px solid rgba(226, 254, 165, 0.3)",
            }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: "#E2FEA5" }} />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              handleNextClick();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.2)",
              border: "1px solid rgba(226, 254, 165, 0.3)",
            }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: "#E2FEA5" }} />
          </motion.button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                  setIsVideoPlaying(false);
                }}
                className="transition-all duration-300"
              >
                <motion.div
                  animate={{
                    width: index === currentIndex ? 24 : 8,
                    backgroundColor:
                      index === currentIndex
                        ? "#E2FEA5"
                        : "rgba(226, 254, 165, 0.4)",
                  }}
                  className="h-2 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </>
      )}

      {/* Media Counter & Type Indicator */}
      {/* {media.length > 1 && (
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md text-sm font-bricolage font-medium flex items-center gap-2 z-10"
          style={{
            backgroundColor: "rgba(13, 31, 26, 0.7)",
            color: "#E2FEA5",
            border: "1px solid rgba(226, 254, 165, 0.2)",
          }}
        >
          {isCurrentVideo && <Play className="w-3 h-3" />}
          {currentIndex + 1} / {media.length}
        </div>
      )} */}
    </div>
  );
};

export default ServiceGallery;
