const cdnBaseUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, '');

export function withCdnUrl(path: string) {
  if (!path) return path;
  if (/^https?:\/\//.test(path) || path.startsWith('data:')) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return cdnBaseUrl ? `${cdnBaseUrl}${normalizedPath}` : normalizedPath;
}
