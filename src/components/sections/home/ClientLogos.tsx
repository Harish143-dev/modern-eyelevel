import { motion } from "framer-motion";
import logo_1 from "@/assets/logos/logo_1.png";
import logo_2 from "@/assets/logos/logo_2.png";
import logo_3 from "@/assets/logos/logo_3.webp";
import logo_4 from "@/assets/logos/logo_4.png";
import logo_5 from "@/assets/logos/logo_5.png";
import logo_6 from "@/assets/logos/logo_6.png";
import logo_7 from "@/assets/logos/logo_7.png";
import logo_8 from "@/assets/logos/logo_8.png";
import logo_9 from "@/assets/logos/logo_9.png";
import logo_10 from "@/assets/logos/logo_10.png";
import logo_11 from "@/assets/logos/logo_11.png";
import logo_12 from "@/assets/logos/logo_12.png";
import logo_13 from "@/assets/logos/logo_13.png";
import logo_14 from "@/assets/logos/logo_14.png";
import logo_15 from "@/assets/logos/logo_15.png";
import logo_16 from "@/assets/logos/logo_16.png";

const ClientLogos = () => {
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
    logo_11,
    logo_12,
    logo_13,
    logo_14,
    logo_15,
    logo_16,
  ];

  return (
    <section
      style={{
        backgroundColor: "#253e35",
      }}
      className="relative pb-2 md:pb-20 px-4 overflow-hidden py-[21px] pt-10"
    >
      <div className="max-w-4xl mx-auto">
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
          <div className="flex flex-col lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left side - Title */}
            <div className="flex-shrink-0 text-center">
              <h2
                className="font-dela text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight uppercase"
                style={{
                  color: "#0a0a0a",
                }}
              >
                <span className="block">Brands choosing depth over noise</span>
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
                  <div className="flex w-max animate-join-league-marquee items-center">
                    {[0, 1, 2].map((groupIndex) => (
                      <div
                        key={groupIndex}
                        className="flex shrink-0 gap-14 md:gap-20 pr-14 md:pr-20 items-center"
                        aria-hidden={groupIndex > 0}
                      >
                        {clientLogo.map((client, index) => (
                          <div
                            key={`${groupIndex}-${index}`}
                            className="flex-shrink-0 w-48 md:w-56 h-28 flex items-center justify-center mx-4"
                          >
                            <img
                              loading="lazy"
                              src={client}
                              alt="Client logo"
                              title="Client logo"
                              className="h-20 md:h-24 w-48 md:w-52 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
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
export default ClientLogos;
