import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import mascotPointing from "@/assets/mascot-pointing.png";

const faqs = [
  {
    question: "What is a Growth Studio?",
    answer: "A Growth Studio is a modern alternative to a traditional marketing agency. We don't just execute marketing tasks; we partner with you to build a comprehensive growth system that integrates strategy, creative, technology, and performance marketing to achieve your business goals."
  },
  {
    question: "How is EyeLevel different from a marketing agency?",
    answer: "While marketing agencies focus on executing specific services (like SEO or social media), EyeLevel focuses on the entire growth funnel. We start with a deep-dive diagnosis of your business, develop a custom growth strategy, and then execute with a focus on measurable ROI."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our goal is to deliver measurable business growth, not just vanity metrics. Depending on your goals, this could mean more qualified leads, higher conversion rates, increased customer lifetime value, or a stronger brand presence. We set clear KPIs at the beginning of every engagement."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in four key verticals: Edu-Marketing, Sports Marketing, Real Estate, and B2B. However, our growth framework is adaptable to any industry where strategic growth is a priority."
  },
  {
    question: "How much does it cost to work with EyeLevel?",
    answer: "Our pricing is tailored to the specific needs and goals of each client. We offer a range of engagement models, from project-based fees for strategy work to monthly retainers for ongoing execution. We always start with a free Growth Audit to determine the best approach for you."
  }
];

const FAQ = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="faq" ref={ref} className="py-32 md:py-40 px-4 bg-background relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -top-4 right-0 hidden lg:block"
        >
          <motion.img 
            src={mascotPointing} 
            alt="Mascot pointing"
            className="w-28 h-28 md:w-36 md:h-36 drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-muted-foreground uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6"
          >
            Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-foreground">Your Questions,</span>{" "}
            <span className="text-primary">Answered</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-card-foreground font-semibold hover:no-underline py-6 text-base md:text-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-card-foreground/70 pb-6 pl-14 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
