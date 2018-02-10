export function toSlug(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

export function constrain(v, min, max) {
  return Math.min(max, Math.max(min, v));
}
