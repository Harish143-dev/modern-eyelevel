const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'industries');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  if (!content.includes('framer-motion')) {
    // 1. Add import
    const lastImportIndex = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport + 1) + 'import { motion } from "framer-motion";\n' + content.slice(endOfLastImport + 1);

    // 2. Hero h1 -> motion.h1
    content = content.replace(
      /<h1 className="(font-dela text-3xl[^"]+)">([\s\S]*?)<\/h1>/g,
      `<motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="$1"
            >$2</motion.h1>`
    );

    // 3. Hero p -> motion.p (It's the first p after the hero h1, we can match by font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-12)
    content = content.replace(
      /<p className="(font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-12[^"]+)">([\s\S]*?)<\/p>/,
      `<motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="$1"
            >$2</motion.p>`
    );

    // 4. Problem Image -> motion.img
    content = content.replace(
      /<img\s+src=\{problemImage\}/,
      `<motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                src={problemImage}`
    );

    // 5. Problem Text Section -> motion.div
    content = content.replace(
      /<h2 className="(font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary)">([\s\S]*?)<\/h2>\n\s*<p className="(font-bricolage text-sm md:text-base lg:text-base leading-relaxed text-foreground\/70)">([\s\S]*?)<\/p>/,
      `<motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="$1"
              >$2</motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="$3"
              >$4</motion.p>`
    );

    // 6. Services Cards -> motion.div
    content = content.replace(
      /<div className="(h-full rounded-3xl p-6 md:p-8 transition-all[^"]+)">([\s\S]*?)<\/div>\n\s*<\/Link>/g,
      `<motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="$1"
                  >$2</motion.div>
                </Link>`
    );

    // 7. Why Eyelevel text -> motion.p
    content = content.replace(
      /Why <WavyUnderline>EyeLevel<\/WavyUnderline>([\s\S]*?)<\/h2>\n\s*<p className="(font-bricolage text-sm md:text-lg lg:text-xl leading-relaxed text-foreground\/70)">([\s\S]*?)<\/p>/,
      `Why <WavyUnderline>EyeLevel</WavyUnderline>$1</h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="$2">$3</motion.p>`
    );

    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file}`);
  }
});
