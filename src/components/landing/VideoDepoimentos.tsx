import { motion } from "framer-motion";
import { Play } from "lucide-react";

/**
 * Replace the `src` values below with your actual reel/video embed URLs.
 * Supported formats:
 * - Instagram Reel embed: "https://www.instagram.com/reel/XXXXX/embed"
 * - YouTube Shorts embed: "https://www.youtube.com/embed/XXXXX"
 * - Direct video URL: use <video> tag instead
 */
const videos = [
  {
    id: 1,
    src: "https://www.instagram.com/reel/DVW3WAIkZOb/?igsh=MXBtMTZzbHV0MWkxZg==/embed", // paste your first video embed URL here
    label: "Depoimento — Rogeiro (Pet Shop)",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/oz6uaDlw09I", // paste your second video embed URL here
    label: "Depoimento — Luiz (Guincho)",
  },
];

const VideoDepoimentos = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Veja na prática:{" "}
          <span className="text-primary"> os resultados</span>
        </h2>
        <p className="text-muted-foreground font-body text-[0.9375rem] md:text-sm mb-12 max-w-xl leading-relaxed">
          Clientes contando, com as próprias palavras, o que mudou depois de estruturar.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
        {videos.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="w-full sm:w-[280px] md:w-[300px]"
          >
            <div className="relative rounded-lg overflow-hidden border border-border bg-card aspect-[9/16]">
              {v.src ? (
                <iframe
                  src={v.src}
                  title={v.label}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                /* Placeholder while no URL is set */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play size={24} className="text-primary ml-0.5" />
                  </div>
                  <p className="text-muted-foreground font-body text-xs text-center px-4">
                    Insira o link do vídeo
                  </p>
                </div>
              )}
            </div>
            <p className="text-muted-foreground font-body text-xs mt-3 text-center">
              {v.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoDepoimentos;
