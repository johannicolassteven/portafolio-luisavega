export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-pink-200 text-pink-900 py-6 shadow-inner">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8">
        {/* Texto principal */}
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} MiPortafolio — Todos los derechos reservados
        </p>

        {/* Enlaces */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:correo@ejemplo.com"
            className="hover:text-pink-600 transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors duration-200"
          >
            WhatsApp
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors duration-200">
            Otro
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors duration-200">
            Otro
          </a>
        </div>
      </div>
    </footer>
  );
}
