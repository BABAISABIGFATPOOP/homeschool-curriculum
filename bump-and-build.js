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
console.log('\nTo release (builds Win + Mac automatically via GitHub Actions):');
console.log(`  git add -A && git commit -m "v${pkg.version}" && git push`);
console.log(`  git tag v${pkg.version} && git push origin v${pkg.version}`);
console.log('\nGitHub Actions will build both .exe and .zip and attach them to the release.');
