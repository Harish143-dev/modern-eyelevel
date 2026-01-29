import { motion } from "framer-motion";
import logo_1 from "@/assets/logos/logo_1.png";
import logo_2 from "@/assets/logos/logo_2.png";
import logo_3 from "@/assets/logos/logo_3.png";
import logo_4 from "@/assets/logos/logo_4.png";
import logo_5 from "@/assets/logos/logo_5.png";
import logo_6 from "@/assets/logos/logo_6.png";
import logo_7 from "@/assets/logos/logo_7.png";
import logo_8 from "@/assets/logos/logo_8.png";
import logo_9 from "@/assets/logos/logo_9.png";
import logo_10 from "@/assets/logos/logo_10.png";

const clients = [
  "Hi Living",
  "GATACA",
  "Secret Alchemist",
  "Chennai Super Champs",
  "Bengaluru Jawans",
  "Vilaasa Estates",
  "Lalteen",
  "Joyalukkas",
  "Liza",
  "Nura J",
];

const JoinTheLeague = () => {
  const clientLogo = [
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_8,
    logo_9,
    logo_10,
  ];

  return (
    <section
      style={{
        backgroundColor: "#253e35",
      }}
      className="relative pt-0 pb-2 md:pb-20 px-4 overflow-hidden py-[21px]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Pill-shaped container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-[40px] md:rounded-[60px] p-8 md:p-12 lg:p-16 overflow-hidden"
          style={{
            backgroundColor: "#F8FFE8",
            border: "3px solid #0a0a0a",
            boxShadow: "0 6px 0 #0a0a0a",
          }}
        >
          {/* Content layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left side - Title */}
            <div className="flex-shrink-0">
              <h2
                className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
                style={{
                  color: "#0a0a0a",
                }}
              >
                <span className="block">Join</span>
                <span className="block">the League</span>
              </h2>
            </div>

            {/* Right side - Marquee */}
            <div className="flex-1 overflow-hidden">
              <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F8FFE8] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F8FFE8] to-transparent z-10 pointer-events-none" />

                {/* Marquee track */}
                <div className="overflow-hidden w-full">
                  <div className="flex w-max animate-marquee-reverse items-center">
                    {[...clientLogo, ...clientLogo, ...clientLogo].map(
                      (client, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 px-6 flex items-center justify-center"
                        >
                          <img
                            src={client}
                            alt="Client logo"
                            className="h-12 md:h-16 w-auto object-contain"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default JoinTheLeague;
