import crypto from 'crypto';
import https from 'https';
import jsonwebtoken from 'jsonwebtoken';
export function rule002() {
  // rule_key: quantum.arq-q-0615-typescript
  crypto.createCipheriv("des-ede3-cbc", Buffer.alloc(24), Buffer.alloc(8));
}
