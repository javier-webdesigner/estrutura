import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5511934827402?text=Javier%2C%20acho%20que%20meu%20caos%20n%C3%A3o%20%C3%A9%20fase.%20Quero%20organizar%20meu%20comercial.%20Por%20onde%20come%C3%A7amos%3F";

const steps = [
  { num: "01", text: "Diagnóstico do comercial e gargalos de perda" },
  { num: "02", text: "Organização do processo: etapas, padrão, rotina e follow-up" },
  { num: "03", text: "Acompanhamento e ajustes pra estabilizar conversão e previsibilidade" },
];

const ComoFunciona = () => (
  <section id="como-funciona" className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Como funciona{" "}
          <span className="text-muted-foreground text-2xl md:text-3xl">(sem mágica e sem teoria)</span>
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-14 mb-12">
        <div className="space-y-6 max-w-2xl flex-1">
          {steps.map(({ num, text }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-start gap-5"
            >
              <span className="font-display text-2xl font-bold text-primary">{num}</span>
              <p className="text-secondary-foreground font-body pt-1 text-[1.0625rem] md:text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

      </div>

      <p className="text-foreground font-display text-lg mb-8">
        Marketing amplifica. <span className="text-primary">Estrutura sustenta.</span>
      </p>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition shadow-lg"
        style={{ boxShadow: "var(--gold-glow)" }}
      >
        QUERO DIAGNÓSTICO AGORA
      </a>
    </div>
  </section>
);

export default ComoFunciona;
