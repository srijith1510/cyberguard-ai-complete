import { calculateEntropy } from '../utils/entropy';

export async function analyzeFile(file: Express.Multer.File) {
  const buffer = file.buffer;
  const entropy = calculateEntropy(buffer);

  const threatLevel =
    entropy > 7.5 ? 'CRITICAL' :
    entropy > 6.5 ? 'HIGH' :
    entropy > 5 ? 'MEDIUM' :
    'LOW';

  const verdict =
    threatLevel === 'CRITICAL' || threatLevel === 'HIGH'
      ? 'Ransomware Detected'
      : 'Clean';

  return {
    filename: file.originalname,
    size: file.size,
    entropy: entropy.toFixed(2),
    threatLevel,
    verdict, // ✅ added verdict
    analyzedAt: new Date().toISOString(),
  };
}
