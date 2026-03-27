import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Isso serve pra qualquer negócio local?",
    a: "Sim, principalmente negócios com atendimento e conversão diária.",
  },
  {
    q: "Preciso anunciar pra isso funcionar?",
    a: "Anúncio amplifica. Estrutura sustenta. Sem estrutura, você compra mais caos.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Depende do nível de desorganização e da execução. O foco é previsibilidade.",
  },
  {
    q: "Você faz marketing?",
    a: "Eu faço estrutura comercial. Marketing sem processo vira vazamento.",
  },
];

const Faq = () => (
  <section id="faq" className="py-20 md:py-28 bg-secondary">
    <div className="section-container max-w-2xl">
      {/* Signature repetition before FAQ */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-lg md:text-xl text-foreground mb-12 border-l-2 border-primary pl-5"
      >
        O problema não é marketing.{" "}
        <span className="text-primary">É estrutura.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card-premium border-border">
              <AccordionTrigger className="text-foreground font-body text-left text-[0.9375rem] md:text-sm font-semibold hover:no-underline px-0">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-[0.9375rem] md:text-sm pt-2 leading-relaxed">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default Faq;
