import crypto from 'crypto';
import https from 'https';
import jsonwebtoken from 'jsonwebtoken';
export function rule005() {
  // rule_key: quantum.arq-q-0624-typescript
  crypto.generateKeyPairSync("rsa", { modulusLength: 1024 });
}
