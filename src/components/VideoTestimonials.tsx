import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, X } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const testimonials = [
  {
    id: 1,
    quote: "We were burning cash on ads that went nowhere. EyeLevel didn't just 'tweak' our campaign; they rebuilt the engine. We stopped guessing and started printing revenue.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    result: "+312% ROI",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 2,
    quote: "I was tired of agencies sending me reports I couldn't understand. EyeLevel showed me exactly where the money was going. No jargon, just a straight line to growth.",
    author: "Marcus Chen",
    role: "Marketing Director",
    company: "Velocity Brands",
    result: "2.4x Revenue",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 3,
    quote: "They told us our funnel was broken. Three months later, our cost per lead dropped by 60%. That's not marketing—that's money printing.",
    author: "Jessica Park",
    role: "Founder",
    company: "EduSpark Academy",
    result: "-60% CPL",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 4,
    quote: "Other agencies gave us vanity metrics. EyeLevel gave us customers. Real ones. The kind that pay and stay.",
    author: "David Romano",
    role: "VP Sales",
    company: "PropTech Inc",
    result: "+847 Leads/mo",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 5,
    quote: "We thought we knew marketing. EyeLevel showed us we were leaving money on the table. Now we're scaling faster than ever.",
    author: "Amanda Foster",
    role: "CMO",
    company: "HealthTech Pro",
    result: "+425% Growth",
    thumbnail: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 6,
    quote: "Finally, an agency that speaks in dollars, not impressions. Our board is thrilled with the results.",
    author: "Robert Kim",
    role: "CEO",
    company: "FinServe Global",
    result: "$2.1M Added",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
];

const VideoTestimonials = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof testimonials[0] | null>(null);

  return (
    <section className="py-12 md:py-16 px-4 bg-[#0D1F1A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5"
          >
            <span className="text-sm font-medium font-bricolage" style={{ color: '#E2FEA5' }}>
              The Skeptic's Proof
            </span>
          </motion.div>
          <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            <span style={{ color: '#FFFFFF' }}>Proof That We</span>
            <br />
            <span className="relative inline-block">
              <span style={{ color: '#E2FEA5' }}>Don't Just Talk</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.path
                  d="M0 4 Q50 0, 100 4 T200 4"
                  fill="none"
                  stroke="#E2FEA5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.svg>
            </span>
          </h2>
          <p className="font-bricolage text-lg max-w-2xl mx-auto" style={{ color: '#F8FFE8' }}>
            Real results. Real revenue. Real people who stopped gambling on marketing.
          </p>
        </motion.div>

        {/* Testimonials Carousel - 3 at a time */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                  onMouseEnter={() => setHoveredId(testimonial.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="bg-[#1A2F28] rounded-3xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-lime/20 transition-all duration-500 group">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.author}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F28] via-black/30 to-transparent" />
                      
                      {/* Play Button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: hoveredId === testimonial.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          onClick={() => setSelectedVideo(testimonial)}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-sm shadow-2xl"
                          style={{ backgroundColor: '#D0E999', boxShadow: '0 25px 50px -12px rgba(208, 233, 153, 0.25)' }}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-[#0D1F1A] fill-current ml-1" />
                        </motion.button>
                      </motion.div>

                      {/* Result Badge */}
                      <motion.div
                        className="absolute top-4 right-4 text-[#0D1F1A] px-3 py-1.5 md:px-4 md:py-2 rounded-full font-dela text-xs md:text-sm"
                        style={{ backgroundColor: '#D0E999' }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {testimonial.result}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      <Quote className="w-8 h-8 text-lime/30 mb-3 -scale-x-100" />
                      
                      <p className="text-white/80 font-bricolage text-sm md:text-base leading-relaxed flex-1 mb-4 line-clamp-4">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="w-10 h-10 rounded-full bg-lime/20 overflow-hidden">
                          <img
                            src={testimonial.thumbnail}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white font-semibold font-bricolage text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-white/50 text-xs font-bricolage">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0 bg-transparent border-2 border-lime/30 text-lime hover:bg-lime hover:text-[#0D1F1A] hover:border-lime w-12 h-12 rounded-full transition-all duration-300" />
            <CarouselNext className="static translate-y-0 bg-transparent border-2 border-lime/30 text-lime hover:bg-lime hover:text-[#0D1F1A] hover:border-lime w-12 h-12 rounded-full transition-all duration-300" />
          </div>
        </Carousel>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-[#0D1F1A] border-lime/20 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>Video Testimonial from {selectedVideo?.author}</DialogTitle>
          </VisuallyHidden>
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative"
              >
                {/* Video Player */}
                <div className="aspect-video bg-black">
                  <iframe
                    src={selectedVideo.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Video Info Bar */}
                <div className="p-4 md:p-6 bg-[#1A2F28] flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-lime/30">
                      <img
                        src={selectedVideo.thumbnail}
                        alt={selectedVideo.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold font-bricolage">
                        {selectedVideo.author}
                      </p>
                      <p className="text-white/50 text-sm font-bricolage">
                        {selectedVideo.role}, {selectedVideo.company}
                      </p>
                    </div>
                  </div>
                  <div className="bg-lime text-[#0D1F1A] px-4 py-2 rounded-full font-dela text-sm">
                    {selectedVideo.result}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoTestimonials;
