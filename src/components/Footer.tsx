import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre o Eco Parque.";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">🌿 Eco Parque</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Um refúgio em meio à natureza para toda a família. Pesca, gastronomia e lazer em um só lugar.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navegação</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Sobre", path: "/sobre" },
                { label: "Pesca", path: "/pesca" },
                { label: "Gastronomia", path: "/gastronomia" },
                { label: "Eventos", path: "/eventos" },
                { label: "Galeria", path: "/galeria" },
                { label: "Contato", path: "/contato" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Estrada do Eco Parque, Km 5 — Zona Rural</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(00) 00000-0000</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Seg a Dom: 7h às 18h</span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-background hover:opacity-80 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-background/20 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Eco Parque. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
