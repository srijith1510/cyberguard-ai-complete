import os from 'os';
import { WebSocketServer } from 'ws';

// Fake events to randomly pick from
const fakeEvents = [
  "New process started: powershell.exe",
  "System scan initiated...",
  "Accessed file: report.pdf",
  "High entropy file created: secret_encrypted.bin",
  "Suspicious write to temp.exe",
  "File renamed: backup.zip → backup_locked.zip",
  "Unauthorized access attempt",
  "Watching /user/documents...",
  "Known ransomware process running"
];

export function startMonitoring(wss: WebSocketServer) {
  // Send system metrics every 2 seconds
  setInterval(() => {
    const metrics = {
      cpuLoad: os.loadavg()[0],
      memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024,
      timestamp: new Date().toISOString(),
    };

    const message = JSON.stringify({ type: 'metrics', payload: metrics });

    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  }, 2000);

  // Send random log events every 3–5 seconds
  setInterval(() => {
    const log = {
      type: 'log',
      message: fakeEvents[Math.floor(Math.random() * fakeEvents.length)],
      timestamp: new Date().toISOString(),
    };

    const logMessage = JSON.stringify(log);

    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(logMessage);
      }
    });
  }, Math.floor(Math.random() * 2000) + 3000); // between 3s and 5s
}
