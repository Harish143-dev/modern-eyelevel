import { FC } from "react";

export interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface iCardProps extends iCardItem {
  i: number;
  total: number;
}

interface iCardsParallaxProps {
  items: iCardItem[];
}

const CARD_HEIGHT = 380;
const STICK_OFFSET = 80;

const Card: FC<iCardProps> = ({ title, description, color, textColor, i, src }) => {
  return (
    <div
      className="sticky flex items-center justify-center px-4"
      style={{ top: `${STICK_OFFSET + i * 24}px` }}
    >
      <div
        className="relative flex flex-col min-h-[250px] md:h-[380px] w-full max-w-[700px] rounded-2xl overflow-hidden items-center justify-center mx-auto px-6 py-8 md:px-10 md:py-12"
        style={{ backgroundColor: color }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-50" src={src} alt={title} />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, #000 0%, #000 10%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 text-center flex flex-col justify-end items-center h-full w-full">
          <span
            className="font-dela text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight block mb-3 uppercase"
            style={{
              color: "#E2FEA5",
            }}
          >
            {title}
          </span>
          <p
            className="font-bricolage text-xs sm:text-sm md:text-base font-medium text-center tracking-wide max-w-lg"
            style={{ color: "#F8FFE8", opacity: 0.85, lineHeight: 1.4 }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

{/*const CardsParallax: FC<iCardsParallaxProps> = ({ items }) => {
  return (
    <div
      className="relative w-full"
      style={{ height: `${items.length * CARD_HEIGHT}px` }}
    >
      {items.map((item, i) => (
        <Card key={`card_${i}`} {...item} i={i} total={items.length} />
      ))}
    </div>
  );
};*/}

// Change CARD_HEIGHT usage in the container only, let cards size naturally on mobile
const CardsParallax: FC<iCardsParallaxProps> = ({ items }) => {
  return (
    <div
      className="relative w-full"
      style={{ height: `${items.length * CARD_HEIGHT}px` }}
    >
      {items.map((item, i) => (
        <Card key={`card_${i}`} {...item} i={i} total={items.length} />
      ))}
    </div>
  );
};

export { CardsParallax };