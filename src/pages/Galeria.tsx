import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageHero from "@/components/PageHero";

import heroLake from "@/assets/hero-lake.jpg";
import aboutPark from "@/assets/about-park.jpg";
import fishingSport from "@/assets/fishing-sport.jpg";
import fishingPesque from "@/assets/fishing-pesque.jpg";
import gastroFood from "@/assets/gastro-food.jpg";
import eventsArea from "@/assets/events-area.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";

const images = [
  { src: heroLake, alt: "Lago principal", category: "Lagos" },
  { src: fishingSport, alt: "Pesca esportiva", category: "Pescaria" },
  { src: galleryNature, alt: "Natureza", category: "Natureza" },
  { src: galleryFamily, alt: "Família", category: "Visitantes" },
  { src: aboutPark, alt: "Estrutura do parque", category: "Estrutura" },
  { src: fishingPesque, alt: "Pesque e pague", category: "Pescaria" },
  { src: gastroFood, alt: "Gastronomia", category: "Estrutura" },
  { src: eventsArea, alt: "Área de eventos", category: "Estrutura" },
];

const categories = ["Todos", "Lagos", "Pescaria", "Natureza", "Visitantes", "Estrutura"];

const Galeria = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = filter === "Todos" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <PageHero title="Galeria" subtitle="Veja as belezas do nosso Eco Parque" image={galleryNature} />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-background"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Foto ampliada"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeria;
