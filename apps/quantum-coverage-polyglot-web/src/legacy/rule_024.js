const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0606-javascript
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}
module.exports = { executeCoverageRule };
