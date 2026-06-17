import { motion } from "framer-motion";
import { Eye, Sparkles, Target, Zap, TrendingUp, Lightbulb, Palette, Bot, BarChart3 } from "lucide-react";

const WhatIsThis = () => {
  const services = [
    { icon: Target, label: "Strategy" },
    { icon: Palette, label: "Creative" },
    { icon: Bot, label: "AI" },
    { icon: BarChart3, label: "Performance Marketing" },
  ];

  return (
    <section 
      id="about"
      className="py-20 md:py-32 px-4 md:px-6 overflow-hidden relative bg-background"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Headline with Eye Animation */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">The EyeLevel Difference</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            <span className="text-foreground">Your </span>
            <span className="relative inline-block">
              <span className="text-primary/40 line-through decoration-2">"Guru"</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-0 left-0 h-0.5 bg-destructive"
              />
            </span>
            <span className="text-foreground"> is Guessing.</span>
            <br />
            <span className="text-primary">We Aren't.</span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: The Unblinking Eye Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%] rounded-full border border-primary/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[20%] rounded-full border border-primary/40"
              />
              
              {/* The Eye */}
              <div className="absolute inset-[25%] flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  className="relative w-full h-full"
                >
                  {/* Eye background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-card to-cream border-4 border-foreground/10 shadow-2xl" />
                  
                  {/* Iris */}
                  <motion.div
                    animate={{ 
                      x: [0, 5, -5, 0],
                      y: [0, -3, 3, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[15%] rounded-full bg-gradient-to-br from-secondary to-forest flex items-center justify-center"
                  >
                    {/* Pupil */}
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1/2 h-1/2 rounded-full bg-black flex items-center justify-center"
                    >
                      {/* Light reflection */}
                      <div className="w-3 h-3 rounded-full bg-white/80 -translate-x-1 -translate-y-1" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating icons around the eye */}
              {[
                { Icon: Zap, position: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
                { Icon: Target, position: "right-0 top-1/2 -translate-y-1/2", delay: 0.2 },
                { Icon: TrendingUp, position: "bottom-0 left-1/2 -translate-x-1/2", delay: 0.4 },
                { Icon: Lightbulb, position: "left-0 top-1/2 -translate-y-1/2", delay: 0.6 },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + delay, duration: 0.4 }}
                  className={`absolute ${position}`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contrast cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Gurus Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-destructive/20 text-4xl font-bold">✕</div>
                <h4 className="text-sm font-semibold text-destructive mb-2">Marketing "Wizards"</h4>
                <p className="text-xs text-muted-foreground">Magic tricks & guesswork</p>
              </motion.div>

              {/* EyeLevel Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-5 rounded-2xl bg-primary/10 border border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-primary/20 text-4xl font-bold">✓</div>
                <h4 className="text-sm font-semibold text-primary mb-2">EyeLevel</h4>
                <p className="text-xs text-muted-foreground">Engineering & precision</p>
              </motion.div>
            </div>

            {/* Body Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                We find the whole "marketing wizard" charade <span className="text-primary font-semibold">exhausting</span>, and we know you do too.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                EyeLevel doesn't do magic tricks; we do <span className="text-foreground font-medium">engineering</span>. With the focus of a single, unblinking eye, we see the missed opportunities others ignore. We are the filter for the industry's nonsense, turning your confused operations into a <span className="text-primary font-medium">growth engine</span> that actually runs.
              </p>
            </motion.div>

            {/* Services Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                We help ambitious brands dominate with:
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all cursor-default"
                  >
                    <service.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-card-foreground">{service.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The Eye Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 pt-4"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
              >
                <Eye className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm text-muted-foreground italic">
                One unblinking eye. Infinite possibilities.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsThis;
