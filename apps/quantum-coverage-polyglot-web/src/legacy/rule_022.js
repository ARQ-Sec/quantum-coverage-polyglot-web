const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0604-javascript
  crypto.generateKeyPairSync("rsa", { modulusLength: 1024 });
}
module.exports = { executeCoverageRule };
