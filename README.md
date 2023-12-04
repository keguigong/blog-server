```json
{
  "scripts": {
    "dev": "nodemon -q src/index.ts",
    "build": "tsc",
    "serve": "nodemon dist/index.js",
    "pm2:start": "pm2 start ecosystem.config.js --env production",
    "pm2:stop": "pm2 stop ecosystem.config.js",
    "pm2:delete": "pm2 delete ecosystem.config.js"
  }
}
```
