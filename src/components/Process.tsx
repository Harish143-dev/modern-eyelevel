import { motion } from "framer-motion";
import mascotTrophy from "@/assets/mascot-trophy-new.png";

const processData = [
  { label: "Strategy", value: 25, color: "hsl(72 60% 65%)" },
  { label: "Creative", value: 25, color: "hsl(150 40% 40%)" },
  { label: "Execution", value: 30, color: "hsl(30 80% 60%)" },
  { label: "Analytics", value: 20, color: "hsl(200 60% 50%)" }
];

const items = ["OUR PROCESS", "OUR PROCESS", "OUR PROCESS", "OUR PROCESS", "OUR PROCESS"];

const Process = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Marquee */}
        <div className="overflow-hidden mb-12">
          <div className="flex animate-marquee">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="flex items-center flex-shrink-0 px-6">
                <span className="text-card-foreground/30 font-bold text-2xl md:text-4xl tracking-tight whitespace-nowrap">
                  {item}
                </span>
                <span className="mx-6 text-card-foreground/20">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-card-foreground/60 uppercase tracking-[0.3em] text-sm mb-4">
            How we work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-card-foreground">
            OUR <span className="text-gradient">PROCESS</span>
          </h2>
        </div>

        <div className="bg-forest rounded-4xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Pie Chart Visualization */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {(() => {
                  let currentAngle = 0;
                  return processData.map((item, index) => {
                    const angle = (item.value / 100) * 360;
                    const startAngle = currentAngle;
                    currentAngle += angle;
                    
                    const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                    const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                    const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
                    const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);
                    
                    const largeArc = angle > 180 ? 1 : 0;
                    
                    return (
                      <motion.path
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                        stroke="hsl(150 40% 12%)"
                        strokeWidth="0.5"
                      />
                    );
                  });
                })()}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-forest rounded-full" />
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {processData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <p className="text-cream font-bold">{item.label}</p>
                    <p className="text-cream/60 text-sm">{item.value}%</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mascot */}
            <div className="hidden lg:block w-48 animate-float">
              <img 
                src={mascotTrophy} 
                alt="Success Mascot" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
