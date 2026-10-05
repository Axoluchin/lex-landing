export interface ProcessStep {
  title: string;
  objective: string;
  scope: string[];
  deliverable?: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Diagnóstico ejecutivo de riesgos',
    objective: 'Identificar contingencias prioritarias.',
    scope: [
      'Revisión general corporativa.',
      'Análisis preliminar.',
      'Validación de riesgos inminentes.',
      'Revisión contractual y acreditación de operaciones.',
    ],
    deliverable: 'Reporte ejecutivo con mapa de riesgos.',
  },
  {
    title: 'Determinación de estrategia',
    objective: 'Análisis exhaustivo.',
    scope: [
      'Determinación de estructura societaria.',
      'Determinación de holding y vinculación jurídica entre diversos entes.',
      'Estrategia de cumplimiento de obligaciones patronales.',
      'Estrategia de cumplimiento de obligaciones fiscales.',
      'Procesos operativos que garanticen el acreditamiento de operaciones.',
    ],
    deliverable: 'Informe técnico integral.',
  },
  {
    title: 'Implementación',
    objective: 'Regularización y blindaje.',
    scope: [
      'Reestructura corporativa.',
      'Regularización fiscal.',
      'Regularización contable.',
      'Implementación de protocolos que brinden seguridad jurídica en cada una de las operaciones.',
    ],
  },
  {
    title: 'Operación continua',
    objective: 'Prevención de contingencias y acompañamiento en la toma de decisiones.',
    scope: [],
  },
];
