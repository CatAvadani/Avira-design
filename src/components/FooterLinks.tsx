interface FooterLinksProps {
  title: string;
  links: string[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h1 className=' font-bold mb-4'>{title}</h1>
      <ul className=' flex flex-col gap-2 text-white/70'>
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </div>
  );
}
