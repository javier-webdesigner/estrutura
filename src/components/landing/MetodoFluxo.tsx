import { motion } from "framer-motion";
import { Settings, TrendingUp, Rocket } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Estrutura",
    desc: "Processo comercial, atendimento, follow-up, rotina, funções e padrão.",
  },
  {
    icon: TrendingUp,
    title: "Lucro",
    desc: "Margem, precificação, previsibilidade e decisão por números.",
  },
  {
    icon: Rocket,
    title: "Escala",
    desc: "Crescer com base sólida, delegar e expandir sem caos.",
  },
];

const MetodoFluxo = () => (
  <section id="metodo" className="py-20 md:py-28 bg-secondary">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Método FLUXO:{" "}
          <span className="text-primary">Estrutura → Lucro → Escala</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="card-premium text-center"
          >
            <Icon className="mx-auto mb-4 text-primary" size={32} strokeWidth={1.5} />
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-secondary-foreground font-body text-[0.9375rem] md:text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-muted-foreground font-body text-[0.9375rem] md:text-sm max-w-2xl leading-relaxed">
        A prioridade é <span className="text-foreground font-semibold">Estrutura</span> — porque ela destrava o Lucro e sustenta a Escala.
      </p>
    </div>
  </section>
);

export default MetodoFluxo;
