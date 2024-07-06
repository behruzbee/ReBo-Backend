module.exports = {
    apps: [{
      name: 'ReBo-Backend',
      script: './dist/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    }],
    
    deploy: {
      production: {
        user: 'root',
        host: '45.138.158.98',
        ref: 'origin/main',
        repo: 'https://github.com/behruzbee/ReBo-Backend.git',
        path: '/root/ReBo-Backend',
        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
      }
    }
  };