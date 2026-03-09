import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fish, UtensilsCrossed, PartyPopper, Camera, TreePine, Users } from "lucide-react";
import { MessageCircle } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

import heroLake from "@/assets/hero-lake.jpg";
import aboutPark from "@/assets/about-park.jpg";
import fishingSport from "@/assets/fishing-sport.jpg";
import gastroFood from "@/assets/gastro-food.jpg";
import eventsArea from "@/assets/events-area.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma visita ao Eco Parque.";

const carouselImages = [
  { src: heroLake, alt: "Lago do Eco Parque" },
  { src: aboutPark, alt: "Vista aérea do parque" },
  { src: galleryNature, alt: "Natureza exuberante" },
  { src: fishingSport, alt: "Pesca esportiva" },
];

const previews = [
  { icon: Fish, title: "Pesca", desc: "Esportiva e pesque e pague", path: "/pesca", image: fishingSport },
  { icon: UtensilsCrossed, title: "Gastronomia", desc: "Sabores regionais e peixes frescos", path: "/gastronomia", image: gastroFood },
  { icon: PartyPopper, title: "Eventos", desc: "Aniversários e confraternizações", path: "/eventos", image: eventsArea },
  { icon: Camera, title: "Galeria", desc: "Fotos do nosso paraíso", path: "/galeria", image: galleryNature },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <img src={heroLake} alt="Eco Parque" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-eco-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6"
          >
            Eco Parque – Natureza, pesca e lazer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl mx-auto"
          >
            Um lugar perfeito para relaxar, pescar e aproveitar com a família.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contato"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Agendar Visita
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-background text-background rounded-lg font-medium hover:bg-background/10 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você encontra aqui
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubra tudo o que o Eco Parque tem a oferecer para você e sua família.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: Fish, title: "Pesca", desc: "Lagos com diversas espécies para pesca esportiva e recreativa." },
            { icon: TreePine, title: "Natureza", desc: "Trilhas, áreas verdes e contato direto com a natureza." },
            { icon: UtensilsCrossed, title: "Gastronomia", desc: "Restaurante com pratos regionais e peixes frescos." },
            { icon: PartyPopper, title: "Eventos", desc: "Espaços para festas, confraternizações e encontros." },
            { icon: Users, title: "Família", desc: "Ambiente seguro e acolhedor para toda a família." },
            { icon: Camera, title: "Momentos", desc: "Cenários incríveis para fotos e memórias inesquecíveis." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Carousel */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            Conheça o Eco Parque
          </h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* Section Previews */}
      <section className="section-padding bg-eco-cream">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Explore nossas áreas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previews.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={p.path}
                  className="group block relative rounded-xl overflow-hidden h-64"
                >
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-eco-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <p.icon className="w-5 h-5 text-background" />
                      <h3 className="font-display text-xl font-bold text-background">{p.title}</h3>
                    </div>
                    <p className="text-sm text-background/80">{p.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
