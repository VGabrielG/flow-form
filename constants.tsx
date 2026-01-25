
import { FlowformModel, CaseStudy, ScalabilityData } from './types';

export interface ScienceFact {
  label: string;
  value: string;
  pdf: string;
  page: string;
}

export const SCIENCE_STATS: Record<string, Record<string, ScienceFact[]>> = {
  en: {
    vitalization: [
      { label: 'Total Biomass Weight', value: '+32.5%', pdf: 'Transforming animal effluent into liquid fertilizer.pdf', page: '1' },
      { label: 'Root System Expansion', value: '+9.5%', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' },
      { label: 'Water Energy Vitality', value: 'High', pdf: 'Agricultural_Effluent_Brochure.pdf', page: '2' }
    ],
    industrial: [
      { label: 'Dissolved Oxygen (DO)', value: '0 to 6.3 ppm', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' },
      { label: 'Odor Neutralization', value: '2-4 Hours', pdf: 'Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
      { label: 'DQO / COD Reduction', value: '17%', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' }
    ],
    municipal: [
      { label: 'Phosphorus (P) Removal', value: '96%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Nitrogen (N) Removal', value: '92%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Ammonia (NH4) Reduction', value: '99.7%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' }
    ]
  },
  es: {
    vitalization: [
      { label: 'Peso de Biomasa Total', value: '+32.5%', pdf: 'Transforming animal effluent into liquid fertilizer.pdf', page: '1' },
      { label: 'Expansión Radicular', value: '+9.5%', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' },
      { label: 'Vitalidad Energética', value: 'Alta', pdf: 'Agricultural_Effluent_Brochure.pdf', page: '2' }
    ],
    industrial: [
      { label: 'Oxígeno Disuelto (OD)', value: '0 a 6.3 ppm', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' },
      { label: 'Neutralización de Olores', value: '2-4 Horas', pdf: 'Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
      { label: 'Reducción de DQO', value: '17%', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' }
    ],
    municipal: [
      { label: 'Remoción de Fósforo (P)', value: '96%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Remoción de Nitrógeno (N)', value: '92%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Reducción de Amoníaco (NH4)', value: '99.7%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' }
    ]
  }
};

export const MODELS_DATA: Record<string, Record<string, FlowformModel[]>> = {
  en: {
    vitalization: [
      {
        id: 'greenhouse',
        name: 'Greenhouse (Seedling & Vitality)',
        lpm: 7, lph: 420,
        material: 'PETG / Polished Resin',
        dimensions: '25 x 16 x 16 cm',
        primaryApplication: 'Horticulture & Root Growth',
        industries: ['Nurseries', 'Hydroponics', 'Precision Growth'],
        description: 'Compact vitalization system specialized for sensitive plant growth. Its rhythmic pulse breaks surface tension, making water "bio-available" for root uptake.',
        benefits: ['Stimulates 30%+ more root biomass', 'Eliminates biofilm in irrigation lines', 'Enhances nutrient bioavailability'],
        imageUrl: '/images/greenhouse.png',
        pumpHP: '0.25 HP',
        minLPM: 7,
        milestones: { time: '48 Hours', result: '3ppm DO', secondary: 'Surface Tension Reduction' },
        maintenance: 'Clean vessels seasonally.',
        durability: '10 years'
      },
      {
        id: 'glonn-vitalization',
        name: 'Glonn (Precision Irrigation)',
        lpm: 80, lph: 4800,
        material: 'High-Grade PETG',
        dimensions: '70 x 50 x 15 cm',
        primaryApplication: 'Mid-Scale Horticulture',
        industries: ['Orchards', 'Berry Farms', 'Large Greenhouses'],
        description: 'Mid-range unit for vitalizing irrigation water. Designed to handle clean water at higher volumes while maintaining the delicate lemniscate pulse.',
        benefits: ['Optimal for drip irrigation', 'Reduces calcium buildup', 'Enhances soil microbiology'],
        imageUrl: '/images/glonn.png',
        pumpHP: '1.0 HP',
        minLPM: 80,
        milestones: { time: '72 Hours', result: 'Enhanced Hydration', secondary: 'Microbiological stimulation' },
        maintenance: 'Annual vessel inspection.',
        durability: '15 years'
      }
    ],
    industrial: [
      {
        id: 'jarna-dairy',
        name: 'Jarna (Dairy Sludge)',
        lpm: 50, lph: 3000,
        material: 'Reinforced Fiberglass',
        dimensions: '60 x 45 x 12 cm',
        primaryApplication: 'Dairy Effluent Remediation',
        industries: ['Dairies', 'Pig Farms', 'Composting'],
        description: 'The agricultural workhorse. Specifically designed without vortex holes to handle high-viscosity dairy sludge without clogging.',
        benefits: ['Odor neutralization', 'Zero-clog design', 'Neutralizes H2S and Ammonia'],
        imageUrl: '/images/jarna.png',
        pumpHP: '0.75 HP',
        minLPM: 50,
        milestones: { time: '4 Hours', result: 'Odor Neutralization', secondary: 'Bacterial shift' },
        maintenance: 'Weekly filter cleaning.',
        durability: '25 years'
      },
      {
        id: 'vortex-industrial',
        name: 'Vortex (Process Waste)',
        lpm: 250, lph: 15000,
        material: 'Industrial Fiberglass',
        dimensions: '95 x 90 x 32 cm',
        primaryApplication: 'Abattoir & Winery Remediation',
        industries: ['Abattoirs', 'Wineries', 'Canneries'],
        description: 'Engineered for high organic load stabilization. Massive oxygen transfer for heavy waste.',
        benefits: ['1mg/L DO increase per unit', 'pH stabilization', 'Strips Ammonia and Sulfides'],
        imageUrl: '/images/vortex_industrial.png',
        pumpHP: '2.5 HP',
        minLPM: 250,
        milestones: { time: '14 Days', result: '6.3ppm DO saturation', secondary: 'Sludge reduction' },
        maintenance: 'Monthly structural check.',
        durability: '25 years'
      },
      {
        id: 'vb500-commercial',
        name: 'VB500 (Commercial Lagoon)',
        lpm: 500, lph: 30000,
        material: 'Structural Fiberglass',
        dimensions: '140 x 120 x 45 cm',
        primaryApplication: 'High-Volume Commercial Remediation',
        industries: ['Large Dairies', 'Lagunas', 'Factories'],
        description: 'The largest rhythmic remediator. Designed for commercial lagoons handling over 1 million liters.',
        benefits: ['30k LPH throughput', 'Prevents lagoon crusting', 'Industrial scale O2 transfer'],
        imageUrl: '/images/vb500.png',
        pumpHP: '5.0 HP',
        minLPM: 500,
        milestones: { time: '21 Days', result: 'Full Lagoon Stabilization', secondary: 'Crust elimination' },
        maintenance: 'Quarterly mechanical audit.',
        durability: '25+ years'
      }
    ],
    municipal: [
      {
        id: 'malmo-polish',
        name: 'Malmo (Urban Polishing)',
        lpm: 100, lph: 6000,
        material: 'Aesthetic Composite',
        dimensions: '80 x 65 x 18 cm',
        primaryApplication: 'Urban Parks & Water Polishing',
        industries: ['Municipal Parks', 'Institutions'],
        description: 'Focused on biological "generative" growth. Ideal for urban parks where biodiversity is key.',
        benefits: ['Generative plant growth', 'Eliminates mosquito zones', 'Aesthetic public value'],
        imageUrl: '/images/malmo_polish.png',
        pumpHP: '1.5 HP',
        minLPM: 100,
        milestones: { time: 'Ongoing', result: 'Pathogen-free water', secondary: 'Mosquito elimination' },
        maintenance: 'Surface cleaning as needed.',
        durability: '20 years'
      },
      {
        id: 'vortex-human',
        name: 'Vortex Municipal (PTAR)',
        lpm: 300, lph: 18000,
        material: 'Municipal Grade Fiberglass',
        dimensions: '95 x 90 x 32 cm',
        primaryApplication: 'Human Effluent Remediation',
        industries: ['Municipal SWTP', 'Housing'],
        description: 'Designed for large-scale sewage treatment. Strips methane and H2S naturally.',
        benefits: ['Natural pH elevation', 'Strips Methane instantly', 'Chemical-free polishing'],
        imageUrl: '/images/vortex_municipal.png',
        pumpHP: '3.0 HP',
        minLPM: 300,
        milestones: { time: '3 Weeks', result: 'BOD Reduction >70%', secondary: 'N/P stabilization' },
        maintenance: 'Monthly inspection.',
        durability: '25+ years'
      }
    ]
  },
  es: {
    vitalization: [
      {
        id: 'greenhouse',
        name: 'Modelo Greenhouse (Horticultura)',
        lpm: 7, lph: 420,
        material: 'PETG / Resina Pulida',
        dimensions: '25 x 16 x 16 cm',
        primaryApplication: 'Plantas y Crecimiento Radicular',
        industries: ['Viveros', 'Hidroponía', 'Crecimiento de Precisión'],
        description: 'Sistema compacto especializado en el crecimiento sensible de plantas. Su pulso rítmico rompe la tensión superficial.',
        benefits: ['Estimula +30% biomasa radicular', 'Elimina biofilm', 'Mejora absorción de nutrientes'],
        imageUrl: '/images/greenhouse.png',
        pumpHP: '0.25 HP',
        minLPM: 7,
        milestones: { time: '48 Horas', result: '3ppm OD', secondary: 'Reducción de Tensión' },
        maintenance: 'Limpieza estacional.',
        durability: '10 años'
      },
      {
        id: 'glonn-vitalization',
        name: 'Modelo Glonn (Riego Precisión)',
        lpm: 80, lph: 4800,
        material: 'PETG Alta Calidad',
        dimensions: '70 x 50 x 15 cm',
        primaryApplication: 'Horticultura Media',
        industries: ['Huertos', 'Frutillas', 'Invernaderos'],
        description: 'Unidad de rango medio para vitalizar agua de riego a mayores volúmenes.',
        benefits: ['Óptimo para goteo', 'Reduce calcio en boquillas', 'Mejora microbiología'],
        imageUrl: '/images/glonn.png',
        pumpHP: '1.0 HP',
        minLPM: 80,
        milestones: { time: '72 Horas', result: 'Hidratación Mejorada', secondary: 'Estimulación microbiológica' },
        maintenance: 'Inspección anual.',
        durability: '15 años'
      }
    ],
    industrial: [
      {
        id: 'jarna-dairy',
        name: 'Modelo Jarna (Lodos Lácteos)',
        lpm: 50, lph: 3000,
        material: 'Fibra de Vidrio Reforzada',
        dimensions: '60 x 45 x 12 cm',
        primaryApplication: 'Remediación Efluentes Lácteos',
        industries: ['Lecherías', 'Cerdos', 'Compost'],
        description: 'Motor agrícola diseñado para manejar lodos espesos sin obstruirse.',
        benefits: ['Neutraliza olores en horas', 'Diseño anti-obstrucción', 'Estabiliza fertilizante'],
        imageUrl: '/images/jarna.png',
        pumpHP: '0.75 HP',
        minLPM: 50,
        milestones: { time: '4 Horas', result: 'Neutralización Olor', secondary: 'Cambio biológico' },
        maintenance: 'Limpieza de filtro semanal.',
        durability: '25 años'
      },
      {
        id: 'vortex-industrial',
        name: 'Modelo Vortex (Desechos Industriales)',
        lpm: 250, lph: 15000,
        material: 'Fibra de Vidrio Industrial',
        dimensions: '95 x 90 x 32 cm',
        primaryApplication: 'Mataderos y Viñas',
        industries: ['Mataderos', 'Viñas', 'Procesadoras'],
        description: 'Estabilización de alta carga orgánica. Aumento masivo de oxígeno.',
        benefits: ['+1mg/L OD por unidad', 'Estabiliza pH', 'Extrae Amoníaco y Sulfatos'],
        imageUrl: '/images/vortex_industrial.png',
        pumpHP: '2.5 HP',
        minLPM: 250,
        milestones: { time: '14 Días', result: 'Saturación 6.3ppm OD', secondary: 'Reducción lodos' },
        maintenance: 'Mensual.',
        durability: '25 años'
      },
      {
        id: 'vb500-commercial',
        name: 'VB500 (Laguna Comercial)',
        lpm: 500, lph: 30000,
        material: 'Fibra de Vidrio Estructural',
        dimensions: '140 x 120 x 45 cm',
        primaryApplication: 'Remediación Alto Volumen',
        industries: ['Lecherías Grandes', 'Industria'],
        description: 'El remediador rítmico más grande para lagunas comerciales de alto volumen.',
        benefits: ['30k LPH capacidad', 'Previene costras', 'Oxigenación industrial'],
        imageUrl: '/images/vb500.png',
        pumpHP: '5.0 HP',
        minLPM: 500,
        milestones: { time: '21 Días', result: 'Estabilización Completa', secondary: 'Eliminación de costra' },
        maintenance: 'Trimestral.',
        durability: '25+ años'
      }
    ],
    municipal: [
      {
        id: 'malmo-polish',
        name: 'Modelo Malmo (Pulido Urbano)',
        lpm: 100, lph: 6000,
        material: 'Compuesto Estético',
        dimensions: '80 x 65 x 18 cm',
        primaryApplication: 'Parques y Pulido de Agua',
        industries: ['Parques', 'Zonas Públicas'],
        description: 'Fomenta biodiversidad y crecimiento generativo. Ideal para espacios públicos.',
        benefits: ['Crecimiento de flores', 'Sin mosquitos', 'Valor estético alto'],
        imageUrl: '/images/malmo_polish.png',
        pumpHP: '1.5 HP',
        minLPM: 100,
        milestones: { time: 'Continuo', result: 'Agua libre patógenos', secondary: 'Sin mosquitos' },
        maintenance: 'Limpieza superficial.',
        durability: '20 años'
      },
      {
        id: 'vortex-human',
        name: 'Modelo Vortex Municipal (PTAR)',
        lpm: 300, lph: 18000,
        material: 'Fibra de Vidrio Municipal',
        dimensions: '95 x 90 x 32 cm',
        primaryApplication: 'Remediación Efluentes Humanos',
        industries: ['PTAR', 'Sistemas Municipales'],
        description: 'Diseñado para plantas de tratamiento masivo. Eleva el pH naturalmente.',
        benefits: ['Eleva pH naturalmente', 'Extrae Metano/H2S', 'Pulido biológico'],
        imageUrl: '/images/vortex_municipal.png',
        pumpHP: '3.0 HP',
        minLPM: 300,
        milestones: { time: '3 Semanas', result: 'DBO >70%', secondary: 'Estabilización N/P' },
        maintenance: 'Inspección mensual.',
        durability: '25+ years'
      }
    ]
  }
};

export const CASE_STUDIES_DATA: Record<string, Record<string, CaseStudy[]>> = {
  en: {
    vitalization: [
      { subject: 'Forest Row Lettuce Study', volume: 'Nutrient Tank', setup: '1 Greenhouse Cascade', time: 'Full Season', result: '32.5% increase in total weight', link: '#' },
      { subject: 'Wheat Germination', volume: 'Laboratory', setup: 'Precision Cascade', time: '14 Days', result: '+9.5% Root Length', link: '#' },
    ],
    industrial: [
      { subject: 'Hohepa Dairy Farm', volume: '5,000 L', setup: 'Jarna Series', time: '4 Hours', result: 'Odor shift from pungent to sweet', link: '#' },
      { subject: 'Byron Bay Abattoir', volume: '4.3 Million L', setup: '21 Vortex Units', time: '6 Weeks', result: 'DO from 0ppm to 6.3ppm', link: '#' }
    ],
    municipal: [
      { subject: 'Vidaråsen (Norway)', volume: '200 p.e.', setup: 'Vortex & Malmo', time: '5 Years Op', result: '96% P & 92% N Removal', link: '#' },
      { subject: 'Soerendonk (Netherlands)', volume: '40,000 p.e.', setup: '810 Units (81 rows)', time: '4 Days RT', result: 'Pathogen elimination', link: '#' }
    ]
  },
  es: {
    vitalization: [
      { subject: 'Estudio Lechuga Forest Row', volume: 'Tanque Nutrientes', setup: '1 Cascada Greenhouse', time: 'Temporada', result: '32.5% aumento de peso total', link: '#' },
      { subject: 'Germinación de Trigo', volume: 'Laboratorio', setup: 'Cascada Precisión', time: '14 Días', result: '+9.5% largo de raíz', link: '#' }
    ],
    industrial: [
      { subject: 'Lechería Hohepa', volume: '5,000 L', setup: 'Serie Jarna', time: '4 Horas', result: 'Olor cambió de fuerte a dulce', link: '#' },
      { subject: 'Matadero Byron Bay', volume: '4.3 Millones L', setup: '21 Unidades Vortex', time: '6 Semanas', result: 'OD de 0ppm a 6.3ppm', link: '#' }
    ],
    municipal: [
      { subject: 'Vidaråsen (Noruega)', volume: '200 p.e.', setup: 'Vortex y Malmo', time: '5 Años Op', result: '96% P y 92% N remoción', link: '#' },
      { subject: 'Soerendonk (Holanda)', volume: '40,000 p.e.', setup: '810 Unidades', time: '4 Días TR', result: 'Eliminación de patógenos', link: '#' }
    ]
  }
};

export const SCALABILITY_DATA: ScalabilityData[] = [
  { model: 'Greenhouse', waterType: 'Clear', maxPond: 40, daysTo3ppm: 5, daysTo6ppm: 10, area: 0.18 },
  { model: 'Vortex', waterType: 'Primary', maxPond: 1500, daysTo3ppm: 20, daysTo6ppm: 40, area: 6.30 },
];
