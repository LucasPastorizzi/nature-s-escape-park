import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ImageCarousel from "@/components/ImageCarousel";
import gastroFood from "@/assets/gastro-food.jpg";
import eventsArea from "@/assets/events-area.jpg";
import aboutPark from "@/assets/about-park.jpg";

const Gastronomia = () => {
  const carouselImages = [
    { src: gastroFood, alt: "Prato de peixe" },
    { src: eventsArea, alt: "Área de refeições" },
    { src: aboutPark, alt: "Ambiente do parque" },
  ];

  return (
    <>
      <PageHero title="Gastronomia" subtitle="Sabores da natureza na sua mesa" image={gastroFood} />

      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">🍽 Nosso Restaurante</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nosso restaurante serve o melhor da culinária regional, com destaque para pratos à base de peixes 
              frescos pescados nos nossos lagos. Comida caseira feita com carinho e ingredientes selecionados.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🐟", label: "Pratos com peixe fresco" },
                { emoji: "🍚", label: "Comida caseira" },
                { emoji: "🥗", label: "Pratos regionais" },
                { emoji: "👨‍👩‍👧‍👦", label: "Ambiente familiar" },
              ].map((item, i) => (
                <div key={i} className="bg-secondary rounded-lg p-4 text-center">
                  <span className="text-2xl">{item.emoji}</span>
                  <p className="text-sm text-foreground mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={gastroFood}
            alt="Gastronomia"
            className="rounded-xl w-full h-80 object-cover"
          />
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
            Sabores do Eco Parque
          </h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
    </>
  );
};

export default Gastronomia;
