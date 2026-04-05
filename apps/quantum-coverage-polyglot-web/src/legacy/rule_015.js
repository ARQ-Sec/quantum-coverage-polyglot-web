const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0591-javascript
  const opts = { rejectUnauthorized: false }; https.request(opts);
}
module.exports = { executeCoverageRule };
