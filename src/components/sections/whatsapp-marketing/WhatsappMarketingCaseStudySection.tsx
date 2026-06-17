import { useState, useEffect, useRef } from "react";
import WhatsappMarketingSectionHeader from "./WhatsappMarketingSectionHeader";
import { Iphone } from "@/components/ui/iphone";
import { motion, AnimatePresence } from "framer-motion";

const metrics = [
  { v: "6 Drips", l: "Automated touchpoints" },
  { v: "95%", l: "Average open rate" },
  { v: "0", l: "Manual follow-ups required" },
  { v: "5–7 d", l: "Time to full launch" },
];

const campaignSteps = [
  {
    title: "1. Welcome Message",
    desc: "Instant automated welcome message and PDF brochure delivered within 2 seconds of parent inquiry.",
  },
  {
    title: "2. Weekly Parenting Content",
    desc: "Helpful educational notes dripped automatically to build trust and authority.",
  },
  {
    title: "3. Blog Post Links",
    desc: "Curated resource links addressing parents' questions and school search concerns.",
  },
  {
    title: "4. Webinar Invites",
    desc: "Interactive invitations prompts warm parents to register for live virtual meetups.",
  },
  {
    title: "5. Open House Announcements",
    desc: "Automated booking details inviting parent RSVPs to visit the campus slots.",
  },
  {
    title: "6. Fee Timeline Nudge",
    desc: "Final admissions deadline alerts and transparent fee structures sent automatically.",
  },
];

interface ChatMessage {
  id: string;
  sender: "parent" | "preschool";
  text: string;
  time: string;
  dayLabel?: string;
}

interface WhatsappMarketingCaseStudySectionProps {
  scrollTo: (id: string) => void;
}

const dotVariants = {
  animate: (i: number) => ({
    y: [0, -5, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: i * 0.15,
    },
  }),
};

const TypingIndicator = () => (
  <div className="bg-[#005c4b] text-[#e9edef] px-4 py-2.5 rounded-[12px_12px_0_12px] ml-auto max-w-[85%] relative shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] flex items-center justify-center gap-1.5 h-[34px] mr-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        custom={i}
        variants={dotVariants}
        animate="animate"
        className="w-1.5 h-1.5 bg-[#e9edef]/60 rounded-full inline-block"
      />
    ))}
  </div>
);

export default function WhatsappMarketingCaseStudySection({ scrollTo }: WhatsappMarketingCaseStudySectionProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState("online");
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);

  const startSimulation = () => {
    // Clear any active timeouts
    timeoutIds.current.forEach(clearTimeout);
    timeoutIds.current = [];

    // Reset chat
    setMessages([]);
    setIsTyping(false);
    setStatus("online");
    setIsPlaying(true);

    const script = [
      {
        delay: 500,
        run: () => {
          setMessages([
            {
              id: "msg-0",
              sender: "parent",
              text: "Hi, I'm looking for preschool admissions for my child. Can you share details?",
              time: "9:40 AM"
            }
          ]);
        }
      },
      {
        delay: 1800,
        run: () => {
          setStatus("typing...");
          setIsTyping(true);
        }
      },
      {
        delay: 1500,
        run: () => {
          setIsTyping(false);
          setStatus("online");
          setMessages((prev) => [
            ...prev,
            {
              id: "msg-1",
              sender: "preschool",
              text: "Welcome to Little Stars Preschool! We're thrilled you're considering us for your child's first big adventure ❀",
              time: "9:41 AM",
              dayLabel: "TODAY"
            }
          ]);
        }
      },
      {
        delay: 2800,
        run: () => {
          setStatus("typing...");
          setIsTyping(true);
        }
      },
      {
        delay: 1800,
        run: () => {
          setIsTyping(false);
          setStatus("online");
          setMessages((prev) => [
            ...prev,
            {
              id: "msg-2",
              sender: "preschool",
              text: "Here's our weekly parenting content: how 'play-based learning' shapes confident 3–5 year olds. (3 min read)",
              time: "9:41 AM",
              dayLabel: "DAY 3"
            }
          ]);
        }
      },
      {
        delay: 2800,
        run: () => {
          setStatus("typing...");
          setIsTyping(true);
        }
      },
      {
        delay: 1800,
        run: () => {
          setIsTyping(false);
          setStatus("online");
          setMessages((prev) => [
            ...prev,
            {
              id: "msg-3",
              sender: "preschool",
              text: "Invite: Live webinar this Saturday — 'Choosing the Right Preschool'. Tap to RSVP.",
              time: "9:42 AM",
              dayLabel: "DAY 7"
            }
          ]);
        }
      },
      {
        delay: 2800,
        run: () => {
          setStatus("typing...");
          setIsTyping(true);
        }
      },
      {
        delay: 1800,
        run: () => {
          setIsTyping(false);
          setStatus("online");
          setMessages((prev) => [
            ...prev,
            {
              id: "msg-4",
              sender: "preschool",
              text: "Open House this weekend at our Indiranagar campus. Slots are limited — would you like to book?",
              time: "9:43 AM",
              dayLabel: "DAY 14"
            }
          ]);
        }
      },
      {
        delay: 2800,
        run: () => {
          setStatus("typing...");
          setIsTyping(true);
        }
      },
      {
        delay: 1800,
        run: () => {
          setIsTyping(false);
          setStatus("online");
          setMessages((prev) => [
            ...prev,
            {
              id: "msg-5",
              sender: "preschool",
              text: "Quick note on our fee timeline + early-admission window for 2026 intake. Happy to answer questions.",
              time: "9:44 AM",
              dayLabel: "DAY 21"
            }
          ]);
        }
      }
    ];

    let accumulatedDelay = 0;
    script.forEach((step) => {
      accumulatedDelay += step.delay;
      const tid = setTimeout(step.run, accumulatedDelay);
      timeoutIds.current.push(tid);
    });

    const finalTid = setTimeout(() => {
      setIsPlaying(false);
    }, accumulatedDelay + 5000);
    timeoutIds.current.push(finalTid);
  };

  // IntersectionObserver: trigger simulation only when section is scrolled into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEnteredViewport(true);
            // Once triggered, we don't need to listen anymore
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Run the simulation when the section comes into view
  useEffect(() => {
    if (hasEnteredViewport) {
      startSimulation();
    }
    return () => {
      timeoutIds.current.forEach(clearTimeout);
    };
  }, [hasEnteredViewport]);

  // Smooth scroll within the phone chat area only (no page scroll hijacking)
  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-[1]" aria-labelledby="case-h" id="use-cases">
      <WhatsappMarketingSectionHeader title="See It In Action" tag="Case Study" id="case-h" />

      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start el-reveal font-bricolage">
        <div className="flex justify-center">
          <Iphone className="w-[280px] md:w-[320px]">
            {/* iOS Status Bar */}
            <div className="h-[48px] bg-[#202c33] w-full flex items-center justify-between px-6 pt-3 pb-1 relative z-[15]">
              <span className="text-white text-[12px] font-semibold tracking-wide">9:41</span>
              <div className="flex items-center gap-1.5 opacity-90">
                <svg width="14" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7.5L2 9.5C4 7.5 6 7.5 8 9.5L10 7.5C7.23858 4.73858 2.76142 4.73858 0 7.5Z" fill="white" />
                  <path d="M4 3.5L6 5.5C7.10457 4.39543 8.89543 4.39543 10 5.5L12 3.5C9.79086 1.29086 6.20914 1.29086 4 3.5Z" fill="white" />
                </svg>
                <svg width="20" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="1" width="18" height="8" rx="2" stroke="white" strokeWidth="1" />
                  <rect x="2" y="3" width="12" height="4" rx="1" fill="white" />
                  <path d="M19 4V6C19.5523 6 20 5.5523 20 5C20 4.4477 19.5523 4 19 4Z" fill="white" />
                </svg>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div className="flex items-center gap-2.5 px-3 pb-2 bg-[#202c33] relative z-[5] shadow-sm">
              <div className="flex items-center text-[#8696a0] -ml-1 cursor-pointer">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#6a7175] text-[#e9edef] flex items-center justify-center font-semibold text-sm shrink-0">
                LS
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[15px] text-[#e9edef] leading-tight truncate">Little Stars Preschool</div>
                <div className="text-[11px] leading-tight mt-0.5 truncate transition-all duration-300 font-medium" style={{ color: status === "typing..." ? "#00a884" : "#8696a0" }}>
                  {status === "typing..." ? "typing..." : "online"}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-3 overflow-y-auto flex flex-col gap-2.5 relative bg-[#0b141a] pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="flex flex-col w-full relative z-10"
                  >
                    {m.dayLabel && (
                      <div className="flex flex-col items-center w-full mt-2">
                        <div className="bg-[#182229] text-[#8696a0] px-3 py-1 rounded-lg text-[9px] mb-2.5 shadow-sm font-semibold tracking-wider uppercase">
                          {m.dayLabel}
                        </div>
                      </div>
                    )}

                    <div
                      className={`p-[6px_8px_6px_10px] text-[13px] leading-[1.4] max-w-[85%] relative shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] ${m.sender === "parent"
                        ? "bg-[#202c33] text-[#e9edef] rounded-[0_12px_12px_12px] mr-auto"
                        : "bg-[#005c4b] text-[#e9edef] rounded-[12px_0_12px_12px] ml-auto"
                        }`}
                    >
                      <div className="pb-3 pr-2 break-words">{m.text}</div>
                      <div className="absolute bottom-1 right-1.5 flex items-center gap-0.5">
                        <span className="text-[9px] text-[#e9edef]/60 leading-none">
                          {m.time}
                        </span>
                        {m.sender === "preschool" && (
                          <span className="text-[#53bdeb] text-[13px] leading-none tracking-[-3px] ml-0.5">✓✓</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col w-full relative z-10"
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp Input Bar */}
            <div className="h-[62px] bg-[#0b141a] w-full flex items-center px-3 gap-2.5 relative z-[10] pb-5 pt-1.5 border-t border-white/5">
              <button
                onClick={startSimulation}
                className="flex items-center justify-center w-6 h-6 rounded-full bg-[#202c33] shrink-0 text-[#8696a0] hover:text-[#e9edef] transition-colors"
                title="Restart simulation"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" /></svg>
              </button>

              <div
                onClick={startSimulation}
                className="flex-1 h-[36px] bg-[#202c33] rounded-full flex items-center px-4 cursor-pointer select-none group"
              >
                <span className="text-[#8696a0] group-hover:text-[#e9edef] text-[12px] transition-colors truncate">
                  {isPlaying ? "Simulating automated drip..." : "Tap to restart simulation"}
                </span>
              </div>

              <button
                onClick={startSimulation}
                className="w-[34px] h-[34px] bg-[#00a884] hover:bg-[#00bfa5] active:scale-95 rounded-full flex items-center justify-center shrink-0 text-white transition-all duration-200"
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                )}
              </button>
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="absolute bottom-1 w-[110px] h-[4px] bg-white/30 rounded-full left-1/2 -translate-x-1/2 z-[20] pointer-events-none" />
          </Iphone>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
          <div className="space-y-5">
            <h3 className="font-dela uppercase text-[24px] md:text-[30px] leading-[1.15] text-foreground tracking-wide">
              4–8 Week Nurture. <br className="hidden lg:block" />
              <span className="text-primary">Zero</span> Manual Effort.
            </h3>

            <p className="font-normal text-[15.5px] md:text-[17px] leading-[1.65] text-foreground/80 max-w-[550px] font-bricolage text-center lg:text-left mx-auto lg:mx-0">
              We run WhatsApp marketing for a preschool. Every parent inquiry enters a nurture sequence including:
            </p>

            {/* Tag Cloud for Sequence Steps */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start max-w-[550px] mx-auto lg:mx-0 py-1">
              {[
                "Welcome Message",
                "Weekly Parenting Content",
                "Webinar Invites",
                "Blog Post Links",
                "Open House Announcements",
                "Fee Timeline"
              ].map((tag) => (
                <span key={tag} className="bg-background/40 border border-primary/20 text-primary/90 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium font-bricolage flex items-center gap-2 shadow-[0_2px_10px_rgba(226,254,165,0.02)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-normal text-[15.5px] md:text-[17px] leading-[1.65] text-foreground/80 max-w-[550px] font-bricolage text-center lg:text-left mx-auto lg:mx-0">
              Prospects stay warm for <span className="text-primary font-semibold">4–8 weeks</span> with zero manual follow-up from the admissions team.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 mt-2 w-full max-w-[550px] mx-auto lg:mx-0">
            {metrics.map((m, i) => (
              <div key={m.l} className="bg-background/30 border border-white/5 rounded-[16px] p-4 text-left hover:border-white/15 transition-all duration-200">
                <div className={`font-dela text-[20px] md:text-[24px] leading-none ${i === 2 ? "text-primary" : "text-foreground"}`}>{m.v}</div>
                <div className="text-[12px] text-foreground/60 mt-2 font-medium uppercase tracking-wider leading-tight">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



