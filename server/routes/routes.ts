import { Router } from "express";
import multer from "multer";
import { analyzeFile } from "../detection/detection-engine";
import { memoryStorage } from "../storage/storage";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// ✅ Upload and analyze file
router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return
  }

  const result = await analyzeFile(req.file);
  memoryStorage.saveAnalysis(req.file.originalname, result);
  memoryStorage.saveScan(req.file.originalname, result); // Save to scan history

  res.json(result);
});

// ✅ Dashboard stats
router.get("/stats", (req, res) => {
  const stats = memoryStorage.getStats();
  res.json(stats);
});

// ✅ Scan history
router.get("/scans", (req, res) => {
  const scans = memoryStorage.getScans();
  res.json(scans);
});

// ✅ Server-Sent Events for real-time scan history updates
router.get("/scans/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const sendEvent = () => {
    res.write(`event: update\n`);
    res.write(`data: new-scan\n\n`);
  };

  memoryStorage.getScanEmitter().on("new-scan", sendEvent);

  req.on("close", () => {
    memoryStorage.getScanEmitter().off("new-scan", sendEvent);
  });
});

export default router;
