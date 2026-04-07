const crypto = require('crypto');
const https = require('https');
const jsonwebtoken = require('jsonwebtoken');
function executeCoverageRule() {
  // rule_key: quantum.arq-q-0597-javascript
  const verifier = crypto.createVerify("RSA-SHA256");
  const signer = crypto.createSign("RSA-SHA256");
  const shorFamilies = ["RSA", "ECDSA"];
}
module.exports = { executeCoverageRule };
