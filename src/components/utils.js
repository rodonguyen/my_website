export const createHyperlink = (link, content) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {content}
    </a>
  );
};

export const changeWindowTitle = (path) => {
  if (path === '/') {
    document.title = "Rodo";
  }
  else if (path === '/resume') {
    document.title = "Resume";
  }
  else if (path === '/list-100') {
    document.title = "List 100";
  }
  else if (path === '/contactme') {
    document.title = "Contact me";
  }
  else if (path === '/dateme') {
    document.title = "❤️❤️";
  }
  else {
    document.title = path;
  }
}