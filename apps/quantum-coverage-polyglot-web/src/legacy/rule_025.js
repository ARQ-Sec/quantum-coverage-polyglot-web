const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0607-javascript
  crypto.createSign("RSA-SHA1").update("legacy");
}
module.exports = { executeCoverageRule };
