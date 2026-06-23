const fs = require('fs');
const targets = [
  'src/pages/industries/Healthcare.tsx',
  'src/pages/industries/ITSaaS.tsx',
  'src/pages/industries/ManufacturingB2B.tsx'
];

const replacement = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-fr gap-6 justify-items-center md:justify-items-stretch">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={\`/services/\${service.slug}\`}
                  className={\`block group w-full h-full max-w-[350px] md:max-w-none lg:col-span-2 \${i === 3 ? "lg:col-start-2" : ""}\`}
                >
                  <div className="h-full rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border-2 border-primary/10 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(226,254,165,0.12)] bg-white/5 hover:bg-white/10 flex flex-col">
                    <h3 className="font-dela text-lg md:text-xl mb-4 uppercase flex justify-between items-start text-white group-hover:text-primary transition-colors duration-500">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#E2FEA5] shrink-0 ml-2" />
                    </h3>
                    <p className="font-bricolage text-sm md:text-base leading-relaxed text-foreground/80 mt-auto">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>`;

targets.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf-8');
    
    // The existing regex to find the flex container and its contents
    const pattern = /<div className="flex flex-wrap justify-start gap-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
    
    // We only replace the inner flex container, so we reconstruct the end tags
    const newContent = content.replace(pattern, replacement + '\n          </div>\n        </section>');
    
    if (content !== newContent) {
      fs.writeFileSync(f, newContent);
      console.log('Fixed: ' + f);
    } else {
      console.log('No match found in: ' + f);
    }
  }
});
