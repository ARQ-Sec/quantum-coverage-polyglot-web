const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0593-javascript
  crypto.createHash("md5").update("legacy").digest("hex");
}
module.exports = { executeCoverageRule };
