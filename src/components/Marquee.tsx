const clients = [
  "Google", "Meta", "Amazon", "Netflix", "Spotify", 
  "Nike", "Adobe", "Shopify", "Stripe", "Discord"
];

const Marquee = () => {
  return (
    <section className="py-8 bg-card overflow-hidden">
      <div className="mb-4 text-center">
        <p className="text-card-foreground/60 uppercase tracking-widest text-xs font-medium">
          Trusted by industry leaders
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-card-foreground/40 font-bold text-xl md:text-2xl tracking-tight whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
