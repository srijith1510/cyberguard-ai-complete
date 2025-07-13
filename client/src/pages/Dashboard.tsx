// src/pages/Dashboard.tsx
import FileAnalyzer from "@/components/FileAnalyzer";
import SystemMetrics from "@/components/SystemMetrics";
import RealTimeMonitor from "@/components/RealTimeMonitor";
import ThreatAlerts from "@/components/ThreatAlerts";
import ScanHistory from "@/components/ScanHistory";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white text-black p-4 space-y-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold">CyberGuard AI Dashboard</h1>
        <p className="text-sm text-gray-600">
          Real-time ransomware detection and threat monitoring
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="col-span-1">
          <FileAnalyzer />
        </div>
        <div className="col-span-1">
          <SystemMetrics />
        </div>
        <div className="col-span-1 xl:row-span-2">
          <RealTimeMonitor />
        </div>
        <div className="col-span-1">
          <ThreatAlerts />
        </div>
        <div className="col-span-full">
          <ScanHistory />
        </div>
      </div>

      <footer className="text-center text-xs text-gray-500 pt-8 border-t mt-4">
        © 2025 CyberGuard AI. All rights reserved. <br />
        Real-time ransomware detection powered by AI, entropy analysis, and system monitoring.
      </footer>
    </main>
  );
}
