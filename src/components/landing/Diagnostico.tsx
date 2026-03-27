import { motion } from "framer-motion";

const cards = [
  "Sem etapas claras, não existe funil. Existe tentativa.",
  "Sem padrão de atendimento, cada cliente vive uma experiência.",
  "Sem follow-up, você gera lead e deixa ele escapar.",
  "Sem rotina, a equipe reage. Não executa.",
];

const Diagnostico = () => (
  <section id="diagnostico" className="py-20 md:py-28 bg-secondary">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          O caos não é do mercado.{" "}
          <span className="text-primary">É do seu processo.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-premium"
          >
            <p className="text-secondary-foreground font-body leading-relaxed text-[1.0625rem] md:text-base">{text}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-foreground font-display text-lg md:text-xl max-w-2xl leading-relaxed">
        Se o seu processo é fraco, você não precisa de mais marketing.{" "}
        <span className="text-primary">Você precisa de estrutura.</span>
      </p>
    </div>
  </section>
);

export default Diagnostico;
