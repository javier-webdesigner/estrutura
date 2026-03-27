import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bruna",
    role: "Dona de Clinica",
    text: "Antes eu achava que precisava de mais marketing. Depois que organizamos o processo, percebi que eu já tinha demanda — só perdia no caminho.",
  },
  {
    name: "Rafael",
    role: "Dono de Pet Shop",
    text: "O follow-up mudou tudo. A gente respondia quando dava, e perdia cliente sem perceber. Agora tem rotina e a conversão subiu.",
  },
  {
    name: "Carlos",
    role: "Dono de Fulineria",
    text: "Eu vivia apagando incêndio. Depois da estruturação, a equipe sabe o que fazer sem depender de mim o tempo todo.",
  },
];

const Depoimentos = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Quem já <span className="text-primary">organizou o comercial</span>
        </h2>
        <p className="text-muted-foreground font-body text-[0.9375rem] md:text-sm mb-12 max-w-xl leading-relaxed">
          Relatos de quem parou de chamar o caos de fase e estruturou o processo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-premium flex flex-col"
          >
            <Quote size={20} className="text-primary/40 mb-4" strokeWidth={1.5} />
            <p className="text-secondary-foreground font-body text-[0.9375rem] md:text-sm leading-relaxed flex-1 mb-6">
              "{t.text}"
            </p>
            <div className="border-t border-border pt-4">
              <p className="text-foreground font-body text-sm font-semibold">{t.name}</p>
              <p className="text-muted-foreground font-body text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Depoimentos;
