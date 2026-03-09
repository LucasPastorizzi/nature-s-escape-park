import { motion } from "framer-motion";
import { Cake, Users, Building2, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import ImageCarousel from "@/components/ImageCarousel";
import eventsArea from "@/assets/events-area.jpg";
import aboutPark from "@/assets/about-park.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";

const eventTypes = [
  { icon: Cake, title: "Aniversários", desc: "Festas de aniversário em meio à natureza com estrutura completa." },
  { icon: Users, title: "Confraternizações", desc: "Encontros de amigos e colegas com churrasco e pesca." },
  { icon: Building2, title: "Eventos Corporativos", desc: "Team building e eventos empresariais ao ar livre." },
  { icon: Heart, title: "Encontros Familiares", desc: "Reuniões familiares com lazer e diversão para todos." },
];

const Eventos = () => {
  const carouselImages = [
    { src: eventsArea, alt: "Área de eventos" },
    { src: aboutPark, alt: "Estrutura do parque" },
    { src: galleryNature, alt: "Natureza" },
  ];

  return (
    <>
      <PageHero title="Eventos" subtitle="Celebre momentos especiais na natureza" image={eventsArea} />

      <section className="section-padding">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tipos de Eventos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Temos estrutura para diversos tipos de eventos ao ar livre.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {eventTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-eco-green-light flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">Nossa Estrutura</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Quiosques, áreas ao ar livre, mesas e toda a infraestrutura para seu evento.
          </p>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
    </>
  );
};

export default Eventos;
