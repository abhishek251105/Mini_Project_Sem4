export async function copyToClipboard(text) {
  if (typeof text !== 'string' || text.length === 0) return false;

  // Modern Clipboard API (works in secure contexts: HTTPS, localhost, etc.)
  try {
    if (
      typeof window !== 'undefined' &&
      window.isSecureContext &&
      typeof navigator !== 'undefined' &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the legacy approach.
  }

  // Legacy fallback (works on HTTP in many browsers): temporary textarea + execCommand('copy')
  try {
    if (typeof document === 'undefined') return false;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.left = '-9999px';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const ok = document.execCommand && document.execCommand('copy');
    document.body.removeChild(textarea);

    return !!ok;
  } catch {
    return false;
  }
}

