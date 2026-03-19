const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

contextBridge.exposeInMainWorld('api', {
  readFile: (relativePath) => {
    const fullPath = path.join(__dirname, relativePath);
    return fs.readFileSync(fullPath, 'utf-8');
  },
  parseMarkdown: (md) => {
    return marked.parse(md);
  },
  getVersion: () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'));
    return pkg.version;
  },
  checkForUpdate: () => ipcRenderer.invoke('check-for-update')
});
