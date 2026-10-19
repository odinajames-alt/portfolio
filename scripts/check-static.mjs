import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(process.argv[2]||'.');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
 const url=match[1];if(/^(?:https?:|#|mailto:|tel:)/.test(url))continue;
 const file=url.split(/[?#]/)[0];if(!fs.existsSync(path.join(root,file)))throw Error('Missing published asset: '+file);
}
const scripts=[...html.matchAll(/<script\b[^>]*src="([^"]+)"/g)].map(m=>m[1].split('?')[0]);
if(scripts.indexOf('i18n.js')<0||scripts.indexOf('i18n.js')>scripts.indexOf('app.js'))throw Error('Translation data must load before app.js');
console.log('PASS: all referenced assets are packaged and translation data loads first.');
