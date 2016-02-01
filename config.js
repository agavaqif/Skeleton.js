exports.config = {
  'development': {
    'app':{
      'name': 'App Name'
    },
    'auth': {
      'facebook': {
        'clientID': '{PLCHLDR}',
        'clientSecret': '{PLCHLDR}',
        'callbackURL': '{PLCHLDR}'
      },
      'google' : {
        'clientID': '{PLCHLDR}',
        'clientSecret': '{PLCHLDR}',
        'callbackURL': '{PLCHLDR}'
      }
    },
    'server_conf': { // Configurations of servers that'll be used
      'mongo':{
        'ip': 'Db Server IP',
        'port': 'Db Server Port',
        'db': 'DB Name',
        'dbuser': 'DB User',
        'dbpass': 'DB Pass'
      },
    }
  },
  'production':{
    'app':{
      'name': 'App Name'
    },
    'auth': {
      'facebook': {
        'clientID': '{PLCHLDR}',
        'clientSecret': '{PLCHLDR}',
        'callbackURL': '{PLCHLDR}'
      },
      'google' : {
        'clientID': '{PLCHLDR}',
        'clientSecret': '{PLCHLDR}',
        'callbackURL': '{PLCHLDR}'
      }
    },
    'server_conf': {
      'mongo':{
        'ip': 'Db Server IP',
        'port': 'Db Server Port',
        'db': 'DB Name',
        'dbuser': 'DB User',
        'dbpass': 'DB Pass'
      },
    }
  }
}