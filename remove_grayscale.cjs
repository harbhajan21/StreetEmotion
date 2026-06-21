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
            let newContent = content.replace(/\bgrayscale\b/g, '');
            newContent = newContent.replace(/\bhover:grayscale-0\b/g, '');
            newContent = newContent.replace(/\bgroup-hover:grayscale-0\b/g, '');
            // Clean up double spaces created by removal
            newContent = newContent.replace(/  +/g, ' ');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done.');
