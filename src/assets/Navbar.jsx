import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },

    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="nav fixed  w-full top-0 left-0 z-10 ">
      <div className="navbar bg-pink-100/100  px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="text-4xl font-bold text-pink-700">
          Mi Portafolio
        </a>

        {/* Menú principal (desktop) */}
        <ul className="main hidden md:flex font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-pink-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className=" md:hidden text-pink-700  menu-toggle"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú desplegable (móvil) */}
     <div
  className={`accordion-container navbar bg-pink-100/100 md:hidden ${open ? "open" : ""}`}
  aria-hidden={!open}
>
  <ul className="flex flex-col p-4 space-y-6 font-medium">
    {links.map((link) => (
      <li key={link.name}>
        <a href={link.href} onClick={() => setOpen(false)}>
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>
    </nav>
  );
}