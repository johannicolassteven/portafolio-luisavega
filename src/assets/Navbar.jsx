import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="bg-pink-100/100 backdrop-blur-md shadow-sm fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="text-4xl font-bold text-pink-700">
          MiPortafolio
        </a>

        {/* Menú principal (desktop) */}
        <ul className="hidden md:flex space-x-8  font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-pink-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-pink-700 text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú desplegable (móvil) */}
      {open && (
        <div className="navbar md:hidden border-t border-pink-200">
          <ul className="flex flex-col p4 space-y-6 text font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
