import { motion } from "framer-motion";
import { Linkedin, Link as LinkIcon } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import akmal from "@/assets/content/people/akmal.webp";
import jameel from "@/assets/content/people/jameel.webp";

const authors = [
  {
    name: "Akmal Rahman",
    role: "Founder",
    image: akmal,
    dec: "He runs the craft: 15 years as a client-side marketing head across automotive, real estate, D2C, and manufacturing. He owns strategy, positioning, and growth for every Eyelevel client. The full career, and the brands, live on akmalrahman.com.",
    socials: "https:www.linkedin.com/in/akmalbillekar",
    website: "https://akmalrahman.com/",
  },
  {
    name: "Mohammad Jameel",
    role: "Co-Founder",
    image: jameel,
    dec: "A seasoned investment banking professional specializing in wealth management and alternative investment solutions for high-net-worth and celebrity clients. At Eyelevel, he leads the business, finance, and partnership side of the studio.",
    socials: "https://www.linkedin.com/in/muhammad-jameel-1b340836/",
    website: "",
  },
];

const Leadership = () => {
  return (
    <section
      className="max-w-5xl px-4 mx-auto relative overflow-hidden border-t border-b py-[100px]"
      style={{
        backgroundColor: "#253e35",
        borderColor: "rgba(248, 255, 232, 0.15)",
      }}
    >
      <div className="flex justify-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
          style={{
            backgroundColor: "rgba(226, 254, 165, 0.1)",
            border: "1px solid rgba(226, 254, 165, 0.2)",
          }}
        >
          <span className="text-sm font-medium font-bricolage text-primary">
            Leadership
          </span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase">
            <span className="text-primary">Two founders</span>{" "}
            <WavyUnderline>One Studio</WavyUnderline>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {authors.map((author, index) => (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group flex flex-col justify-evenly items-center rounded-2xl p-4 md:p-6"
              style={{
                backgroundColor: "#F8FFE8",
                border: "3px solid #0a0a0a",
                boxShadow: "0 6px 0 #0a0a0a",
              }}
            >
              <div
                className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 transition-colors"
                style={{ borderColor: "rgb(37, 62, 53)" }}
              >
                <img
                  src={author.image}
                  alt={author.name}
                  title={author.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-dela text-lg uppercase text-forest-muted">
                  {author.name}
                </h3>
                <p className="text-sm font-bricolage text-primary mt-1 px-3 py-0.5 rounded-full bg-secondary">
                  {author.role}
                </p>
              </div>
              <p className="text-sm font-bricolage mt-3 mx-4 text-forest-muted/70">
                {author?.dec}
              </p>
              <div className="flex items-center gap-3 py-4">
                <a
                  className="text-sm flex justify-center gap-2 font-bricolage text-primary px-4 py-2 rounded-full border-2 border-background hover:bg-primary/90 transition-colors"
                  href={author.socials}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-5 text-background" />
                </a>

                {author.website && (
                  <a
                    className="text-sm flex justify-center gap-2 font-bricolage text-primary px-4 py-2 rounded-full border-2 border-background hover:bg-primary/90 transition-colors"
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="size-5 text-background" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
