
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
      { label: 'Leaf Surface Area', value: '+14.2%', pdf: 'Agricultural_Effluent_Brochure.pdf', page: '2' }
    ],
    industrial: [
      { label: 'Dissolved Oxygen (DO)', value: '6.3 ppm', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' },
      { label: 'Odor Neutralization', value: '100%', pdf: 'Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
      { label: 'DQO / COD Reduction', value: '17%', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' }
    ],
    municipal: [
      { label: 'Phosphorus (P) Removal', value: '96%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Nitrogen (N) Removal', value: '92%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Pathogen Elimination', value: '99.9%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' }
    ]
  },
  es: {
    vitalization: [
      { label: 'Peso de Biomasa Total', value: '+32.5%', pdf: 'Transforming animal effluent into liquid fertilizer.pdf', page: '1' },
      { label: 'Expansión Radicular', value: '+9.5%', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' },
      { label: 'Área Foliar', value: '+14.2%', pdf: 'Agricultural_Effluent_Brochure.pdf', page: '2' }
    ],
    industrial: [
      { label: 'Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' },
      { label: 'Neutralización de Olores', value: '100%', pdf: 'Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
      { label: 'Reducción de DQO', value: '17%', pdf: 'Research data on livestock and agriculture.doc.pdf', page: '1' }
    ],
    municipal: [
      { label: 'Remoción de Fósforo (P)', value: '96%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Remoción de Nitrógeno (N)', value: '92%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' },
      { label: 'Eliminación de Patógenos', value: '99.9%', pdf: 'Análisis Técnico Exhaustivo...', page: '2' }
    ]
  }
};

export const MODELS_DATA: Record<string, Record<string, FlowformModel[]>> = {
  en: {
    vitalization: [
      {
        id: 'ceramic-features',
        name: 'Ceramic Water Features',
        lpm: 3, lph: 180,
        material: 'Handcrafted Ceramic',
        dimensions: 'Varied (Desktop & Standing)',
        primaryApplication: 'Home, Office & Waiting Rooms',
        industries: ['Interior Design', 'Wellness', 'Corporate'],
        description: 'Beautiful ceramic water features designed for use in homes, apartments, waiting rooms, and offices.',
        benefits: [
          'Aesthetic enhancement with soothing sounds',
          'Improved air quality through gentle humidification',
          'Relaxation and focus inspired by nature',
          'Ideal for personal and professional wellness'
        ],
        imageUrl: '/images/matatiki.png',
        secondaryImages: ['/images/matatiki.png', '/images/morena.png', '/images/manawa.png'],
        pumpHP: '0.05 HP',
        minLPM: 3,
        milestones: { time: 'Instant', result: 'Aesthetic & Auditory Calm', secondary: 'Air Humidification' },
        maintenance: 'Clean with soft cloth monthly.',
        durability: 'Lifetime (if handled with care)'
      },
      {
        id: 'lotus',
        name: 'Lotus (Radial Flow)',
        lpm: 35, lph: 2100,
        material: 'Cast stone, acid etched',
        dimensions: 'Dia: 64 cm',
        primaryApplication: 'Courtyards & Small Ponds',
        industries: ['Private Gardens', 'Meditation Spaces'],
        description: 'Water wells up in the center and flows out in three directions, creating fan-shaped waterfalls and soft splashes.',
        benefits: ['360-degree flow pattern', 'Gentle acoustic profile', 'Bird friendly'],
        imageUrl: '/images/lotus.png',
        pumpHP: '0.25 HP',
        minLPM: 35,
        milestones: { time: 'Immediate', result: 'Radial Aeration', secondary: 'Bird Bath' },
        maintenance: 'Easy surface wipe.',
        durability: '20 years'
      },
      {
        id: 'ashdown',
        name: 'Ashdown (Compact Flow)',
        lpm: 20, lph: 1200,
        material: 'Cast stone',
        dimensions: '16 x 60 x 50 cm',
        primaryApplication: 'Small Garden Features',
        industries: ['Home Gardens', 'Terraces'],
        description: 'A compact oscillating form that creates a lovely figure-eight movement with a gentle sound.',
        benefits: ['Easy installation', 'Soft consistent sound', 'Ideal for limited spaces'],
        imageUrl: '/images/ashdown.png',
        pumpHP: '0.15 HP',
        minLPM: 20,
        milestones: { time: 'Immediate', result: 'Relaxation', secondary: 'Living decoration' },
        maintenance: 'Simple cleaning.',
        durability: '20 years'
      },
      {
        id: 'cloverleaf',
        name: 'Cloverleaf',
        lpm: 12, lph: 720,
        material: 'Cast Stone',
        dimensions: '18 x 56 x 56 cm',
        primaryApplication: 'Small Garden Features',
        industries: ['Private Homes', 'Balconies'],
        description: 'A compact, trifoliate design that creates a gentle, rhythmical pulse in smaller spaces.',
        benefits: ['Compact footprint', 'Subtle water sound', 'Perfect for small wildlife'],
        imageUrl: '/images/cloverleaf.png',
        pumpHP: '0.1 HP',
        minLPM: 12,
        milestones: { time: 'Immediate', result: 'Micro-climate enhancement', secondary: 'Visual focus' },
        maintenance: 'Simple brush clean.',
        durability: '20 years'
      }
    ],
    industrial: [
      {
        id: 'whirlpool-petg',
        name: 'Whirlpool PETG (Seedling & Vitality)',
        lpm: 7, lph: 420,
        material: 'PETG / Polished Resin',
        dimensions: '25 x 16 x 16 cm',
        primaryApplication: 'Horticulture & Root Growth',
        industries: ['Nurseries', 'Hydroponics', 'Precision Growth'],
        description: 'Compact vitalization system specialized for sensitive plant growth. Its rhythmic pulse breaks surface tension.',
        benefits: ['Stimulates 30%+ more root biomass', 'Eliminates biofilm in irrigation lines', 'Enhances nutrient bioavailability'],
        imageUrl: '/images/whirlpool-petg.png',
        pumpHP: '0.25 HP',
        minLPM: 7,
        milestones: { time: '48 Hours', result: '3ppm DO', secondary: 'Surface Tension Reduction' },
        maintenance: 'Clean vessels seasonally.',
        durability: '10 years'
      },
      {
        id: 'helix',
        name: 'Helix (Precision Irrigation)',
        lpm: 80, lph: 4800,
        material: 'High-Grade PETG',
        dimensions: '70 x 50 x 15 cm',
        primaryApplication: 'Mid-Scale Horticulture',
        industries: ['Orchards', 'Berry Farms', 'Large Greenhouses'],
        description: 'Mid-range unit for vitalizing irrigation water. Designed to handle clean water at higher volumes.',
        benefits: ['Optimal for drip irrigation', 'Reduces calcium buildup', 'Enhances soil microbiology'],
        imageUrl: '/images/helix.png',
        pumpHP: '1.0 HP',
        minLPM: 80,
        milestones: { time: '72 Hours', result: 'Enhanced Hydration', secondary: 'Microbiological stimulation' },
        maintenance: 'Annual vessel inspection.',
        durability: '15 years'
      },
      {
        id: 'jarna-dairy',
        name: 'Jarna (Dairy Sludge)',
        lpm: 50, lph: 3000,
        material: 'Reinforced Fiberglass',
        dimensions: '60 x 45 x 12 cm',
        primaryApplication: 'Dairy Effluent Remediation',
        industries: ['Dairies', 'Pig Farms', 'Composting'],
        description: 'The agricultural workhorse. Specifically designed without vortex holes to handle high-viscosity dairy sludge.',
        benefits: ['Odor neutralization', 'Zero-clog design', 'Neutralizes H2S and Ammonia'],
        imageUrl: '/images/jarna.png',
        pumpHP: '0.75 HP',
        minLPM: 50,
        milestones: { time: '4 Hours', result: 'Odor Neutralization', secondary: 'Bacterial shift' },
        maintenance: 'Weekly filter cleaning.',
        durability: '25 years'
      },
      {
        id: 'vortex',
        name: 'Vortex (Process Waste)',
        lpm: 250, lph: 15000,
        material: 'Industrial Fiberglass',
        dimensions: '95 x 90 x 32 cm',
        primaryApplication: 'Abattoir & Winery Remediation',
        industries: ['Abattoirs', 'Wineries', 'Canneries'],
        description: 'Engineered for high organic load stabilization. Massive oxygen transfer for heavy waste.',
        benefits: ['1mg/L DO increase per unit', 'pH stabilization', 'Strips Ammonia and Sulfides'],
        imageUrl: '/images/vortex.png',
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
        id: 'meander',
        name: 'Meander (Urban Polishing)',
        lpm: 100, lph: 6000,
        material: 'Aesthetic Composite',
        dimensions: '80 x 65 x 18 cm',
        primaryApplication: 'Urban Parks & Water Polishing',
        industries: ['Municipal Parks', 'Institutions'],
        description: 'Focused on biological "generative" growth. Ideal for urban parks where biodiversity is key.',
        benefits: ['Generative plant growth', 'Eliminates mosquito zones', 'Aesthetic public value'],
        imageUrl: '/images/meander.png',
        pumpHP: '1.5 HP',
        minLPM: 100,
        milestones: { time: 'Ongoing', result: 'Pathogen-free water', secondary: 'Mosquito elimination' },
        maintenance: 'Surface cleaning as needed.',
        durability: '20 years'
      },
      {
        id: 'sevenfold',
        name: 'Sevenfold (Grand Cascade)',
        lpm: 40, lph: 2400,
        material: 'Cast stone, acid etched, solid',
        dimensions: '175 x 160 x 360 cm (Max)',
        primaryApplication: 'Public Gardens & Feature Pools',
        industries: ['Public Spaces', 'Hotels', 'Spas'],
        description: 'A powerful sculptural experience with a variety of water flows. Ideal centerpiece for serenity in large gardens.',
        benefits: ['Visual masterpiece', 'Soothing broad frequency sound', 'Oxygenates large decorative pools'],
        imageUrl: '/images/sevenfold.png',
        pumpHP: '1.0 HP',
        minLPM: 40,
        milestones: { time: 'Immediate', result: 'Visual/Auditory Impact', secondary: 'Relaxation' },
        maintenance: 'Quarterly surface cleaning.',
        durability: 'Lifetime'
      },
      {
        id: 'emerson',
        name: 'Emerson (Tiered Flow)',
        lpm: 75, lph: 4500,
        material: 'Cast stone, acid etched',
        dimensions: '23 x 99 x 93 cm',
        primaryApplication: 'Landscape Architecture',
        industries: ['Residential', 'Public Parks', 'Healing Gardens'],
        description: 'Features rich water movement through formal shell-like wings. Flows elegantly in tiered steps.',
        benefits: ['High flow capacity for visual drama', 'Shell-like aesthetics', 'Deep rhythmic sound'],
        imageUrl: '/images/emerson.png',
        pumpHP: '0.75 HP',
        minLPM: 20,
        milestones: { time: 'Immediate', result: 'Aesthetic Flow', secondary: 'Sound Therapy' },
        maintenance: 'Seasonal cleaning.',
        durability: '25+ years'
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
        imageUrl: '/images/vortex-municipal.png',
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
        id: 'ceramic-features',
        name: 'Fuentes de Agua de Cerámica',
        lpm: 3, lph: 180,
        material: 'Cerámica Artesanal',
        dimensions: 'Variadas (Sobremesa y Pedestal)',
        primaryApplication: 'Hogares, Oficinas y Salas de Espera',
        industries: ['Diseño de Interiores', 'Bienestar', 'Corporativo'],
        description: 'Hermosas fuentes de agua de cerámica diseñadas para su uso en hogares, apartamentos, salas de espera y oficinas.',
        benefits: [
          'Mejora estética con sonidos relajantes',
          'Mejora la calidad del aire (humidificación)',
          'Relajación y enfoque inspirado en la naturaleza',
          'Ideal para el bienestar personal y profesional'
        ],
        imageUrl: '/images/matatiki.png',
        secondaryImages: ['/images/matatiki.png', '/images/morena.png', '/images/manawa.png'],
        pumpHP: '0.05 HP',
        minLPM: 3,
        milestones: { time: 'Instantáneo', result: 'Calma Estética y Auditiva', secondary: 'Humidificación del Aire' },
        maintenance: 'Limpiar con paño suave mensualmente.',
        durability: 'De por vida (con cuidado)'
      },
      {
        id: 'lotus',
        name: 'Lotus (Flujo Radial)',
        lpm: 35, lph: 2100,
        material: 'Piedra fundida',
        dimensions: 'Diámetro: 64 cm',
        primaryApplication: 'Patios y Pequeños Estanques',
        industries: ['Jardines Privados', 'Espacios de Meditación'],
        description: 'El agua brota en el centro y fluye en tres direcciones, creando cascadas en forma de abanico y salpicaduras suaves.',
        benefits: ['Patrón de flujo de 360 grados', 'Perfil acústico suave', 'Amigable con aves'],
        imageUrl: '/images/lotus.png',
        pumpHP: '0.25 HP',
        minLPM: 35,
        milestones: { time: 'Inmediato', result: 'Aeración Radial', secondary: 'Bebedero de Aves' },
        maintenance: 'Limpieza simple.',
        durability: '20 años'
      },
      {
        id: 'ashdown',
        name: 'Ashdown (Fluidez Compacta)',
        lpm: 20, lph: 1200,
        material: 'Piedra fundida',
        dimensions: '16 x 60 x 50 cm',
        primaryApplication: 'Jardines Pequeños',
        industries: ['Hogares', 'Terrazas'],
        description: 'Una forma oscilante compacta que crea un hermoso movimiento de ocho con un sonido suave.',
        benefits: ['Fácil de instalar', 'Sonido suave y constante', 'Ideal para espacios limitados'],
        imageUrl: '/images/ashdown.png',
        pumpHP: '0.15 HP',
        minLPM: 20,
        milestones: { time: 'Inmediato', result: 'Relajación', secondary: 'Decoración viva' },
        maintenance: 'Limpieza simple.',
        durability: '20 años'
      },
      {
        id: 'cloverleaf',
        name: 'Cloverleaf (Trébol)',
        lpm: 12, lph: 720,
        material: 'Piedra fundida',
        dimensions: '18 x 56 x 56 cm',
        primaryApplication: 'Pequeños Jardines',
        industries: ['Hogares Privados', 'Balcones'],
        description: 'Un diseño compacto trifoliado que crea un pulso rítmico suave en espacios pequeños.',
        benefits: ['Huella compacta', 'Sonido de agua sutil', 'Perfecto para fauna pequeña'],
        imageUrl: '/images/cloverleaf.png',
        pumpHP: '0.1 HP',
        minLPM: 12,
        milestones: { time: 'Inmediato', result: 'Mejora microclima', secondary: 'Foco visual' },
        maintenance: 'Cepillado simple.',
        durability: '20 años'
      }
    ],
    industrial: [
      {
        id: 'whirlpool-petg',
        name: 'Modelo Whirlpool PETG (Horticultura)',
        lpm: 7, lph: 420,
        material: 'PETG / Resina Pulida',
        dimensions: '25 x 16 x 16 cm',
        primaryApplication: 'Plantas y Crecimiento Radicular',
        industries: ['Viveros', 'Hidroponía', 'Crecimiento de Precisión'],
        description: 'Sistema compacto especializado en el crecimiento sensible de plantas. Su pulso rítmico rompe la tensión superficial.',
        benefits: ['Estimula +30% biomasa radicular', 'Elimina biofilm', 'Mejora absorción de nutrientes'],
        imageUrl: '/images/whirlpool-petg.png',
        pumpHP: '0.25 HP',
        minLPM: 7,
        milestones: { time: '48 Horas', result: '3ppm OD', secondary: 'Reducción de Tensión' },
        maintenance: 'Limpieza estacional.',
        durability: '10 años'
      },
      {
        id: 'helix',
        name: 'Modelo Helix (Riego Precisión)',
        lpm: 80, lph: 4800,
        material: 'PETG Alta Calidad',
        dimensions: '70 x 50 x 15 cm',
        primaryApplication: 'Horticultura Media',
        industries: ['Huertos', 'Frutillas', 'Invernaderos'],
        description: 'Unidad de rango medio para vitalizar agua de riego a mayores volúmenes.',
        benefits: ['Óptimo para goteo', 'Reduce calcio en boquillas', 'Mejora microbiología'],
        imageUrl: '/images/helix.png',
        pumpHP: '1.0 HP',
        minLPM: 80,
        milestones: { time: '72 Horas', result: 'Hidratación Mejorada', secondary: 'Estimulación microbiológica' },
        maintenance: 'Inspección anual.',
        durability: '15 años'
      },
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
        id: 'vortex',
        name: 'Modelo Vortex (Desechos Industriales)',
        lpm: 250, lph: 15000,
        material: 'Fibra de Vidrio Industrial',
        dimensions: '95 x 90 x 32 cm',
        primaryApplication: 'Mataderos y Viñas',
        industries: ['Mataderos', 'Viñas', 'Procesadoras'],
        description: 'Estabilización de alta carga orgánica. Aumento masivo de oxígeno.',
        benefits: ['+1mg/L OD por unidad', 'Estabiliza pH', 'Extrae Amoníaco y Sulfatos'],
        imageUrl: '/images/vortex.png',
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
        id: 'meander',
        name: 'Modelo Meander (Pulido Urbano)',
        lpm: 100, lph: 6000,
        material: 'Compuesto Estético',
        dimensions: '80 x 65 x 18 cm',
        primaryApplication: 'Parques y Pulido de Agua',
        industries: ['Parques', 'Zonas Públicas'],
        description: 'Fomenta biodiversidad y crecimiento generativo. Ideal para espacios públicos.',
        benefits: ['Crecimiento de flores', 'Sin mosquitos', 'Valor estético alto'],
        imageUrl: '/images/meander.png',
        pumpHP: '1.5 HP',
        minLPM: 100,
        milestones: { time: 'Continuo', result: 'Agua libre patógenos', secondary: 'Sin mosquitos' },
        maintenance: 'Limpieza superficial.',
        durability: '20 años'
      },
      {
        id: 'sevenfold',
        name: 'Sevenfold (Gran Cascada)',
        lpm: 40, lph: 2400,
        material: 'Piedra fundida, sólida',
        dimensions: '175 x 160 x 360 cm (Max)',
        primaryApplication: 'Jardines Públicos y Piscinas',
        industries: ['Espacios Públicos', 'Hoteles', 'Spas'],
        description: 'Una poderosa experiencia escultórica con variedad de flujos de agua. Pieza central ideal para serenidad en grandes jardines.',
        benefits: ['Obra maestra visual', 'Sonido de frecuencia amplia', 'Oxigena piscinas decorativas'],
        imageUrl: '/images/sevenfold.png',
        pumpHP: '1.0 HP',
        minLPM: 40,
        milestones: { time: 'Inmediato', result: 'Impacto Visual/Auditivo', secondary: 'Relajación' },
        maintenance: 'Limpieza trimestral.',
        durability: 'De por vida'
      },
      {
        id: 'emerson',
        name: 'Emerson (Flujo Escalonado)',
        lpm: 75, lph: 4500,
        material: 'Piedra fundida',
        dimensions: '23 x 99 x 93 cm',
        primaryApplication: 'Arquitectura Paisajista',
        industries: ['Residencial', 'Parques Públicos', 'Jardines de Sanación'],
        description: 'Movimiento de agua rico a través de alas formales tipo concha. Fluye elegantemente en pasos escalonados.',
        benefits: ['Alta capacidad de flujo para drama visual', 'Estética de concha', 'Sonido rítmico profundo'],
        imageUrl: '/images/emerson.png',
        pumpHP: '0.75 HP',
        minLPM: 20,
        milestones: { time: 'Inmediato', result: 'Flujo Estético', secondary: 'Terapia de Sonido' },
        maintenance: 'Limpieza estacional.',
        durability: '25+ años'
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
        imageUrl: '/images/vortex-municipal.png',
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
      { subject: 'Forest Row Lettuce Study', volume: 'Nutrient Tank', setup: '1 Whirlpool PETG Cascade', time: 'Full Season', result: '32.5% increase in total weight', link: '#' },
      { subject: 'Wheat Germination', volume: 'Laboratory', setup: 'Precision Helix Cascade', time: '14 Days', result: '+9.5% Root Length', link: '#' },
    ],
    industrial: [
      { subject: 'Hohepa Dairy Farm', volume: '5,000 L', setup: 'Jarna Series', time: '4 Hours', result: 'Odor shift from pungent to sweet', link: '#' },
      { subject: 'Byron Bay Abattoir', volume: '4.3 Million L', setup: '21 Vortex Units', time: '6 Weeks', result: 'DO from 0ppm to 6.3ppm', link: '#' }
    ],
    municipal: [
      { subject: 'Vidaråsen (Norway)', volume: '200 p.e.', setup: 'Vortex & Meander', time: '5 Years Op', result: '96% P & 92% N Removal', link: '#' },
      { subject: 'Soerendonk (Netherlands)', volume: '40,000 p.e.', setup: '810 Units (81 rows)', time: '4 Days RT', result: 'Pathogen elimination', link: '#' }
    ]
  },
  es: {
    vitalization: [
      { subject: 'Estudio Lechuga Forest Row', volume: 'Tanque Nutrientes', setup: '1 Cascada Whirlpool PETG', time: 'Temporada', result: '32.5% aumento de peso total', link: '#' },
      { subject: 'Germinación de Trigo', volume: 'Laboratorio', setup: 'Cascada Helix Precisión', time: '14 Días', result: '+9.5% largo de raíz', link: '#' }
    ],
    industrial: [
      { subject: 'Lechería Hohepa', volume: '5,000 L', setup: 'Serie Jarna', time: '4 Horas', result: 'Olor cambió de fuerte a dulce', link: '#' },
      { subject: 'Matadero Byron Bay', volume: '4.3 Millones L', setup: '21 Unidades Vortex', time: '6 Semanas', result: 'OD de 0ppm a 6.3ppm', link: '#' }
    ],
    municipal: [
      { subject: 'Vidaråsen (Noruega)', volume: '200 p.e.', setup: 'Vortex y Meander', time: '5 Años Op', result: '96% P y 92% N remoción', link: '#' },
      { subject: 'Soerendonk (Holanda)', volume: '40,000 p.e.', setup: '810 Unidades', time: '4 Días TR', result: 'Eliminación de patógenos', link: '#' }
    ]
  }
};

export const SCALABILITY_DATA: ScalabilityData[] = [
  { model: 'Whirlpool PETG', waterType: 'Clear', maxPond: 40, daysTo3ppm: 5, daysTo6ppm: 10, area: 0.18 },
  { model: 'Vortex', waterType: 'Primary', maxPond: 1500, daysTo3ppm: 20, daysTo6ppm: 40, area: 6.30 },
];
