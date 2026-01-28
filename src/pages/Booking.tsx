import { motion } from "framer-motion";
import Header from "@/components/Header";
import WavyUnderline from "@/components/WavyUnderline";

const Booking = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#253e35" }}>
      <Header compact />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className="text-3xl md:text-5xl font-dela mb-4 uppercase"
            style={{ color: "#E2FEA5" }}
          >
            Book Your <WavyUnderline>Free</WavyUnderline> Consultation
          </h1>
          <p
            className="text-lg font-bricolage max-w-xl mx-auto"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Select a date and fill in your details, and let's discuss how we can
            grow your business.
          </p>
        </motion.div>

        {/* Google Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden border"
          style={{
            backgroundColor: "#F8FFE8",
            borderColor: "rgba(208, 233, 153, 0.3)",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2LfQ_OWiyFvg1nG-vCR9-00AFU5SqCSRExcs-mQpcL-HoH0qR6soNQ1iCwm22yAzwJJT-qSmoc?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="1100"
            frameBorder="0"
            title="Book a consultation with EyeLevel Growth Studio"
            className="min-h-[900px] md:min-h-[1100px]"
            scrolling="no"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
