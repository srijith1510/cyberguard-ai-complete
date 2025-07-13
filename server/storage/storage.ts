import { EventEmitter } from "events";

interface ScanEntry {
  fileName: string;
  result: any;
  timestamp: string;
}

class MemoryStorage {
  private scans: ScanEntry[] = [];
  private scanEmitter = new EventEmitter();

  saveAnalysis(fileName: string, result: any) {
    // You can save analysis results if needed
  }

  saveScan(fileName: string, result: any) {
    const entry: ScanEntry = {
      fileName,
      result,
      timestamp: new Date().toISOString(),
    };

    this.scans.push(entry);

    // Notify any SSE clients
    this.scanEmitter.emit("new-scan");
    console.log("📦 Scan saved:", entry); // ✅ helpful log
  }

  getScans(): ScanEntry[] {
    return this.scans;
  }

  getStats() {
    return {
      totalScans: this.scans.length,
      threatsDetected: this.scans.filter(
        (s) =>
          s.result?.threatLevel === "HIGH" ||
          s.result?.threatLevel === "CRITICAL"
      ).length,
    };
  }

  getScanEmitter() {
    return this.scanEmitter;
  }
}

export const memoryStorage = new MemoryStorage();
