import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";
import teamImage1 from "@/assets/galleries/about/aboutImage1.jpeg";
import teamImage2 from "@/assets/galleries/about/aboutImg2.jpg";
import teamImage3 from "@/assets/galleries/about/aboutImg3.jpeg";
import teamImage4 from "@/assets/galleries/about/aboutImg4.jpg";
import video from "@/assets/videos/videogallery.mp4";
import video1 from "@/assets/videos/videogallery2.mp4";

const galleryImages = [
  { src: teamImage1, alt: "Team collaboration" },
  { src: teamImage2, alt: "Team in action" },
  { src: teamImage3, alt: "Strategy session" },
  { src: teamImage2, alt: "Team meeting" },
  { src: teamImage3, alt: "Creative work" },
  { src: teamImage4, alt: "Team building" },
];

const videoMap: Record<number, string> = {
  1: video1, // 2nd item
  2: video, // 3rd item
};

const Gallery = () => {
  return (
    <section className="px-4 relative bg-background py-[100px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span className="text-sm font-medium font-bricolage text-primary">
              Gallery
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary">
            LIFE AT <WavyUnderline>EYELEVEL</WavyUnderline>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => {
            const videoSrc = videoMap[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl group ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* VIDEO OR IMAGE */}
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    onLoadedMetadata={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.defaultMuted = true;
                      e.currentTarget.volume = 0;
                    }}
                    onPlay={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.volume = 0;
                    }}
                    className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    title={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(23, 50, 41, 0.8), transparent)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
