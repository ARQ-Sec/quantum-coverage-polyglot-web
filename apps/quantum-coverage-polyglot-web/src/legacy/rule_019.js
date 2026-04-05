const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0595-javascript
  crypto.createCipheriv("des-ede3-cbc", Buffer.alloc(24), Buffer.alloc(8));
}
module.exports = { executeCoverageRule };
