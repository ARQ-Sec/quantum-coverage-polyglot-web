const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0605-javascript
  crypto.pbkdf2Sync("password", "salt", 1000, 32, "sha1");
}
module.exports = { executeCoverageRule };
