export interface ServiceGroup {
  id: string;
  title: string;
  objective?: string;
  items: string[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'juridica',
    title: 'Representación jurídica',
    objective: 'Ejercicio de acciones judiciales a favor del cliente o defensa legal contra acciones de terceros.',
    items: [
      'Asistencia penal en general.',
      'Defensa penal para procedimiento especial a personas morales.',
      'Defensa penal en fuero castrense.',
      'Estrategia en compliance para evitar la detonación de delitos fiscales y/o delincuencia organizada.',
      'Derecho administrativo disciplinario para faltas administrativas graves o no graves cometidas por servidores públicos.',
      'Defensa en exámenes de confianza de elementos policiales o militares.',
      'Juicio contencioso administrativo.',
      'Juicio de amparo.',
      'Juicios mercantiles.',
      'Juicios civiles.',
      'Juicios laborales.',
      'Asistencia laboral y de seguridad social en general.',
      'Conflictos colectivos del trabajo.',
      'Inspecciones y auditorías realizadas por autoridades administrativas y fiscalizadoras.',
    ],
  },
  {
    id: 'corporativo',
    title: 'Corporativo',
    items: [
      'Constitución de sociedades.',
      'Actas de asambleas y gestión de protocolización ante fedatario público.',
      'Libros de sociedades (socios, asambleas…).',
      'Títulos accionarios.',
      'Regularización de sociedades.',
      'Determinación de estatutos y estructura corporativa.',
    ],
  },
];
