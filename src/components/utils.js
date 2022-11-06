const createHyperlink = (link, content) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {content}
    </a>
  );
};

export default createHyperlink;