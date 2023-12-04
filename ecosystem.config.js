module.exports = {
  apps: [
    {
      name: "blog-server",
      script: "./dist/server.js",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
