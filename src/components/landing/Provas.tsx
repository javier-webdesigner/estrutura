import { motion } from "framer-motion";

const IG_LINK = "https://instagram.com/javiermaita.o";

const bullets = [
  "Clareza do que está travando",
  "Processo comercial com padrão",
  "Rotina de follow-up que recupera venda perdida",
  "Menos dependência do dono",
];

const Provas = () => (
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
          O que você ganha quando para de{" "}
          <span className="text-primary">chamar caos de fase</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          <div className="flex-1">
            <ul className="space-y-4 mb-8 max-w-xl">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-secondary-foreground font-body text-[1.0625rem] md:text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Credibility block */}
            <div className="mb-8 max-w-xl space-y-2">
              <p className="text-secondary-foreground font-body text-[0.9375rem] md:text-sm leading-relaxed">
                Trabalho com negócios locais que já vendem, mas perdem conversão por falta de processo.
              </p>
              <p className="text-secondary-foreground font-body text-[0.9375rem] md:text-sm leading-relaxed">
                Meu foco é estruturar processo, atendimento, funil e follow-up para parar de perder vendas no caminho.
              </p>
            </div>

            <div className="card-premium max-w-md">
              <p className="text-secondary-foreground font-body text-[0.9375rem] md:text-sm mb-4 leading-relaxed">
                Cases, provas e conteúdos estão no Instagram.
              </p>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-card transition"
              >
                Ver Instagram
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  </section>
);

export default Provas;
