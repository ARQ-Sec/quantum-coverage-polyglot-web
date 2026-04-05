import crypto from 'crypto';
import https from 'https';
import jsonwebtoken from 'jsonwebtoken';
export function rule007() {
  // rule_key: quantum.arq-q-0626-typescript
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}
