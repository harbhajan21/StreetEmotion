const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('acid-lime')) {
                const newContent = content.replace(/acid-lime/g, 'brand-accent');
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done.');
