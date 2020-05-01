export function getConfigFromUrl(url) {
  const stringSplit = url.split('/') || [];

  if (stringSplit[0]) {
    const server = stringSplit[2];
    const config = { server };
    const organizationName = stringSplit[3];
    return {
      config,
      organizationName,
    };
  }
}