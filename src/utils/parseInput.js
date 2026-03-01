export function parseReferenceString(str) {
  return str.trim().split(/\s+/).map(Number);
}
