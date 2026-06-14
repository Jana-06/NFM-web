import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { platform } = req.query;
  
  let filename = 'NFM-Medcare-Setup.exe';
  let contentType = 'application/octet-stream';

  switch (platform ? platform.toLowerCase() : '') {
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

  const filePath = path.join(process.cwd(), 'server', filename);
  
  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.send(fileBuffer);
  }

  const dummySize = 1024 * 1024;
  const dummyBuffer = Buffer.alloc(dummySize);
  
  dummyBuffer.write(`MOCK INSTALLER FOR NFM MEDCARE (${platform ? platform.toUpperCase() : 'UNKNOWN'}) - DEVELOPED BY ANTIGRAVITY`, 0);

  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Length', dummySize);

  res.send(dummyBuffer);
}
