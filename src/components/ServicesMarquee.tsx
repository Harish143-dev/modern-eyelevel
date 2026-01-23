const items = ["STRATEGY", "DESIGN", "GROWTH", "CONTENT", "ANALYTICS", "MEDIA"];

const ServicesMarquee = () => {
  return (
    <section className="py-12 bg-forest-light overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee-reverse">
          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-shrink-0 px-6"
            >
              <span className="text-primary font-bold text-2xl md:text-4xl tracking-tight whitespace-nowrap">
                {item}
              </span>
              <span className="mx-6 text-primary/50">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
