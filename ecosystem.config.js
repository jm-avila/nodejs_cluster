module.exports = {
  apps: [
    {
      name: "test",
      script: "dist/pm2.js",
      instances: 4,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 7000,
      },
    },
  ],
};
