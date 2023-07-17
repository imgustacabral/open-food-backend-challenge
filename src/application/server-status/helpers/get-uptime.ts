export function getUptime() {
  let uptimeInSeconds = process.uptime();
  const days = Math.floor(uptimeInSeconds / (24 * 60 * 60));
  uptimeInSeconds %= 24 * 60 * 60;
  const hours = Math.floor(uptimeInSeconds / (60 * 60));
  uptimeInSeconds %= 60 * 60;
  const minutes = Math.floor(uptimeInSeconds / 60);
  uptimeInSeconds %= 60;
  const seconds = Math.floor(uptimeInSeconds);
  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}
