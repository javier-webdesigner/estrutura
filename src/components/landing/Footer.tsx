const WA_LINK = "https://wa.me/5511934827402?text=Javier%2C%20acho%20que%20meu%20caos%20n%C3%A3o%20%C3%A9%20fase.%20Quero%20organizar%20meu%20comercial.%20Por%20onde%20come%C3%A7amos%3F";
const IG_LINK = "https://instagram.com/javiermaita.o";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="section-container text-center">
      <p className="font-display text-lg font-bold text-foreground mb-4">
        Javier Maita — <span className="text-primary">Estrutura Comercial</span>
      </p>

      <div className="flex items-center justify-center gap-6 mb-6">
        <a
          href={IG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Instagram
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          WhatsApp
        </a>
      </div>

      <p className="text-xs text-muted-foreground font-body italic">
        "Processo não é fase. É sistema."
      </p>
    </div>
  </footer>
);

export default Footer;
