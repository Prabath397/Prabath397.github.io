/**
 * Escapes HTML special characters to prevent XSS.
 */
export function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/**
 * Validates and sanitizes a URL. Returns the fallback if the URL is invalid.
 */
export function safeUrl(value, fallback = '#') {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : fallback;
  } catch {
    return fallback;
  }
}
