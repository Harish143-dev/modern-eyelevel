import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import WavyUnderline from "@/components/shared/WavyUnderline";
import SEO from "@/components/utils/SEO";
import { bookingPageSchema } from "@/hooks/schemas";
import CustomCalendarBooking from "@/components/booking/CustomCalendarBooking";

const Booking = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <SEO
        title="Book a Marketing Consultation | EyeLevel Growth Studio"
        description="Schedule a consultation with our marketing experts to unlock growth through strategy, performance marketing, AI, and branding."
        keywords={[
          "book marketing consultation",
          "growth strategy consultation",
          "performance marketing consultation",
          "branding consultation",
          "AI marketing consultation",
        ]}
        schema={bookingPageSchema}
        canonical="https://theeyelevelstudio.com/booking"
        url="https://theeyelevelstudio.com/booking"
      />
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-36 pb-10 sm:pb-14">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-dela mb-3 sm:mb-4 uppercase leading-relaxed text-primary"
          >
            Book Your <WavyUnderline>Free</WavyUnderline> Consultation
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg font-bricolage max-w-md sm:max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Select a date and fill in your details, and let's discuss how we can
            grow your business.
          </p>
        </motion.div>

        {/* Custom Booking Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-[2rem] overflow-hidden border-3 border-brand-black shadow-neo-md"
          style={{
            backgroundColor: "#F8FFE8",
          }}
        >
          <CustomCalendarBooking />
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;


