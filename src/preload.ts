import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    runTSCommand: () => ipcRenderer.send('run-btn1'),
});
