export function calculateEntropy(buffer: Buffer): number {
  const byteCounts = new Array(256).fill(0);

  for (const byte of buffer) {
    byteCounts[byte]++;
  }

  let entropy = 0;
  const total = buffer.length;

  for (const count of byteCounts) {
    if (count === 0) continue;
    const p = count / total;
    entropy -= p * Math.log2(p);
  }

  return entropy;
}
