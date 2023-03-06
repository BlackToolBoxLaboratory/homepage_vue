const openLink = (link: Record<string, any>) => {
  window.open(link.url);
};

export { openLink };
