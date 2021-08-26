const fs = require('fs');
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: true,
  env: {
    NR_SCRIPT: fs.readFileSync('./NR_SCRIPT.js').toString(),
    NR_ACCOUNT_ID: process.env.NR_ACCOUNT_ID,
    NR_TRUST_KEY: process.env.NR_TRUST_KEY,
    NR_AGENT_ID: process.env.NR_AGENT_ID,
    NR_LICENSE_KEY: process.env.NR_LICENSE_KEY,
    NR_APPLICATION_ID: process.env.NR_APPLICATION_ID,
  },
};
