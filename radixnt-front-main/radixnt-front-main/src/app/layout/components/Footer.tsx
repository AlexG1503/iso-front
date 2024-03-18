import CustomTextField from "../../../components/CustomTextField";
import CustomButton from "../../../components/CustomButton";
import wppImage from "./resources/whatsapp_widget.svg";

const categories = [
  "Camisetas",
  "Pantalones",
  "Hoodies",
  "Conjuntos",
  "Gorras",
  "Medias",
  "Acccesorios",
  "Descuentos",
];

const customerService = [
  "Quiero Comprar al por Mayor",
  "Política de Privacidad de Datos",
  "Políticas de Envío",
  "Políticas de Devoluciones",
  "Contáctenos",
];

const information = [
  "Ventas en la Web las 24 horas del día.",
  "No manejamos tiendas físicas.",
  "Cualquier petición, queja o reclamo comuníquese por nuestros canales de atención.",
];

const Footer = () => {
  return (
    <div className="bg-secondary bg-opacity-30 w-full grid grid-cols-7 p-5 gap-5 mt-10">
      <div className="flex flex-col gap-5">
        <div className="font-semibold">Categrías</div>
        <div>
          {categories.map((category, i) => (
            <div key={i} className="font-normal">
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold">Servicio al cliente</div>
        <div>
          {customerService.map((service, i) => (
            <div key={i} className="font-normal">
              {service}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 col-span-2">
        <div className="font-semibold">Información</div>
        <div>
          {information.map((info, i) => (
            <div key={i} className="font-normal">
              {info}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 col-span-2">
        <div className="font-semibold">News Letter</div>
        <div className="flex flex-col gap-4">
          <div>
            ¡Haz parte de nuestra comunidad Radixnt! *Suscríbete y recibirás el
            10% en tu primera compra. *Válido sólo para Colombia.
          </div>
          <div className="flex gap-3">
            <CustomTextField label="Ingresa tu correo" defaultValue="" />
            <CustomButton label="Enviar" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src={wppImage} alt="wpp" />
      </div>
    </div>
  );
};

export default Footer;
