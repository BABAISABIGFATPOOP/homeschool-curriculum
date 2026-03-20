const { contextBridge, ipcRenderer } = require('electron');
const { marked } = require('marked');
const { placementQuestions } = require('./questions');
const { mathTestBanks } = require('./test-banks/math');
const { englishTestBanks } = require('./test-banks/english');
const { biologyTestBanks } = require('./test-banks/biology');
const { scienceTestBanks } = require('./test-banks/science');
const { historyTestBanks } = require('./test-banks/history');
const { geographyTestBanks } = require('./test-banks/geography');

// Combine all test bank questions into one big pool per subject
const allQuestionsBySubject = {
  Math: mathTestBanks.flat(),
  English: englishTestBanks.flat(),
  Biology: biologyTestBanks.flat(),
  Science: scienceTestBanks.flat(),
  History: historyTestBanks.flat(),
  Geography: geographyTestBanks.flat()
};

contextBridge.exposeInMainWorld('api', {
  readFile: (relativePath) => ipcRenderer.invoke('read-file', relativePath),
  parseMarkdown: (md) => marked.parse(md),
  getVersion: () => ipcRenderer.invoke('get-version'),
  checkForUpdate: () => ipcRenderer.invoke('check-for-update'),
  authSignUp: (email, password, name) => ipcRenderer.invoke('auth-signup', email, password, name),
  authLogIn: (email, password) => ipcRenderer.invoke('auth-login', email, password),
  authLogOut: () => ipcRenderer.invoke('auth-logout'),
  authCurrentUser: () => ipcRenderer.invoke('auth-current-user'),
  getQuestions: () => placementQuestions,
  getAllQuestions: () => allQuestionsBySubject
});
