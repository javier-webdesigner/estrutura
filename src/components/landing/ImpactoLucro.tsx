import { motion } from "framer-motion";

const bullets = [
  "Conversão abaixo do que já seria possível",
  "Desconto pra fechar no desespero",
  "Retrabalho e tempo do dono drenados",
  "Caixa inconstante e decisão no 'feeling'",
];

const ImpactoLucro = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
          Falta de estrutura{" "}
          <span className="text-primary">custa lucro todos os dias.</span>
        </h2>

        <ul className="space-y-4 mb-10 max-w-xl">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-secondary-foreground font-body text-[1.0625rem] md:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <p className="font-display text-lg text-foreground mb-8">
          Lucro não é faturamento.{" "}
          <span className="text-primary">Lucro é controle.</span>
        </p>

        <a
          href="https://wa.me/5511934827402?text=Javier%2C%20quero%20lucrar%20mais.%20Por%20onde%20come%C3%A7amos%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition shadow-lg"
          style={{ boxShadow: "var(--gold-glow)" }}
        >
          QUERO LUCRAR MAIS AGORA
        </a>
      </motion.div>
    </div>
  </section>
);

export default ImpactoLucro;
