import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { Underline } from "lucide-react";

interface WhatsappMarketingSectionHeaderProps {
  num?: string;
  title: string;
  sub?: string;
  tag?: string;
  id?: string;
}

export default function WhatsappMarketingSectionHeader({ num, title, sub, tag, id }: WhatsappMarketingSectionHeaderProps) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <header id={id} className="relative flex flex-col items-center text-center mb-12 pt-10">
      {num && (
        <span className="absolute top-[-20px] md:top-[-40px] z-0 font-dela text-[90px] md:text-[140px] leading-none text-primary/5 pointer-events-none select-none" aria-hidden="true">
          {num}
        </span>
      )}
      <div className="relative z-[1] flex flex-col items-center">
        {tag && (
          <GreenButton>{tag}</GreenButton>
        )}
        <h2 className="font-dela uppercase text-3xl md:text-5xl leading-tight m-0 tracking-wide">
          <span className="text-primary">{firstPart}</span>{" "}
          <WavyUnderline>{lastWord}</WavyUnderline>
        </h2>
        {sub ? (
          <p className="font-bricolage text-foreground/80 m-0 mt-4 text-base md:text-lg max-w-2xl text-center">
            {sub}
          </p>
        ) : null}
      </div>
    </header>
  );
}




