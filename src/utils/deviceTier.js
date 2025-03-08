// utils/deviceTier.js
export const getDeviceTier = () => {
  const benchmarks = {
    cpuCores: navigator.hardwareConcurrency || 1,
    ram: performance.memory ? performance.memory.jsHeapSizeLimit : 0,
    gpu: !!navigator.gpu
  };

  // 分级标准
  if (benchmarks.gpu && benchmarks.cpuCores >= 4) return 'high';
  if (benchmarks.cpuCores >= 2 || benchmarks.ram > 4e9) return 'medium';
  return 'low';
};