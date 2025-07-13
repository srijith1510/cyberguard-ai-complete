import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { UploadCloud, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this exists or use a <button> instead

const FileAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    setFile(selected || null);
    setResult("");
  };

  const handleScan = async () => {
    if (!file) {
      setResult("Please select a file to scan.");
      return;
    }

    setLoading(true);
    setResult("Scanning...");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(
        data?.threatLevel === "CRITICAL" || data?.threatLevel === "HIGH"
          ? "⚠️ Ransomware Detected"
          : "✅ No ransomware detected."
      );

      // Optional: force-refresh scan history (ping server to emit SSE if needed)
      await fetch("http://localhost:3000/api/scans/events");

    } catch (error) {
      setResult("Error during scan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UploadCloud className="w-5 h-5" /> File Analyzer
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* File input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200"
        />

        {/* Scan button */}
        <Button
          onClick={handleScan}
          disabled={loading || !file}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded shadow disabled:opacity-50 flex items-center gap-2"
        >
          <ScanLine className="w-4 h-4" />
          {loading ? "Scanning..." : "Scan"}
        </Button>

        {/* Scan result */}
        {result && (
          <div
            className={`p-3 rounded-md text-sm font-medium border ${
              result.includes("✅")
                ? "bg-green-100 text-green-800 border-green-300"
                : result.includes("⚠️")
                ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
          >
            {result}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FileAnalyzer;
