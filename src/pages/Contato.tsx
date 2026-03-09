import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import aboutPark from "@/assets/about-park.jpg";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre o Eco Parque.";
const MAPS_URL = "https://maps.google.com/?q=Eco+Parque";

const Contato = () => {
  return (
    <>
      <PageHero title="Contato" subtitle="Entre em contato e venha nos visitar" image={aboutPark} />

      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Informações</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eco-green-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefone</h3>
                  <p className="text-muted-foreground">(00) 00000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eco-green-light flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">(00) 00000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eco-green-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Endereço</h3>
                  <p className="text-muted-foreground">Estrada do Eco Parque, Km 5 — Zona Rural</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eco-green-light flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">Segunda a Domingo: 7h às 18h</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-80 md:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.65!3d-23.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMz!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Eco Parque"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contato;
