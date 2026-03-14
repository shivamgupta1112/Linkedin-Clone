import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgDir = path.resolve(__dirname, '../assets/svg');
const iconsDir = path.resolve(__dirname, '../assets/icons');

const transformSvgToJsx = (svgContent, componentName) => {
    // 1. Get inner content of SVG
    const innerContentMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    let innerContent = innerContentMatch ? innerContentMatch[1] : '';

    // Convert common attributes that React complains about in SVG elements
    innerContent = innerContent.replace(/class=/g, "className=");
    innerContent = innerContent.replace(/fill-rule=/g, "fillRule=");
    innerContent = innerContent.replace(/clip-rule=/g, "clipRule=");
    innerContent = innerContent.replace(/stroke-linecap=/g, "strokeLinecap=");
    innerContent = innerContent.replace(/stroke-linejoin=/g, "strokeLinejoin=");
    innerContent = innerContent.replace(/stroke-width=/g, "strokeWidth=");

    // 2. Extract specific SVG attributes if any (viewBox is most important)
    const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/i);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

    return `import React from 'react';

const ${componentName} = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="${viewBox}"
      fill="currentColor"
      {...props}
    >
      ${innerContent.trim()}
    </svg>
  );
};

export default ${componentName};
`;
};

if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

fs.readdir(svgDir, (err, files) => {
    if (err) {
        console.error("Could not read SVG directory:", err);
        return;
    }

    files.filter(file => file.endsWith('.svg')).forEach(file => {
        const svgPath = path.join(svgDir, file);
        // Ensure capitalized component name
        let componentName = file.replace('.svg', '');
        componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

        const jsxPath = path.join(iconsDir, `${componentName}.jsx`);

        const svgContent = fs.readFileSync(svgPath, 'utf8');
        const jsxContent = transformSvgToJsx(svgContent, componentName);

        fs.writeFileSync(jsxPath, jsxContent);
        console.log(`Converted ${file} to ${componentName}.jsx`);
    });
});
