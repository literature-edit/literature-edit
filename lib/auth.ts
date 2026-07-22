import crypto from "crypto";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_literature_edit_983274982";

export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export function createSessionToken(payload: object): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payloadStr = Buffer.from(
    JSON.stringify({
      ...payload,
      exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours expiry
    })
  ).toString("base64url");

  const hmac = crypto.createHmac("sha256", JWT_SECRET);
  hmac.update(`${header}.${payloadStr}`);
  const signature = hmac.digest("base64url");

  return `${header}.${payloadStr}.${signature}`;
}

export function verifySessionToken(token: string): any {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const [header, payloadStr, signature] = parts;

    const hmac = crypto.createHmac("sha256", JWT_SECRET);
    hmac.update(`${header}.${payloadStr}`);
    const expectedSignature = hmac.digest("base64url");

    if (signature !== expectedSignature) return null;

    const payload = JSON.parse(Buffer.from(payloadStr, "base64url").toString("utf-8"));
    
    if (payload.exp < Date.now()) {
      return null; // Token has expired
    }

    return payload;
  } catch (error) {
    return null;
  }
}
