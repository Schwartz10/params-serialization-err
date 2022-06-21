/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    const adjustedConf = { ...config };
    const experiments = config.experiments || {};
    adjustedConf.experiments = { ...experiments, syncWebAssembly: true };

    return adjustedConf;
  },
};

module.exports = nextConfig;
