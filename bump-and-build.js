const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pkgPath = path.join(__dirname, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

// Bump patch version
const parts = pkg.version.split('.').map(Number);
parts[2]++;

// Roll over: patch 9 -> minor+1, patch 0
if (parts[2] > 9) {
  parts[2] = 0;
  parts[1]++;
}
// Roll over: minor 9 -> major+1, minor 0
if (parts[1] > 9) {
  parts[1] = 0;
  parts[0]++;
}

pkg.version = parts.join('.');
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

console.log(`Version bumped to ${pkg.version}`);
console.log('Building...');

execSync('npx electron-builder --win portable', { stdio: 'inherit', cwd: __dirname });

console.log(`\nBuild complete: Homeschool Curriculum ${pkg.version}.exe`);
console.log('To release, run:');
console.log(`  cd ${__dirname}`);
console.log(`  git add -A && git commit -m "v${pkg.version}" && git push`);
console.log(`  gh release create v${pkg.version} "dist/Homeschool Curriculum ${pkg.version}.exe" --title "v${pkg.version}"`);
