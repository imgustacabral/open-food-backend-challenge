export function getMemoryUsage() {
  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
  return `${memoryUsage.toFixed(2)} MB`;
}
