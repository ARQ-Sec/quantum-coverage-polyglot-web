import crypto from 'crypto';
import https from 'https';
import jsonwebtoken from 'jsonwebtoken';
export function rule008() {
  // rule_key: quantum.arq-q-0627-typescript
  crypto.createSign("RSA-SHA1").update("legacy");
}
