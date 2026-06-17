import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import WhatsappMarketingSectionHeader from "./WhatsappMarketingSectionHeader";

const services = [
  {
    n: "01",
    name: "WhatsApp Business API Setup",
    detail: "Meta verification, template setup, CRM connection. Platforms: Gupshup, Twixor, WATI.",
  },
  {
    n: "02",
    name: "Broadcast Campaigns",
    detail: "Targeted mass messages to opted-in lists: promotions, offers, event invites, product launches.",
  },
  {
    n: "03",
    name: "Drip Sequences & Automation",
    detail: "Automated nurture flows. Lead fills form → WhatsApp sequence begins automatically.",
  },
  {
    n: "04",
    name: "WhatsApp Chatbots",
    detail: "Rule-based and AI-assisted bots for lead capture, FAQ handling, appointment booking.",
  },
  {
    n: "05",
    name: "Monitoring & Reporting",
    detail: "Weekly delivery reports, open rates, response rates, conversion tracking.",
  },
];

export default function WhatsappMarketingOfferSection() {
  const [openService, setOpenService] = useState<number | null>(0);

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-[1]" aria-labelledby="offer-h">
      <WhatsappMarketingSectionHeader title="What We Offer" tag="Capabilities" id="offer-h" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 el-reveal font-bricolage">
        {services.map((s, i) => {
          const open = openService === i;
          return (
            <div
              key={s.n}
              className={`rounded-[36px] p-8 cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-5 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] min-h-[150px] ${open
                ? "bg-background text-foreground border border-white/20"
                : "bg-background/40 border border-white/20 text-foreground"
                } ${i === services.length - 1 && services.length % 2 !== 0 ? "md:col-span-2" : ""}`}
              onClick={() => setOpenService(open ? null : i)}
              role="button"
              aria-expanded={open}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenService(open ? null : i);
                }
              }}
            >
              {/* Icon wrapper */}
              <div
                className={`flex items-center justify-center w-12 h-12 min-w-[48px] rounded-[12px] transition-all duration-300 shrink-0 ${open ? "bg-background text-primary border border-primary/30 rotate-180" : "bg-white/5 border border-white/10 text-foreground/70"
                  }`}
              >
                {open ? <Minus size={20} /> : <Plus size={20} />}
              </div>

              {/* Text Swapping Container */}
              <div className="relative flex-1 min-h-[84px] overflow-hidden flex items-center">
                {/* Heading (shows initially, goes UP and fades out when clicked) */}
                <div
                  className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${open
                    ? "-translate-y-12 opacity-0 pointer-events-none"
                    : "translate-y-0 opacity-100"
                    }`}
                >
                  <h3 className={`font-semibold text-[18px] uppercase md:text-[20px] m-0 leading-[1.3] ${open ? "text-foreground" : "text-foreground"}`}>
                    {s.name}
                  </h3>
                </div>

                {/* Description (hides initially, comes from BOTTOM and fades in when clicked) */}
                <div
                  className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0 pointer-events-none"
                    }`}
                >
                  <p className={`text-[14px] md:text-[15px] leading-[1.65] m-0 text-foreground/80`}>
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



