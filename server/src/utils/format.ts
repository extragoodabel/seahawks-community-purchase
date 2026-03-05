export function sanitizeName(input: string) {
  return String(input || '')
    .replace(/[^a-zA-Z\s'\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
}

export function initials(fullName: string) {
  const parts = String(fullName).split(' ').filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return `${parts[0][0].toUpperCase()}.`;
  return `${parts[0][0].toUpperCase()}. ${parts[parts.length - 1][0].toUpperCase()}.`;
}
