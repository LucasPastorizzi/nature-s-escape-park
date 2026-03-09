import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ImageCarousel from "@/components/ImageCarousel";
import fishingSport from "@/assets/fishing-sport.jpg";
import fishingPesque from "@/assets/fishing-pesque.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import heroLake from "@/assets/hero-lake.jpg";

const Pesca = () => {
  const carouselImages = [
    { src: fishingSport, alt: "Pesca esportiva" },
    { src: fishingPesque, alt: "Pesque e pague" },
    { src: galleryFamily, alt: "Família pescando" },
    { src: heroLake, alt: "Lago" },
  ];

  return (
    <>
      <PageHero title="Pesca" subtitle="Esportiva e recreativa em lagos naturais" image={fishingSport} />

      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">🎣 Pesca Esportiva</h2>
            <p className="text-primary font-medium mb-4">Captura e soltura</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nossos lagos são povoados com grandes espécies como tambaqui, pacu, pintado e tilápia. 
              Praticamos a pesca esportiva sustentável com captura e soltura, garantindo a preservação das espécies.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {["Prática sustentável", "Captura e soltura", "Grandes espécies", "Lagos naturais preservados"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={fishingSport}
            alt="Pesca Esportiva"
            className="rounded-xl w-full h-80 object-cover"
          />
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={fishingPesque}
            alt="Pesque e Pague"
            className="rounded-xl w-full h-80 object-cover order-2 md:order-1"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">🐟 Pesque e Pague</h2>
            <p className="text-primary font-medium mb-4">Diversão garantida</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ideal para quem quer pescar e levar o peixe para casa! Pagamento por quilo com espécies variadas. 
              Perfeito para um dia em família com muita diversão.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {["Pesca recreativa para todos", "Pagamento por kg pescado", "Espécies variadas", "Diversão para toda a família"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
            Momentos de Pesca
          </h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
    </>
  );
};

export default Pesca;
