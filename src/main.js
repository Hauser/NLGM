const { app, BrowserWindow, ipcMain } = require('electron');
const Processor = require('./processor');

var window = undefined;

const processor = Processor.default().init();

const createWindow = () => {
    window = new BrowserWindow({ width: 1080, height: 720 });
    window.loadFile('./app/index.html');

    //window.webContents.openDevTools({ mode: 'bottom' });

    window.on('closed', () => {
        win = null;
    });

    ipcMain.on('request-data', (ev) => {
        processor.db.selectAll((_, row) => {
            ev.sender.send('data-row-request', row);
        });
    });
    ipcMain.on('check-port', (ev) => {
        processor.checkPort();
        ev.sender.send('port-state-request', processor.controller.port.isOpen);
    });
    ipcMain.on('can-save', (ev) => {
        ev.sender.send('can-save-request', processor.canSave());
    });
    ipcMain.on('save-data', () => {
        processor.saveData();
    });
    ipcMain.on('clear-data', () => {
        processor.clearData();
    });
};

processor.renderCallback = (cache) => window.webContents.send('cache-view', cache);
processor.portCloseCallaback = () => window.webContents.send('port-closed');

app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (window === null) {
        createWindow();
    }
});
app.on('quit', () => {
    processor.shutdown();
});