import { useState } from "react";
import { Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/5511934827402?text=Javier%2C%20acho%20que%20meu%20caos%20n%C3%A3o%20%C3%A9%20fase.%20Quero%20organizar%20meu%20comercial.%20Por%20onde%20come%C3%A7amos%3F";

const navItems = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Método", href: "#metodo" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem", href: "#para-quem" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-foreground">
          Javier Maita
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
          >
            Falar no WhatsApp
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold mt-2"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
