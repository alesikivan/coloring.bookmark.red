module.exports = {
  apps : [{
    script: './core/coloring.js',
    env : {
      'PORT': 80,
      'NODE_ENV' : 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['45.93.136.98'],
      ref  : 'origin/main',
      repo : 'https://github.com/alesikivan/coloring.bookmark.red',
      path : '/root/apps/bookmark-coloring',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
