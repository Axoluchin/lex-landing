export type BranchIcon = 'building' | 'users' | 'briefcase' | 'shield' | 'scale' | 'document';

export interface Branch {
  name: string;
  description: string;
  icon: BranchIcon;
}

export const branches: Branch[] = [
  { name: 'Corporativo', description: 'Sociedades, asambleas, estatutos y estructura corporativa.', icon: 'building' },
  { name: 'Laboral', description: 'Relaciones de trabajo, seguridad social y conflictos colectivos.', icon: 'users' },
  { name: 'Mercantil', description: 'Juicios mercantiles, contratos comerciales y cobranza.', icon: 'briefcase' },
  { name: 'Penal', description: 'Defensa de personas físicas y morales, y compliance penal.', icon: 'shield' },
  { name: 'Civil', description: 'Juicios civiles y protección de su patrimonio.', icon: 'scale' },
  { name: 'Fiscal-Administrativo', description: 'Juicio contencioso, amparo, auditorías e inspecciones.', icon: 'document' },
];
