const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'components', 'sections', 'services');

const folders = fs.readdirSync(targetDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

folders.forEach(folder => {
  const compDir = path.join(targetDir, folder);
  const files = fs.readdirSync(compDir).filter(f => f.endsWith('Section.tsx'));
  
  files.forEach(file => {
    const filePath = path.join(compDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has <> after return (
    if (content.includes('return (\n    <>')) return;

    // Use regex to find return ( ... ); and wrap it in <> ... </>
    content = content.replace(/return \([\s\S]*?\n  \);\n};/, (match) => {
       const inner = match.slice(9, -6); // get everything between return ( and );\n};
       return `return (\n    <>\n${inner}\n    </>\n  );\n};`;
    });

    fs.writeFileSync(filePath, content);
  });
});
console.log('JSX fragments fixed!');
