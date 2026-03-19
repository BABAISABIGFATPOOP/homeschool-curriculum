const { contextBridge, ipcRenderer } = require('electron');
const { marked } = require('marked');

contextBridge.exposeInMainWorld('api', {
  readFile: (relativePath) => ipcRenderer.invoke('read-file', relativePath),
  parseMarkdown: (md) => marked.parse(md),
  getVersion: () => ipcRenderer.invoke('get-version'),
  checkForUpdate: () => ipcRenderer.invoke('check-for-update')
});
