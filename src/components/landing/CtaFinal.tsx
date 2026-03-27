import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5511934827402?text=Javier%2C%20acho%20que%20meu%20caos%20n%C3%A3o%20%C3%A9%20fase.%20Quero%20organizar%20meu%20comercial.%20Por%20onde%20come%C3%A7amos%3F";

const CtaFinal = () => (
  <section className="py-20 md:py-28">
    <div className="section-container text-center max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mx-auto mb-8" />

        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Pronto pra parar de{" "}
          <span className="text-primary">perder venda?</span>
        </h2>

        <p className="text-secondary-foreground font-body text-[1.0625rem] md:text-base leading-relaxed mb-3">
          O primeiro passo é um diagnóstico direto do seu comercial.
        </p>
        <p className="text-muted-foreground font-body text-xs tracking-wide mb-8">
          Sem compromisso. Sem enrolação.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition shadow-lg"
          style={{ boxShadow: "var(--gold-glow)" }}
        >
          QUERO PARAR DE PERDER VENDAS
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaFinal;
