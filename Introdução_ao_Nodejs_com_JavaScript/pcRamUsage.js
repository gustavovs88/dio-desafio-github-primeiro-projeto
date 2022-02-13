const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const totalMbMem = totalmem() / 1024 / 1024;
  const totalMbFreeMem = freemem() / 1024 / 1024;
  const usage = ((totalMbMem - totalMbFreeMem) / totalMbMem) * 100;

  const stats = {
    os: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(totalMbMem)} MB`,
    FreeRAM: `${parseInt(totalMbFreeMem)} MB`,
    Usage: `${usage.toFixed(1)} %`,
  };

  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);
