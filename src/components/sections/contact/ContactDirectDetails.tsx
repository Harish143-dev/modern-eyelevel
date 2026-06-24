import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GreenButton from "@/components/shared/GreenButton";

const ContactDirectDetails = () => {
  return (
    <section className="px-4 py-[100px] bg-forest-deep border-b border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <GreenButton>WE'D LOVE TO HEAR FROM YOU</GreenButton>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-dela text-primary uppercase mb-4">
            Prefer to reach us <WavyUnderline>directly ?</WavyUnderline>
          </h3>
          <p className="text-white/70 font-bricolage text-sm md:text-base max-w-2xl mx-auto">
            Choose your preferred way to connect with our team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Email */}
            <motion.div
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center py-8 md:py-4 px-4 md:px-6 lg:px-8 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(226,254,165,0.1)]"
              >
                <Mail className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <p className="text-primary font-dela text-[10px] md:text-xs uppercase tracking-widest mb-3">EMAIL</p>
              <a href="mailto:hello@eyelevelstudio.in" className="text-[11px] sm:text-xs lg:text-base font-dela text-white group-hover:text-primary transition-colors mb-4">
                hello@eyelevelstudio.in
              </a>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
            </motion.div>

            {/* Phone */}
            <motion.div
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center py-8 md:py-4 px-4 md:px-6 lg:px-8 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(226,254,165,0.1)]"
              >
                <Phone className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <p className="text-primary font-dela text-[10px] md:text-xs uppercase tracking-widest mb-3">CALL</p>
              <a href="tel:+919789099499" className="text-[11px] sm:text-xs lg:text-base font-bricolage text-white group-hover:text-primary transition-colors whitespace-nowrap mb-4">
                +91 97890 99499
              </a>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
            </motion.div>

            {/* Location */}
            <motion.div
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center py-8 md:py-4 px-4 md:px-6 lg:px-8 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(226,254,165,0.1)]"
              >
                <MapPin className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <p className="text-primary font-dela text-[10px] md:text-xs uppercase tracking-widest mb-3">LOCATION</p>
              <a
                href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs lg:text-base font-dela text-white group-hover:text-primary transition-colors mb-2 text-center"
              >
                Chennai, Tamil Nadu, India
              </a>
              <p className="text-xs font-bricolage text-white/50 max-w-[250px] text-center group-hover:text-white/70 transition-colors duration-300 mb-4">
                We work with clients across India. In-person meetings in Chennai by appointment.
              </p>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 border border-white/10 rounded-2xl md:rounded-[2rem] py-4 md:py-5 px-6 md:px-8 bg-white/5 hover:bg-white/10 transition-colors flex flex-col md:flex-row items-center md:justify-between text-center md:text-left gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm md:text-base font-bricolage text-white font-medium mb-0.5">
                We respond to all enquiries within one business day.
              </p>
              <p className="text-xs md:text-sm font-bricolage text-white/50">
                Discovery calls are scheduled Monday to Friday, 10am to 6pm IST.
              </p>
            </div>
          </div>
          <Link to="/booking" className="w-full md:w-auto mt-2 md:mt-0">
            <Button variant="outline" className="w-full rounded-full border border-primary/50 text-primary hover:bg-primary/10 hover:text-primary bg-transparent px-6 py-5 font-bricolage h-12 flex items-center justify-center gap-2 transition-colors">
              Let's talk
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDirectDetails;
