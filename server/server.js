import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static assets from the client build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// API Endpoint to stream simulated installers
app.get('/api/download/:platform', (req, res) => {
  const { platform } = req.params;
  let filename = 'NFM-Medcare-Setup.exe';
  let contentType = 'application/octet-stream';

  switch (platform.toLowerCase()) {
    case 'windows':
    case 'exe':
      filename = 'NFM-Medcare-Setup.exe';
      contentType = 'application/x-msdownload';
      break;
    case 'android':
    case 'apk':
      filename = 'NFM-Medcare.apk';
      contentType = 'application/vnd.android.package-archive';
      break;
    case 'macos':
    case 'dmg':
      filename = 'NFM-Medcare.dmg';
      contentType = 'application/x-apple-diskimage';
      break;
    default:
      filename = 'NFM-Medcare-Setup.exe';
      contentType = 'application/octet-stream';
  }

  // Check if the actual compiled file exists on the server to stream it directly
  const filePath = path.join(__dirname, filename);
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.sendFile(filePath);
  }

  // Create a 1MB dummy buffer to simulate an installer package
  const dummySize = 1024 * 1024; // 1 MB
  const dummyBuffer = Buffer.alloc(dummySize);
  
  // Write a mock header inside the binary to make it identifiable
  dummyBuffer.write(`MOCK INSTALLER FOR NFM MEDCARE (${platform.toUpperCase()}) - DEVELOPED BY ANTIGRAVITY`, 0);

  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Length', dummySize);

  res.send(dummyBuffer);
});

// Fallback to React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
