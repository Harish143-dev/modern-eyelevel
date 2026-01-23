import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Zap,
  TrendingUp,
  Lightbulb,
  Palette,
  Bot,
  BarChart3,
} from "lucide-react";
import WavyUnderline from "@/components/WavyUnderline";
import Eyeball from "./Eyeball";
const WhatWeDo = () => {
  const services = [
    {
      icon: Target,
      label: "Strategy",
    },
    {
      icon: Palette,
      label: "Creative",
    },
    {
      icon: Bot,
      label: "AI",
    },
    {
      icon: BarChart3,
      label: "Performance Marketing",
    },
  ];
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#253e35",
      }}
      className="py-20 px-4 md:px-6 overflow-hidden relative md:py-[28px]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Headline with Eye Animation */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            ></motion.div>
            <span
              className="text-sm font-medium font-bricolage"
              style={{
                color: "#E2FEA5",
              }}
            >
              The EyeLevel Difference
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="font-dela text-3xl md:text-5xl text-[#E2FEA5] lg:text-6xl leading-[1.1] mb-6 uppercase"
          >
            Built on {"  "}
            <WavyUnderline className="mb-6">proof !!</WavyUnderline> <br />{" "}
            <span>not guesswork.</span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: The Unblinking Eye Visualization */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer rings */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#E2FEA5]/20"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[10%] rounded-full border border-[#E2FEA5]/30"
              />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[20%] rounded-full border border-[#E2FEA5]/40"
              />

              {/* The Eye */}
              <div className="absolute inset-[25%] flex items-center justify-center">
                <Eyeball/>
              </div>

              {/* Floating icons around the eye */}
              {[
                {
                  Icon: Zap,
                  position: "top-0 left-1/2 -translate-x-1/2",
                  delay: 0,
                },
                {
                  Icon: Target,
                  position: "right-0 top-1/2 -translate-y-1/2",
                  delay: 0.2,
                },
                {
                  Icon: TrendingUp,
                  position: "bottom-0 left-1/2 -translate-x-1/2",
                  delay: 0.4,
                },
                {
                  Icon: Lightbulb,
                  position: "left-0 top-1/2 -translate-y-1/2",
                  delay: 0.6,
                },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5 + delay,
                    duration: 0.4,
                  }}
                  className={`absolute ${position}`}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-12 h-12 rounded-xl bg-[#1e3329] border border-[#E2FEA5]/20 shadow-lg flex items-center justify-center"
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{
                        color: "#E2FEA5",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-8"
          >
            {/* Contrast cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Gurus Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-red-500/30 text-4xl font-bold">
                  ✕
                </div>
                <h4 className="text-sm font-semibold font-bricolage text-red-400 mb-2">
                  Marketing "Wizards"
                </h4>
                <p
                  className="text-xs font-bricolage"
                  style={{
                    color: "rgba(248, 255, 232, 0.6)",
                  }}
                >
                  Magic tricks & guesswork
                </p>
              </motion.div>

              {/* EyeLevel Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="p-5 rounded-2xl bg-[#E2FEA5]/10 border border-[#E2FEA5]/30 relative overflow-hidden"
              >
                <div
                  className="absolute top-3 right-3 text-4xl font-bold"
                  style={{
                    color: "rgba(226, 254, 165, 0.3)",
                  }}
                >
                  ✓
                </div>
                <h4
                  className="text-sm font-semibold font-bricolage mb-2"
                  style={{
                    color: "#E2FEA5",
                  }}
                >
                  EyeLevel
                </h4>
                <p
                  className="text-xs font-bricolage"
                  style={{
                    color: "rgba(248, 255, 232, 0.6)",
                  }}
                >
                  Engineering & precision
                </p>
              </motion.div>
            </div>

            {/* Body Copy */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
              }}
              className="space-y-4"
            >
              <p
                className="text-lg md:text-xl font-bricolage leading-relaxed"
                style={{
                  color: "#F8FFE8",
                }}
              >
                We find the whole "marketing wizard" charade{" "}
                <span
                  className="font-semibold"
                  style={{
                    color: "#E2FEA5",
                  }}
                >
                  exhausting
                </span>
                , and we know you do too.
              </p>
              <p
                className="text-base md:text-lg font-bricolage leading-relaxed"
                style={{
                  color: "rgba(248, 255, 232, 0.7)",
                }}
              >
                EyeLevel doesn't do magic tricks; we do{" "}
                <span
                  className="font-medium"
                  style={{
                    color: "#F8FFE8",
                  }}
                >
                  engineering
                </span>
                . With the focus of a single, unblinking eye, we see the missed
                opportunities others ignore. We are the filter for the
                industry's theatrics, turning your confused operations into a{" "}
                <span
                  className="font-medium"
                  style={{
                    color: "#E2FEA5",
                  }}
                >
                  growth engine
                </span>{" "}
                that actually performs.
              </p>
            </motion.div>

            {/* Services Pills */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
              }}
              className="space-y-4"
            >
              <p
                className="text-sm font-medium font-bricolage uppercase tracking-wider"
                style={{
                  color: "rgba(248, 255, 232, 0.6)",
                }}
              >
                We help ambitious brands dominate with:
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1e3329] border border-[#E2FEA5]/20 shadow-sm hover:border-[#E2FEA5]/50 hover:shadow-md transition-all cursor-default"
                  >
                    <service.icon
                      className="w-4 h-4"
                      style={{
                        color: "#E2FEA5",
                      }}
                    />
                    <span
                      className="text-sm font-medium font-bricolage"
                      style={{
                        color: "#F8FFE8",
                      }}
                    >
                      {service.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The Eye Icon */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.8,
              }}
              className="flex items-center gap-3 pt-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-10 h-10 rounded-full bg-[#E2FEA5]/20 flex items-center justify-center"
              >
                <Eye
                  className="w-5 h-5"
                  style={{
                    color: "#E2FEA5",
                  }}
                />
              </motion.div>
              <span
                className="text-md font-bricolage italic"
                style={{
                  color: "#E2FEA5",
                }}
              >
                One Focused Eye. Infinite Possibilities.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
