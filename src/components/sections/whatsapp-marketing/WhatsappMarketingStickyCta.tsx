interface WhatsappMarketingStickyCtaProps {
  hideSticky: boolean;
}

export default function WhatsappMarketingStickyCta({ hideSticky }: WhatsappMarketingStickyCtaProps) {
  return (
    <a
      href="https://theeyelevelstudio.com/booking"
      className={`md:hidden fixed left-0 right-0 bottom-0 h-14 bg-[#FCFAC2] text-[#0a0a0a] flex items-center justify-center font-bold font-bricolage text-[16px] no-underline z-50 pb-[env(safe-area-inset-bottom)] transition-opacity duration-300 ${
        hideSticky ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Book WhatsApp Strategy Call"
    >
      Book WhatsApp Strategy Call
    </a>
  );
}

