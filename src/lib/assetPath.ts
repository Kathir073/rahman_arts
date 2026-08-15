export const getAssetPath = (path: string) => {
  // Use relative paths to avoid GitHub Pages basePath issues
  return `.${path.startsWith('/') ? path : `/${path}`}`;
};
