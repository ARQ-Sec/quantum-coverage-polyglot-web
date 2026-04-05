import crypto from 'crypto';
import https from 'https';
import jsonwebtoken from 'jsonwebtoken';
export function rule004() {
  // rule_key: quantum.arq-q-0621-typescript
  jsonwebtoken.verify(token, "", { algorithms: ["none"] });
}
