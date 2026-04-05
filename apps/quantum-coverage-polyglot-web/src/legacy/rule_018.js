const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0594-javascript
  crypto.createHash("sha1").update("legacy").digest("hex");
}
module.exports = { executeCoverageRule };
