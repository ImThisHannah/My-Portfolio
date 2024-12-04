function Footer() {

  const icons = [
    {
      name: "ImThisHannah GitHub",
      link: "https://github.com/ImThisHannah"
    },
    
    {
      name: "stack-overflow",
      link: "https://stackoverflow.com/users/26959643/hannah-myers"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
