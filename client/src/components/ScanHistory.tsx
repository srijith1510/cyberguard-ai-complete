import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileIcon } from "lucide-react";

interface ScanItem {
  fileName: string;
  result: {
    threatLevel?: string;
    [key: string]: any;
  };
  timestamp: string;
}

const ScanHistory = () => {
  const [history, setHistory] = useState<ScanItem[]>([]);

  const fetchHistory = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/scans");
      const data = await res.json();
      setHistory(data.reverse());
    } catch (err) {
      console.error("Failed to fetch scan history", err);
    }
  };

  useEffect(() => {
    fetchHistory();

    const eventSource = new EventSource("http://localhost:3000/api/scans/events");
    eventSource.onmessage = () => {
      fetchHistory();
    };

    return () => eventSource.close();
  }, []);

  return (
    <Card className="mt-6 col-span-2">
      <CardHeader>
        <CardTitle>🗂 Scan History</CardTitle>
      </CardHeader>
      <CardContent className="max-h-64 overflow-hidden">
        <ScrollArea className="h-full pr-2">
          {history.length > 0 ? (
            <ul className="space-y-3 text-sm">
              {history.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded-md shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <FileIcon className="w-4 h-4" />
                    <div>
                      <p className="font-medium break-all">{item.fileName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(item.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded font-bold whitespace-nowrap ${
                      item.result?.threatLevel === "CRITICAL" || item.result?.threatLevel === "HIGH"
                        ? "bg-red-100 text-red-600"
                        : item.result?.threatLevel === "MEDIUM"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {item.result?.threatLevel || "Unknown"}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No scans yet.</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ScanHistory;
