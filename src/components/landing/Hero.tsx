import { motion } from "framer-motion";
import fotoJavier from "@/assets/foto-perfil.png";

const WA_LINK = "https://wa.me/5511934827402?text=Javier%2C%20acho%20que%20meu%20caos%20n%C3%A3o%20%C3%A9%20fase.%20Quero%20organizar%20meu%20comercial.%20Por%20onde%20come%C3%A7amos%3F";

const pains = [
  "Lead chega e ninguém responde rápido",
  "Sem follow-up, a venda morre no silêncio",
  "Tudo depende do dono",
];

const Hero = () => (
  <section
    className="relative min-h-screen flex flex-col overflow-hidden"
    style={{ background: "var(--hero-gradient)" }}
  >
    {/* Mobile: Photo as hero background, text overlaid at bottom */}
    <div className="block md:hidden relative flex-1 min-h-screen">
      {/* Photo */}
      <div className="absolute inset-0 flex justify-center">
        <img
          src={fotoJavier}
          alt="Javier Maita — Consultor de Estrutura Comercial"
          className="w-full h-[80%] object-cover object-top"
          style={{ objectPosition: "center 10%" }}
        />
        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(220 40% 5% / 0.15) 0%, hsl(220 40% 5% / 0.3) 35%, hsl(220 40% 5% / 0.85) 60%, hsl(220 35% 7%) 80%)",
          }}
        />
      </div>

      {/* Text content pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-6 pb-10 pt-[38vh]"
      >
        <h1 className="font-display text-[2.25rem] font-bold leading-[1.15] text-foreground mb-4">
          Isso não é uma fase.{" "}
          <span className="text-primary">É falta de estrutura.</span>
        </h1>

        <p className="text-[1.0625rem] text-secondary-foreground mb-6 font-body leading-relaxed">
          Processo, funil, atendimento e follow-up organizados para parar de perder vendas.
        </p>


          <ul className="space-y-3 mb-6">
            {pains.map((p) => (
              <li key={p} className="flex items-start gap-3 text-secondary-foreground font-body text-[1.0625rem] md:text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <p className="text-primary font-display text-lg italic mb-4">
            "Quando você chama isso de 'fase', você normaliza a perda."
          </p>

          
        <p className="text-xs text-muted-foreground mb-4 font-body tracking-wide">
          Provas no Instagram. Diagnóstico no WhatsApp.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition shadow-lg w-full justify-center"
          style={{ boxShadow: "var(--gold-glow)" }}
        >
          FALAR COM JAVIER AGORA
        </a>
      </motion.div>
    </div>

    {/* Desktop: Side by side layout */}
    <div className="hidden md:flex items-center flex-1 min-h-screen">
      <div className="section-container py-32 relative z-10 w-full">
        <div className="flex items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl flex-1"
          >
            <div className="gold-line mb-8" />

            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Isso não é uma fase.{" "}
              <span className="text-primary">É falta de estrutura.</span>
            </h1>

            <p className="text-xl text-secondary-foreground mb-2 font-body leading-relaxed">
              E deixa eu ser direto:{" "}
              <strong className="text-foreground">O problema não é marketing. É estrutura.</strong>
            </p>
            <p className="text-base text-muted-foreground mb-8 font-body leading-relaxed">
              Processo, funil, atendimento e follow-up organizados para parar de perder vendas e criar previsibilidade.
            </p>

            <ul className="space-y-3 mb-6">
              {pains.map((p) => (
                <li key={p} className="flex items-start gap-3 text-secondary-foreground font-body text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <p className="text-primary font-display text-lg italic mb-4">
              "Quando você chama isso de 'fase', você normaliza a perda."
            </p>

            <p className="text-xs text-muted-foreground mb-8 font-body tracking-wide">
              Provas no Instagram. Diagnóstico no WhatsApp.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:brightness-110 transition shadow-lg"
              style={{ boxShadow: "var(--gold-glow)" }}
            >
              FALAR COM JAVIER AGORA
            </a>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-[340px] lg:w-[400px] h-[460px] lg:h-[540px]">
              <img
                src={fotoJavier}
                alt="Javier Maita"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom fade to blend seamlessly with background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, hsl(220 35% 7%) 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
