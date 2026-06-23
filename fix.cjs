const fs = require('fs');
const targets = [
  'src/pages/industries/Automotive.tsx',
  'src/pages/industries/Healthcare.tsx',
  'src/pages/industries/ITSaaS.tsx',
  'src/pages/industries/ManufacturingB2B.tsx',
  'src/pages/industries/RealEstate.tsx'
];
targets.forEach(f => {
  if(fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf-8');
    content = content.replace(/className=\"flex flex-col sm:flex-row items-start justify-start gap-4/g, 'className=\"flex flex-col sm:flex-row items-center justify-center gap-4');
    content = content.replace(/flex justify-start items-center/g, 'flex justify-center items-center');
    content = content.replace(/flex items-start justify-start gap-2/g, 'flex items-center justify-center gap-2');
    content = content.replace(/min-h-\[65vh\] lg:min-h-\[95vh\] flex flex-col justify-start/g, 'min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center');
    fs.writeFileSync(f, content);
  }
});
console.log('Done');
