import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import aboutPark from "@/assets/about-park.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";
import heroLake from "@/assets/hero-lake.jpg";

const About = () => {
  return (
    <>
      <PageHero title="Sobre o Eco Parque" subtitle="Conheça nossa história e missão" image={aboutPark} />

      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Nossa História</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              O Eco Parque nasceu do amor pela natureza e pela pesca. Há mais de uma década, transformamos uma área rural 
              em um verdadeiro refúgio ecológico, onde famílias podem se reconectar com o meio ambiente e viver momentos 
              inesquecíveis ao ar livre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossos lagos são cuidadosamente mantidos, com diversas espécies de peixes criados de forma sustentável. 
              Oferecemos uma experiência completa de lazer, gastronomia e contato com a natureza.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={galleryNature}
            alt="Natureza do Eco Parque"
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
            src={heroLake}
            alt="Lago do Eco Parque"
            className="rounded-xl w-full h-80 object-cover order-2 md:order-1"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Nossa Missão</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Proporcionar uma experiência única de lazer, pesca e gastronomia em meio à natureza, 
              promovendo o turismo sustentável e o bem-estar de nossos visitantes.
            </p>
            <ul className="space-y-3">
              {["Preservação ambiental", "Pesca sustentável", "Lazer para toda a família", "Gastronomia regional autêntica"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
