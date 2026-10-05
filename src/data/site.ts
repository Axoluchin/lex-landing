export interface NavLink {
  label: string;
  href: `#${string}`;
}

// PLACEHOLDER: los datos marcados como tales no vienen en el catálogo; reemplázalos por los reales.
export const site = {
  name: 'Fiscal Lex Soluciones',
  legalName: 'FISCAL LEX SOLUCIONES, S.C.',
  shortName: 'Fiscal Lex',
  url: 'https://www.fiscallex.com.mx', // PLACEHOLDER
  title: 'Fiscal Lex Soluciones | Despacho jurídico corporativo, fiscal y penal',
  description:
    'Acompañamiento jurídico integral para grupos empresariales: gobierno corporativo, blindaje laboral, soporte legal fiscal, representación penal, mercantil y civil en México.',
  address: {
    street: 'Avenida de las Fuentes 35, Interior 1D',
    neighborhood: 'Colonia Lomas de Tecamachalco',
    city: 'Naucalpan de Juárez',
    state: 'Estado de México',
    postalCode: '53950',
    country: 'MX',
  },
  phone: { display: '+52 (56) 5856 9785', href: 'tel:+525658569785' },
  email: 'contacto@fiscallex.com.mx', // PLACEHOLDER
  whatsapp: 'https://wa.me/525658569785',
  hours: 'Lun – Vie, 9:00 a 18:00', // PLACEHOLDER
};

// Interruptores para ocultar datos en la página sin borrarlos del proyecto.
export const show = {
  email: false,
  hours: false,
  legal: false, // columna "Legal" del footer
};

export const fullAddress = `${site.address.street}, ${site.address.neighborhood}, ${site.address.city}, ${site.address.state}, C.P. ${site.address.postalCode}`;

export const maps = {
  embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7525.329806570021!2d-99.2282512!3d19.4268793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203d975f94941%3A0x72fd03f3afdbff2!2sFiscal%20Lex%20Soluciones%20S.C!5e0!3m2!1ses-419!2smx!4v1791228084976!5m2!1ses-419!2smx",
};

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Representación', href: '#representacion' },
  { label: 'Contacto', href: '#contacto' },
];
