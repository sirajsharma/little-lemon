const LINKS = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/menu", text: "Menu" },
  { href: "/reservations", text: "Reservations" },
  { href: "/order-online", text: "Order Online" },
  { href: "/login", text: "Login" },
];

export default function Nav() {
  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
