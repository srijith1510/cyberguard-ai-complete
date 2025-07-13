# CyberGuard AI - Advanced Ransomware Detection Platform

## Overview
A comprehensive cybersecurity platform designed to detect, analyze, and mitigate ransomware threats in real-time. Built for hackathon competition with advanced AI-powered threat detection, behavioral analysis, and automated incident response capabilities.

**Current Status**: Full-stack application with React frontend, Express.js backend, and advanced ransomware detection engine implemented.

## System Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express.js + TypeScript
- **Real-time Communication**: WebSockets for live monitoring
- **State Management**: TanStack Query for API caching
- **Database**: In-memory storage (MemStorage) for rapid prototyping
- **File Processing**: Advanced entropy analysis, signature detection
- **Security Analysis**: Custom AI algorithms for threat classification

### Architecture Pattern
- **MVC Pattern**: Modular separation of concerns
- **Real-time Data Streaming**: WebSocket-based live monitoring
- **API-first Design**: RESTful endpoints with structured responses
- **Component-based UI**: Reusable React components with modern hooks

## Key Components

### Backend Services
1. **Detection Engine** (`server/detection-engine.ts`)
   - Advanced file analysis with entropy calculation
   - Signature-based threat identification
   - Behavioral pattern recognition
   - AI-powered threat classification

2. **Real-time Monitor** (`server/monitoring.ts`)
   - System metrics collection (CPU, memory, network)
   - Process activity monitoring
   - File system change detection
   - WebSocket broadcasting for live updates

3. **API Routes** (`server/routes.ts`)
   - File upload and analysis endpoints
   - System monitoring controls
   - Threat intelligence management
   - Security incident tracking

4. **Storage Layer** (`server/storage.ts`)
   - In-memory data persistence
   - CRUD operations for all entities
   - Efficient data retrieval and caching

### Frontend Components
1. **Dashboard** (`client/src/components/Dashboard.tsx`)
   - Main navigation and overview
   - Real-time statistics display
   - Multi-tab interface for different functions

2. **File Analyzer** (`client/src/components/FileAnalyzer.tsx`)
   - Drag-and-drop file upload
   - Real-time analysis results
   - Threat classification and mitigation recommendations

3. **Real-time Monitor** (`client/src/components/RealTimeMonitor.tsx`)
   - Live system metrics visualization
   - WebSocket-based data streaming
   - Attack simulation capabilities

4. **System Metrics** (`client/src/components/SystemMetrics.tsx`)
   - CPU, memory, and network monitoring
   - File system activity tracking
   - Alert level indicators

5. **Threat Alerts** (`client/src/components/ThreatAlerts.tsx`)
   - Security incident management
   - Response action tracking
   - Alert prioritization

## Data Flow

### File Analysis Pipeline
1. **Upload**: Files uploaded via drag-and-drop interface
2. **Analysis**: Advanced detection engine processes file
3. **Classification**: AI algorithms determine threat level
4. **Storage**: Results stored with complete analysis metadata
5. **Display**: Real-time results shown to user with recommendations

### Real-time Monitoring Flow
1. **Collection**: System metrics gathered every 2 seconds
2. **Analysis**: Threat assessment based on behavioral patterns
3. **Broadcasting**: WebSocket streams data to connected clients
4. **Storage**: Historical data maintained for trending
5. **Alerting**: Critical threats trigger automated incident creation

### Threat Intelligence Processing
1. **Detection**: Automated threat identification
2. **Classification**: Severity and type categorization
3. **Response**: Automated mitigation action recommendations
4. **Incident Creation**: Security incidents for high-priority threats
5. **Tracking**: Complete audit trail for all security events

## Advanced Features

### AI-Powered Detection
- **Entropy Analysis**: Shannon entropy calculation for encryption detection
- **Signature Matching**: YARA-like pattern recognition
- **Behavioral Analysis**: Process and file system activity correlation
- **API Call Monitoring**: Suspicious Windows API usage detection
- **String Analysis**: Extraction and classification of embedded strings

### Real-time Capabilities
- **Live Monitoring**: 2-second interval system scanning
- **WebSocket Streaming**: Real-time data delivery to frontend
- **Attack Simulation**: Demo ransomware scenarios for testing
- **Automated Response**: Immediate threat containment actions

### Security Features
- **Threat Classification**: 4-tier severity system (LOW/MEDIUM/HIGH/CRITICAL)
- **Incident Response**: Automated workflow creation
- **Mitigation Actions**: Context-aware recommendations
- **Network Analysis**: Suspicious connection detection
- **File System Protection**: Encryption activity monitoring

## External Dependencies

### Core Libraries
- **Express.js**: Web server framework
- **React**: Frontend user interface
- **TypeScript**: Type safety and development experience
- **TailwindCSS**: Utility-first styling framework
- **TanStack Query**: Server state management
- **WebSocket (ws)**: Real-time communication
- **Multer**: File upload handling
- **Zod**: Runtime type validation

### Development Tools
- **Vite**: Frontend build tool and development server
- **TSX**: TypeScript execution for development
- **Concurrently**: Parallel process execution

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server + TSX for backend
- **Hot Reloading**: Automatic refresh for both frontend and backend
- **Port Configuration**: Frontend (5173), Backend (3000)
- **WebSocket Integration**: Seamless real-time communication

### Production Considerations
- **Build Process**: Vite production build optimization
- **Asset Optimization**: Minification and compression
- **Environment Variables**: Secure configuration management
- **Health Monitoring**: Application health check endpoints

## Recent Changes

### June 28, 2025 - Full Platform Implementation
- ✅ Complete backend infrastructure with detection engine
- ✅ Advanced ransomware analysis algorithms
- ✅ Real-time monitoring system with WebSocket support
- ✅ React frontend with modern component architecture
- ✅ File upload and analysis capabilities
- ✅ System metrics visualization
- ✅ Security incident management
- ✅ Threat intelligence processing
- ✅ Attack simulation features
- ✅ Responsive dark theme UI design

### Key Accomplishments
- **Advanced Detection**: Multi-layered threat analysis engine
- **Real-time Monitoring**: Live system surveillance capabilities
- **Modern UI/UX**: Professional cybersecurity dashboard
- **WebSocket Integration**: Seamless real-time data streaming
- **Comprehensive API**: Full CRUD operations for all entities
- **Demo Features**: Attack simulation for demonstration purposes

## User Preferences
- **Communication Style**: Simple, everyday language
- **Technical Focus**: Advanced cybersecurity features for hackathon competition
- **Real-time Requirements**: Live monitoring and immediate threat response
- **UI/UX Preference**: Professional cybersecurity aesthetic with dark theme