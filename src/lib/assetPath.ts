export const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/rahman_arts' : '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
