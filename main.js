const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const https = require('https');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

// Check GitHub releases for a newer version
function checkForUpdate() {
  const currentVersion = require('./package.json').version;

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com',
      path: '/repos/BABAISABIGFATPOOP/homeschool-curriculum/releases/latest',
      headers: { 'User-Agent': 'HomeschoolCurriculum' }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const release = JSON.parse(data);
          const latestVersion = release.tag_name.replace('v', '');
          if (compareVersions(latestVersion, currentVersion) > 0) {
            resolve({ updateAvailable: true, currentVersion, latestVersion, downloadUrl: release.html_url });
          } else {
            resolve({ updateAvailable: false, currentVersion });
          }
        } catch (e) {
          resolve({ updateAvailable: false, currentVersion, error: 'Could not check for updates' });
        }
      });
    }).on('error', () => {
      resolve({ updateAvailable: false, currentVersion, error: 'No internet connection' });
    });
  });
}

// Compare semver strings: returns >0 if a > b
function compareVersions(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (pa[i] > pb[i]) return 1;
    if (pa[i] < pb[i]) return -1;
  }
  return 0;
}

ipcMain.handle('check-for-update', async () => {
  const result = await checkForUpdate();
  if (result.updateAvailable) {
    const response = await dialog.showMessageBox({
      type: 'info',
      title: 'Update Available',
      message: `A new version is available!\n\nCurrent: v${result.currentVersion}\nLatest: v${result.latestVersion}`,
      buttons: ['Download Update', 'Later'],
      defaultId: 0
    });
    if (response.response === 0) {
      shell.openExternal(result.downloadUrl);
    }
  }
  return result;
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
