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
        className="relative flex flex-col min-h-[280px] md:h-[380px] w-full max-w-[700px] rounded-2xl overflow-hidden items-center justify-center mx-auto px-10 py-12"
        style={{ backgroundColor: color }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-30" src={src} alt={title} />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: `linear-gradient(to bottom, ${color}40, ${color}80)` }}
        />

        {/* Content */}
        <div className="relative z-20 text-center">
          <span
            className="font-dela text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight block mb-4"
            style={{ color: textColor }}
          >
            {title}
          </span>
          <p
            className="font-bricolage text-sm sm:text-base md:text-lg font-medium text-center lowercase tracking-wide"
            style={{ color: textColor, opacity: 0.85, lineHeight: 1.4 }}
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