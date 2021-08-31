const keys = require('../keys');

const manifest = {
  "identifier": "custom-mt",
  "name": "Custom mt",
  "logo": "/assets/img/logo.png",
  "baseUrl": keys.baseUrl,
  "authentication": {
    "type": "authorization_code",
    "clientId": keys.crowdinClientId
  },
  "events": {
    "installed": "/installed"
  },
  "scopes": [
    "project"
  ],
  "modules": {
        "custom-mt": [{
            "key": "custom-mt",
            "name": "Custom mt",
            "icon": "/logo.png",
            "description": "",
            "logo": "/assets/img/logo.png",
            "url": "/"
        }]
  },
};

module.exports = manifest;