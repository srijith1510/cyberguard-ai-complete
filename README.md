# 🛡️ CyberGuard AI – Real-Time Ransomware Detection and Monitoring

CyberGuard AI is a modern cybersecurity dashboard built to detect and prevent ransomware attacks in real-time using entropy-based analysis, behavioral tracking, and proactive alerts.

---

## 🚨 Problem

Traditional antivirus solutions rely on known threat signatures, which often fail to catch **new or evolving ransomware variants**. CyberGuard AI fills this gap by detecting suspicious activity patterns **before** damage is done.

---

## 🧠 Core Features

### 🔬 File Analyzer
- Uploads any file and scans it using **entropy-based analysis**
- Detects ransomware characteristics like high entropy or obfuscation
- Threat classification: ✅ Safe | ⚠️ Suspicious | ❌ Ransomware Detected

### 🖥️ Real-Time Monitoring
- Tracks file renaming (e.g., `backup.zip → backup_locked.zip`)
- Watches process behavior (e.g., repeated `powershell.exe` execution)
- Streams data via **WebSockets**

### 📊 System Metrics Panel
- Shows live CPU, memory, and disk usage
- Helps identify hidden ransomware running in the background

### 🧾 Scan History (Live)
- Auto-refreshes via **Server-Sent Events (SSE)**
- Logs: file name, verdict, and timestamp

### ⚠️ Threat Alerts
- Displays visual alerts for known ransomware actions or unauthorized access attempts

---

## ⚙️ Tech Stack

| Layer       | Technology                                  |
|-------------|----------------------------------------------|
| Frontend    | React (Vite + Tailwind CSS), Lucide Icons    |
| Backend     | Node.js + Express                            |
| Detection   | Entropy Analysis, Behavior Heuristics        |
| Real-Time   | WebSockets, Server-Sent Events (SSE)         |

---

## 📂 Folder Structure

