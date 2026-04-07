import crypto from 'crypto';
import https from 'https';
import jsonwebtoken from 'jsonwebtoken';
export function rule006() {
  // rule_key: quantum.arq-q-0625-typescript
  crypto.pbkdf2Sync("password", "salt", 1000, 32, "sha1");
}
