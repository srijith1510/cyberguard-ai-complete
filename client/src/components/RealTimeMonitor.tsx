import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EventLog {
  timestamp: string;
  message: string;
}

const RealTimeMonitor = () => {
  const [logs, setLogs] = useState<EventLog[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000/ws");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "log") {
        setLogs((prevLogs) => [
          {
            timestamp: new Date(data.timestamp).toLocaleTimeString(),
            message: data.message,
          },
          ...prevLogs.slice(0, 49),
        ]);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <Card className="col-span-1 md:col-span-2 xl:col-span-2">
      <CardHeader>
        <CardTitle>💡 Real-Time Monitor</CardTitle>
      </CardHeader>
      <CardContent className="h-64 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          <ul className="space-y-1 text-sm font-mono text-gray-700">
            {logs.map((log, index) => (
              <li key={index} className="flex justify-between">
                <span>{log.timestamp}</span>
                <span className="ml-2 text-right text-gray-600 truncate">{log.message}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RealTimeMonitor;
