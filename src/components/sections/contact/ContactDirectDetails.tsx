import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";

const ContactDirectDetails = () => {
  return (
    <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#2A5040" }}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-dela text-primary mb-20 uppercase"
        >
          Prefer to reach us <WavyUnderline>directly ?</WavyUnderline>
        </motion.h3>

        <div className="border border-white/10 rounded-3xl md:rounded-[2.5rem] py-16 px-6 md:px-12 lg:px-24 mb-16 bg-white/5 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a href="mailto:hello@eyelevelstudio.in" className="text-[11px] sm:text-xs lg:text-lg font-dela text-white hover:text-primary transition-colors">
                hello@eyelevelstudio.in
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <a href="tel:+919789099499" className="text-[11px] sm:text-xs lg:text-lg font-dela text-white hover:text-primary transition-colors whitespace-nowrap">
                +91 97890 99499
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <p className="text-[11px] sm:text-xs lg:text-lg font-dela text-white mb-3 text-center">
                Chennai, Tamil Nadu, India
              </p>
              <p className="text-sm font-bricolage text-white/70 max-w-[250px]">
                We work with clients across India. In-person meetings in Chennai by appointment.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <p className="text-sm md:text-base font-bricolage text-white/70 max-w-2xl mx-auto">
            We respond to all enquiries within one business day. Discovery calls are scheduled Monday to Friday, 10am to 6pm IST.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDirectDetails;
