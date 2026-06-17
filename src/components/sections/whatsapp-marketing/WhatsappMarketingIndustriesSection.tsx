import WhatsappMarketingSectionHeader from "./WhatsappMarketingSectionHeader";
import d2cImage from "@/assets/services/whatsappMarketing/d2d.webp";
import healthcareImage from "@/assets/services/whatsappMarketing/healthcare.webp";
import educationImage from "@/assets/services/whatsappMarketing/preschool.webp";
import saasImage from "@/assets/services/whatsappMarketing/saas.webp";

const industries = [
  {
    image: d2cImage,
    name: "D2C Brands",
    uses: [
      "Move customers from Instagram into WhatsApp lists",
      "Cart recovery and post-purchase follow-up",
      "Product launches and loyalty broadcasts",
    ],
  },
  {
    image: healthcareImage,
    name: "Healthcare",
    uses: [
      "Appointment reminders for hospitals and clinics",
      "Diagnostic lab report delivery",
      "Re-engagement of dormant patients",
    ],
  },
  {
    image: educationImage,
    name: "Schools & Preschools",
    uses: [
      "Admission inquiry nurture sequences",
      "Open house and webinar invitations",
      "Parent communication at scale",
    ],
  },
  {
    image: saasImage,
    name: "SaaS Companies",
    uses: [
      "Replace cold email with WhatsApp outreach",
      "Trial-to-paid conversion sequences",
      "Renewal and expansion nudges",
    ],
  },
];

export default function WhatsappMarketingIndustriesSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-[1]" aria-labelledby="who-h">
      <WhatsappMarketingSectionHeader title="Who This Is For" tag="Industries" id="who-h" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10 el-reveal font-bricolage">
        {industries.map(({ image, name, uses }) => (
          <div
            key={name}
            className="relative w-full h-[320px] sm:h-[360px] rounded-[24px] overflow-hidden border border-white/5 transition-all duration-500 cursor-pointer hover:border-white/20 hover:-translate-y-1 focus:border-white/20 focus:-translate-y-1 group flex flex-col justify-end p-6 sm:p-8 bg-background/60 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            tabIndex={0}
          >
            {/* Full-width Background Image & Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Premium dark gradient overlay for typography readability */}
              <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/0 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-500" />
            </div>

            {/* Content Area (Overlaid on Image) */}
            <div className="relative z-10 flex flex-col justify-end w-full">
              <h3 className="font-semibold text-[22px] sm:text-[24px] text-foreground font-bricolage transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {name}
              </h3>

              {/* Hover-reveal description checkmarks */}
              <div className="max-h-0 opacity-0 translate-y-4 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[180px] group-hover:opacity-100 group-hover:translate-y-0">
                <ul className="list-none p-0 m-0 mt-3 flex flex-col gap-2.5">
                  {uses.map((u) => (
                    <li key={u} className="flex items-start text-[14px] sm:text-[15px] text-foreground/90 leading-relaxed">
                      <span className="text-primary mr-2.5 shrink-0 mt-1 text-[12px]">✓</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



