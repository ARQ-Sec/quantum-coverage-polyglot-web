const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0601-javascript
  jsonwebtoken.verify(token, "", { algorithms: ["none"] });
}
module.exports = { executeCoverageRule };
