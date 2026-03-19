const { contextBridge, ipcRenderer } = require('electron');
const { marked } = require('marked');
const { placementQuestions } = require('./questions');

contextBridge.exposeInMainWorld('api', {
  readFile: (relativePath) => ipcRenderer.invoke('read-file', relativePath),
  parseMarkdown: (md) => marked.parse(md),
  getVersion: () => ipcRenderer.invoke('get-version'),
  checkForUpdate: () => ipcRenderer.invoke('check-for-update'),
  authSignUp: (email, password, name, dob) => ipcRenderer.invoke('auth-signup', email, password, name, dob),
  authLogIn: (email, password) => ipcRenderer.invoke('auth-login', email, password),
  authLogOut: () => ipcRenderer.invoke('auth-logout'),
  authCurrentUser: () => ipcRenderer.invoke('auth-current-user'),
  getQuestions: () => placementQuestions
});
