module.exports = {
  apps: [
    {
      name: "be-express",
      script: "./dist/index.js",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
