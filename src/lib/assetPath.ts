export const getAssetPath = (path: string) => {
  const basePath = '/rahman_arts';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
