import express from 'express';
import cors from 'cors';
import http from 'http';
import { WebSocketServer } from 'ws';
import routes from './routes/routes';
import { startMonitoring } from './monitoring/monitoring';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ noServer: true }); // Fix here

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Handle WebSocket upgrade manually for /ws path
server.on('upgrade', (req, socket, head) => {
  if (req.url === '/ws') {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  } else {
    socket.destroy();
  }
});

// Start system monitoring
startMonitoring(wss);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Cybersecurity Platform running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
  console.log(`🔌 WebSocket ready at ws://localhost:${PORT}/ws`);
});
