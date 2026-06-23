const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx')) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles('src');

const nonHeroTexts = [
  'THE OUTCOME',
  'INDUSTRY',
  'The Reality Check',
  'The Problem',
  'What we do for this industry',
  'What we do for the industry',
  'Why EyeLevel',
  'CTA band',
  'Client Success',
  'Portfolio',
  'Design Gallery',
  'Creative Philosophy',
  'Selected Creative Work',
  'Creative Design Categories',
  'Our Arsenal',
  'The Fix',
  "The Buyer's Perspective",
  'Ready to Launch?',
  'The Locker Room Talk',
  'Ready to Win?',
  'Our Creative Works' // Wait, 'Our Creative Works' is the hero in Portfolio! Exclude it.
];

const targetTexts = nonHeroTexts.filter(t => t !== 'Our Creative Works');

let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  targetTexts.forEach(text => {
    let searchStr = '<GreenButton>' + text + '</GreenButton>';
    if (content.includes(searchStr)) {
       let parts = content.split(searchStr);
       for (let i = 1; i < parts.length; i++) {
          let before = parts[i-1];
          let lastClassIdx = before.lastIndexOf('className="');
          if (lastClassIdx !== -1 && before.length - lastClassIdx < 150) {
             let classEndIdx = before.indexOf('"', lastClassIdx + 11);
             if (classEndIdx !== -1) {
                let classStr = before.substring(lastClassIdx + 11, classEndIdx);
                let newClassStr = classStr.replace(/\bmb-\d+\b/g, '').replace(/\s{2,}/g, ' ').trim();
                if (newClassStr !== classStr) {
                   before = before.substring(0, lastClassIdx + 11) + newClassStr + before.substring(classEndIdx);
                   parts[i-1] = before;
                }
             }
          }

          let after = parts[i];
          let nextTagStart = after.indexOf('<h');
          if (nextTagStart !== -1 && nextTagStart < 150) {
             let nextTagEnd = after.indexOf('>', nextTagStart);
             if (nextTagEnd !== -1) {
                let tagStr = after.substring(nextTagStart, nextTagEnd);
                if (tagStr.includes('className="')) {
                   let tagClassMatch = tagStr.match(/className="([^"]+)"/);
                   if (tagClassMatch) {
                      let tagClassStr = tagClassMatch[1];
                      let newTagClassStr = tagClassStr.replace(/\bmt-\d+\b/g, '').replace(/\s{2,}/g, ' ').trim();
                      if (newTagClassStr !== tagClassStr) {
                         let newTagStr = tagStr.replace(tagClassStr, newTagClassStr);
                         after = after.substring(0, nextTagStart) + newTagStr + after.substring(nextTagEnd);
                         parts[i] = after;
                      }
                   }
                }
             }
          }
       }
       content = parts.join(searchStr);
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log('Updated', file);
  }
});
console.log('Total files modified:', modifiedCount);
