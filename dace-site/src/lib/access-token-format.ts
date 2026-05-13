const TOKEN_PATTERN = /^[A-Za-z0-9_-]{20,128}$/;

export function isWellFormedToken(value: unknown): value is string {
  return typeof value === "string" && TOKEN_PATTERN.test(value);
}
