import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { AlertTriangle, AlertCircle } from "lucide-react";

interface Alert {
  message: string;
  timestamp: string;
}

const ThreatAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000/ws");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "alert") {
          setAlerts((prev) => [
            {
              message: data.message,
              timestamp: new Date().toISOString(),
            },
            ...prev,
          ]);
        }
      } catch (e) {
        console.error("Invalid WebSocket message", e);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-600">
          <AlertCircle className="w-5 h-5" />
          Threat Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 max-h-64 overflow-y-auto pr-2">
        {alerts.length === 0 ? (
          <p className="text-sm text-muted-foreground">No threats detected yet.</p>
        ) : (
          alerts.map((alert, index) => (
            <div
              key={index}
              className="p-3 rounded-md border border-red-300 bg-red-50 shadow-sm"
            >
              <div className="flex items-center gap-2 text-red-700 font-semibold">
                <AlertTriangle className="w-4 h-4" />
                {alert.message}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {new Date(alert.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default ThreatAlerts;
