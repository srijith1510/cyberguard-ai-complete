import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const SystemMetrics = () => {
  const [metrics, setMetrics] = useState<{
    cpuLoad: number;
    memoryUsage: number;
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000/ws");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "metrics") {
        setMetrics(data.payload);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>🖥️ System Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 text-sm text-gray-700 font-mono">
        <p>CPU Usage: {metrics ? metrics.cpuLoad.toFixed(2) : "Loading..."}%</p>
        <p>Memory Usage: {metrics ? metrics.memoryUsage.toFixed(2) : "Loading..."} MB</p>
        <p>Last Update: {metrics ? new Date(metrics.timestamp).toLocaleTimeString() : "..."}</p>
      </CardContent>
    </Card>
  );
};

export default SystemMetrics;
