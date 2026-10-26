#!/usr/bin/env node
// Prints fresh UUIDv7 ids, the current UTC time, and the host and session for Task OS records.
// Usage: node new-id.mjs [count]
import { randomBytes } from 'node:crypto';

function uuidv7(ms) {
  const bytes = randomBytes(16);
  let time = BigInt(ms);
  for (let i = 5; i >= 0; i--) {
    bytes[i] = Number(time & 0xffn);
    time >>= 8n;
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = bytes.toString('hex');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

const count = Math.min(100, Math.max(1, Number.parseInt(process.argv[2] ?? '1', 10) || 1));
const now = Date.now();
const env = process.env;
const host = env.CODEX_THREAD_ID ? 'codex' : env.CLAUDECODE || env.CLAUDE_CODE_SESSION_ID ? 'claude-code' : null;
const session = env.CODEX_THREAD_ID || env.CLAUDE_CODE_SESSION_ID || null;

console.log(JSON.stringify({
  ids: Array.from({ length: count }, () => uuidv7(now)),
  now: new Date(now).toISOString(),
  host,
  session,
}));
