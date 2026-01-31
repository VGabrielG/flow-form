
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en' as Language);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    nav_vitalization: "Home",
    nav_industrial: "Farming",
    nav_municipal: "Landscape & Architecture",
    nav_science: "Biochemistry",

    // Landing Page
    landing_title: "Flowform Eco-Tech",
    landing_subtitle: "Structural & Biochemical Water Restoration",

    landing_vitalization_title: "Home",
    landing_vitalization_desc: "Precision vitalization for nurseries, hydroponics, and sensitive biological growth. Stimulating root biomass and vitality.",

    landing_industrial_title: "Farming",
    landing_industrial_desc: "Heavy-duty remediation for Dairies, Abattoirs, and Wineries. Reversing anaerobic conditions and eliminating odors.",

    landing_municipal_title: "Landscape & Architecture",
    landing_municipal_desc: "Sewage treatment polishing and sustainable urban water systems. Fostering biodiversity and generative growth.",

    btn_explore: "View Solutions",
    btn_research: "Scientific Data",

    // Catalog
    grid_title: "Products",
    grid_desc: "Engineering data for rhythmic water units across three core sectors.",
    lpm: "LPM",
    lph: "LPH",
    constant: "Constant",

    // Model Details
    capacity_label: "Hourly Flow (LPH)",
    motor_hp: "Pump Power (HP)",
    back_models: "Back to Sector",
    milestones_title: "Operational Benchmarks",
    milestone_time: "Biological Shift",
    milestone_result: "Primary Result",
    benefits_title: "System Impact & Logic",
    pump_req: "Pumping Requirements",
    spec_flow_h: "Recirculation Flow",
    pump_desc: "Minimum Rhythmic Activation",
    energy_label: "Efficiency & Consumption",
    energy_cons: "Hourly Consumption",
    glossary_title: "Biomimetic Heart Logic",

    // System Logic Steps
    step_1_title: "1. Stagnant Extraction",
    step_1_desc: "The pump pulls anaerobic water from the bottom where gases (H2S, CH4) and toxic sludge settle.",
    step_2_title: "2. Rhythmic Stripping",
    step_2_desc: "The cascade opens the water into thin films, forcing out CO2 and injecting molecular O2 through rhythmic pulses.",
    step_3_title: "3. Aerobic Return",
    step_3_desc: "Oxygen-saturated water returns to the surface, creating a current that eliminates dead zones.",

    // Microbiological Shift
    shift_title: "The 14-Day Shift",
    shift_desc: "Continuous operation is vital to replace anaerobic bacteria with aerobic colonies. Stability is typically reached in 14 days.",

    // Biochemistry / Science
    science_title: "The Science of Rhythm",
    science_desc: "Biomimetic engineering applied to water chemistry and microbiological health.",
    nitro_title: "Gas Stripping & pH",
    nitro_desc: "Stripping CO2 naturally balances the carbonic acid cycle, raising pH for optimal aerobic life.",
    chem_title: "Key Transformations",
    abattoir_chart: "Dissolved Oxygen Saturation",

    root_growth: "Primary Growth Factor",
    shoot_length: "Secondary Growth Factor",
    case_title: "Studies",
    col_subject: "Study Site",
    col_volume: "Volume",
    col_setup: "Configuration",
    col_time: "Timeframe",
    col_result: "Observed Result",
    col_action: "Link",
    btn_view_study: "View Data",

    // Farming
    farming_title: "Plants & Agriculture",
    farming_subtitle: "Flowform technology is widely used in agricultural settings to improve water and nutrient management, particularly in:",
    farming_item_1: "Converting animal effluent into liquid fertilizer for smaller and larger farms",
    farming_item_2: "Enhancing and oxygenating irrigation water for horticultural greenhouses and flower growing",
    farming_item_3: "Stirring biodynamic preparations and soil biology enhancers",
    farming_item_4: "Preparing compost tea to enrich soil health",
    farming_item_5: "Energizing irrigation water for better crop yields",
    farming_item_6: "Improving water quality in fish farms",

    // Landscape
    landscape_title: "Landscape & Design",
    landscape_subtitle: "Flowform can add design value to private and public built environments and is often used in:",
    landscape_item_1: "Swim pools, spa pools - reduced chemicals, sweet soft water, relaxing sounds",
    landscape_item_2: "Landscaping, private and public – bringing revitalized water and art to the garden",
    landscape_item_3: "Children’s playgrounds, increasing appreciation for water while helping social skills",

    // Purchasing
    purchase_title: "Order & Shipping Info",
    price_note: "Please note that our prices are valid for single units and not sets or cascades and are without your national VAT or GST tax added!",
    shipping_note: "Do check our Shipping Policy under FAQ - we supply in multiple countries with different shipping costs which need calculating for you.",
    checkout_note: "Our check out asks for you to register interest with a small payment after which we check shipping costs for you. If the amount is fine then we ask for full or half payment, depending on whether the product is in stock or needs casting."
  },
  es: {
    // Navegación
    nav_vitalization: "Hogar",
    nav_industrial: "Farming",
    nav_municipal: "Paisajismo y Arquitectura",
    nav_science: "Bioquímica",

    // Página de Inicio
    landing_title: "Flowform Eco-Tech",
    landing_subtitle: "Restauración Estructural y Bioquímica del Agua",

    landing_vitalization_title: "Hogar",
    landing_vitalization_desc: "Vitalización de precisión para viveros, hidroponía y crecimiento sensible. Estimulación de biomasa radicular.",

    landing_industrial_title: "Farming",
    landing_industrial_desc: "Remediación pesada para Lecherías, Mataderos y Viñas. Revierte condiciones anaeróbicas y elimina olores.",

    landing_municipal_title: "Paisajismo y Arquitectura",
    landing_municipal_desc: "Pulido de aguas servidas y sistemas urbanos. Fomenta la biodiversidad y el crecimiento generativo.",

    btn_explore: "Ver Soluciones",
    btn_research: "Datos Científicos",

    // Catálogo
    grid_title: "Productos",
    grid_desc: "Datos de ingeniería para unidades rítmicas en tres sectores principales.",
    lpm: "LPM",
    lph: "LPH",
    constant: "Constante",

    // Detalles del Modelo
    capacity_label: "Caudal Horario (LPH)",
    motor_hp: "Potencia Bomba (HP)",
    back_models: "Volver a Sector",
    milestones_title: "Hitos Operacionales",
    milestone_time: "Cambio Biológico",
    milestone_result: "Resultado Primario",
    benefits_title: "Impacto y Lógica del Sistema",
    pump_req: "Requerimientos de Bombeo",
    spec_flow_h: "Flujo de Recirculación",
    pump_desc: "Activación Rítmica Mínima",
    energy_label: "Eficiencia y Consumo",
    energy_cons: "Consumo Horario",
    glossary_title: "Lógica Biomimética",

    // Pasos de Lógica
    step_1_title: "1. Extracción Estancada",
    step_1_desc: "La bomba extrae agua anaeróbica del fondo donde se asientan gases (H2S, CH4) y lodos tóxicos.",
    step_2_title: "2. Desgasificación Rítmica",
    step_2_desc: "La cascada abre el agua en láminas finas, forzando la salida de CO2 e inyectando O2 molecular mediante pulsos.",
    step_3_title: "3. Retorno Aeróbico",
    step_3_desc: "El agua saturada de oxígeno vuelve a la superficie, creando una corriente que elimina zonas muertas.",

    // Cambio Microbiológico
    shift_title: "El Cambio de 14 Días",
    shift_desc: "La operación continua es vital para reemplazar bacterias anaeróbicas por colonias aeróbicas. La estabilidad se alcanza en 14 días.",

    // Bioquímica
    science_title: "La Ciencia del Ritmo",
    science_desc: "Ingeniería biomimética aplicada a la química del agua y salud microbiológica.",
    nitro_title: "Extracción de Gases y pH",
    nitro_desc: "La extracción de CO2 balancea naturalmente el ácido carbónico, elevando el pH para la vida aeróbica.",
    chem_title: "Transformaciones Clave",
    abattoir_chart: "Saturación de Oxígeno Disuelto",

    root_growth: "Factor de Crecimiento Primario",
    shoot_length: "Factor de Crecimiento Secundario",
    case_title: "Estudios",
    col_subject: "Sitio de Estudio",
    col_volume: "Volumen",
    col_setup: "Configuración",
    col_time: "Tiempo",
    col_result: "Resultado Observado",
    col_action: "Link",
    btn_view_study: "Ver Datos",

    // Farming
    farming_title: "Plantas y Agricultura",
    farming_subtitle: "La tecnología Flowform se utiliza ampliamente en entornos agrícolas para mejorar la gestión del agua y los nutrientes, particularmente en:",
    farming_item_1: "Conversión de efluentes animales en fertilizante líquido para granjas pequeñas y grandes",
    farming_item_2: "Mejora y oxigenación del agua de riego para invernaderos hortícolas y cultivo de flores",
    farming_item_3: "Agitación de preparados biodinámicos y potenciadores de la biología del suelo",
    farming_item_4: "Preparación de té de compost para enriquecer la salud del suelo",
    farming_item_5: "Energización del agua de riego para mejores rendimientos de los cultivos",
    farming_item_6: "Mejora de la calidad del agua en piscifactorías",

    // Landscape
    landscape_title: "Paisajismo y Diseño",
    landscape_subtitle: "Flowform agrega valor de diseño a entornos construidos tanto privados como públicos y se utiliza frecuentemente en:",
    landscape_item_1: "Piscinas y spas: reducción de químicos, agua dulce y suave, sonidos relajantes",
    landscape_item_2: "Paisajismo, privado y público: aportando agua revitalizada y arte al jardín",
    landscape_item_3: "Patios de recreo infantiles: aumenta el aprecio por el agua y ayuda a las habilidades sociales",

    // Purchasing
    purchase_title: "Información de Pedido y Envío",
    price_note: "¡Tenga en cuenta que nuestros precios son válidos para unidades individuales y no para juegos o cascadas, y no se incluye el IVA o impuesto GST nacional!",
    shipping_note: "Consulte nuestra Política de envío en las Preguntas frecuentes: realizamos envíos a varios países con diferentes costos de envío que debemos calcular para usted.",
    checkout_note: "Nuestro proceso de pago le solicita registrar su interés con un pequeño pago, tras lo cual verificamos los costos de envío por usted. Si el monto es correcto, solicitamos el pago total o parcial, dependiendo de si el producto está en stock o necesita fundirse."
  }
};
