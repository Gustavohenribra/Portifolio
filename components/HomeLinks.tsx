export default function HomeLinks() {
  const links = [
    { href: "mailto:gustavohenriquebm7@outlook.com?subject=Ola Gustavo!", title: "Email" },
    { href: "https://github.com/Gustavohenribra", title: "Github" },
    { href: "https://www.instagram.com/gustavo_henr7/", title: "Instagram" },
    { href: "https://www.linkedin.com/in/gustavo-motta-bb9112273/", title: "LinkedIn" },
  ];
  return (
    <div className="mt-3 flex">
      <div className="space-x-2 text-sm ">
        {links.map((link) => {
          return (
            <a key={link.title} className="text-sm underline  bg-gradient-to-r decoration-indigo-800/30 ease-in-out hover:opacity-50" href={link.href}>
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
