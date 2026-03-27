import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const yes = [
  "Você já tem demanda, mas perde venda no caminho",
  "Você vive apagando incêndio e chama isso de 'fase'",
  "Quer previsibilidade antes de investir mais em anúncio",
  "Você já vende, mas não tem previsibilidade",
];

const no = [
  "Você quer atalho ou fórmula pronta",
  "Você não quer padronizar e cobrar execução",
  "Você acha que tráfego resolve processo",
];

const ParaQuem = () => (
  <section id="para-quem" className="py-20 md:py-28 bg-secondary">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="gold-line mb-6" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            É pra você se…
          </h2>
          <ul className="space-y-4">
            {yes.map((t) => (
              <li key={t} className="flex items-start gap-3 font-body text-secondary-foreground text-[1.0625rem] md:text-base leading-relaxed">
                <Check size={18} className="mt-0.5 text-primary flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-12 h-0.5 bg-muted-foreground/30 mb-6" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-muted-foreground mb-8">
            Não é pra você se…
          </h2>
          <ul className="space-y-4">
            {no.map((t) => (
              <li key={t} className="flex items-start gap-3 font-body text-muted-foreground text-[1.0625rem] md:text-base leading-relaxed">
                <X size={18} className="mt-0.5 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ParaQuem;
