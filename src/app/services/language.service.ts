
import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'es';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private languageSignal = signal<Language>('en');

    readonly language = this.languageSignal.asReadonly();

    setLanguage(lang: Language) {
        this.languageSignal.set(lang);
    }

    t(key: string): string {
        const lang = this.languageSignal();
        return translations[lang][key] || key;
    }

    getTranslations() {
        return translations[this.languageSignal()];
    }
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navigation
        nav_vitalization: "Home",
        nav_industrial: "Farming",
        nav_municipal: "Landscape & Architecture",
        nav_science: "Biochemistry",
        nav_home: "Home",
        nav_products: "Products",
        nav_contact: "Contact",
        nav_winery: "Wine",
        nav_meat: "Animal Agriculture",
        nav_mining: "Mining",
        nav_municipalities: "Municipalities",

        // Landing Page
        landing_title: "Flowform Eco-Tech",
        landing_subtitle: "Structural & Biochemical Water Restoration",
        landing_main_desc: "Flowform® technology channels the kinetic energy of rhythmic water movement to restore the vital essence of our world's most precious resource. Through meticulously crafted lemniscate paths, our systems induce a natural figure-of-eight pulse—amplifying oxygen exchange and revitalizing biological activity through pure biomimicry, entirely free from chemical additives.",

        landing_vitalization_title: "Home",
        landing_vitalization_desc: "Precision vitalization for nurseries, hydroponics, and sensitive biological growth. Stimulating root biomass and vitality.",

        landing_industrial_title: "Farming",
        landing_industrial_desc: "Heavy-duty remediation for Dairies, Abattoirs, and Wineries. Reversing anaerobic conditions and eliminating odors.",

        landing_municipal_title: "Landscape & Architecture",
        landing_municipal_desc: "Sewage treatment polishing and sustainable urban water systems. Fostering biodiversity and generative growth.",

        btn_explore: "View Solutions",
        btn_research: "Scientific Data",
        core_tech_label: "Core Technology",
        how_it_works_title: "How it Works",
        how_it_works_desc: "Our systems use biological rhythm to transform water quality.",
        step_4_title: "4. Biological Stability",
        step_4_desc: "The ecosystem stabilizes as aerobic bacteria dominate, creating a self-sustaining healthy environment.",
        see_products: "See Products",

        // Catalog
        grid_title: "Products",
        grid_desc: "Engineering data for rhythmic water units across three core sectors.",
        lpm: "LPM",
        lph: "LPH",
        constant: "Constant",

        // Model Details
        capacity_label: "Hourly Flow (LPH)",
        opt_flow_label: "Opt Flow",
        weight_label: "Weight",
        motor_hp: "Pump Power (HP)",
        back_models: "Back to Products",
        milestones_title: "Operational Benchmarks",
        milestone_time: "Biological Shift",
        milestone_result: "Primary Result",
        benefits_title: "Benefits",
        technical_specs: "Technical Specifications",
        material_label: "Material",
        dimensions_label: "Dimensions",
        durability_label: "Durability",
        maintenance_label: "Maintenance",
        scientific_validation: "Scientific Validation",
        studies_disclaimer: "These studies document specific field and laboratory results verified by third parties.",
        more_solutions: "More Solutions",
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
        checkout_note: "Our check out asks for you to register interest with a small payment after which we check shipping costs for you. If the amount is fine then we ask for full or half payment, depending on whether the product is in stock or needs casting.",


        // Winery Specific
        winery_title: "Wine",
        winery_desc: "Advanced water treatment for premium wine production, from irrigation to effluent remediation.",
        winery_pillar_1_title: "Product Quality & Value",
        winery_pillar_1_desc: "Enhancing flavor profiles, Brix levels, and shelf life through rhythmic water vitalization.",
        winery_pillar_2_title: "Effluent Management",
        winery_pillar_2_desc: "100% odor elimination and nutrient recovery for winery wastewater.",
        winery_pillar_3_title: "Soil & Terroir Vitalization",
        winery_pillar_3_desc: "Deep root stimulation and improved nutrient uptake for resilient vineyards.",
        winery_pillar_4_title: "Biodynamic Dynamization",
        winery_pillar_4_desc: "Perfect lemniscate stirring for preparations 500/501, saving labor and improving energy.",

        // Mining Specific
        mining_title: "Mining & Remediation",
        mining_desc: "Industrial-scale water treatment for sustainable mining operations and community impact reduction.",

        // Municipal Specific
        muni_title: "Municipalities & Public Spaces",
        muni_desc: "Sustainable water management solutions for urban environments, parks, and waste treatment facilities.",
        muni_pillar_1_title: "Wastewater Polishing",
        muni_pillar_1_desc: "Efficient removal of pathogens and nutrients (N, P) for safe discharge or reuse.",
        muni_pillar_2_title: "Urban Lakes & Parks",
        muni_pillar_2_desc: "Revitalization of stagnant water bodies, eliminating odors and enhancing aesthetic value.",
        muni_pillar_3_title: "Public Health",
        muni_pillar_3_desc: "Mosquito control and pathogen reduction through continuous rhythmic oxygenation.",
        muni_pillar_4_title: "Green Infrastructure",
        muni_pillar_4_desc: "Integration with constructed wetlands for low-energy, ecological water treatment.",

        // Meat Industry Specific
        meat_title: "Animal Agriculture",
        meat_desc: "Advanced effluent remediation and animal health solutions for Dairy, Piggery, and Poultry operations.",
        meat_pillar_1_title: "Odor Elimination",
        meat_pillar_1_desc: "Complete neutralization of H2S and Ammonia odors in lagoons and effluent ponds.",
        meat_pillar_2_title: "Regulatory Compliance",
        meat_pillar_2_desc: "Meet strict environmental standards (EU IED, EPA) and avoid costly fines or closures.",
        meat_pillar_3_title: "Waste-to-Fertilizer",
        meat_pillar_3_desc: "Convert basic anaerobic sludge into high-value, nutrient-rich aerobic liquid fertilizer.",
        meat_pillar_4_title: "Animal Health",
        meat_pillar_4_desc: "Improve hydration and feed conversion ratios with vitalized, pathogen-free water."

    },
    es: {
        // Navegación
        nav_vitalization: "Hogar",
        nav_industrial: "Farming",
        nav_municipal: "Paisajismo y Arquitectura",
        nav_science: "Bioquímica",
        nav_home: "Inicio",
        nav_products: "Productos",
        nav_contact: "Contacto",
        nav_winery: "Vinos",
        nav_meat: "Agricultura Animal",
        nav_mining: "Minería",
        nav_municipalities: "Municipalidades",

        // Página de Inicio
        landing_title: "Flowform Eco-Tech",
        landing_subtitle: "Restauración Estructural y Bioquímica del Agua",
        landing_main_desc: "La tecnología Flowform® canaliza la energía cinética del movimiento rítmico del agua para restaurar la esencia vital del recurso más preciado de nuestro mundo. A través de trayectorias de lemniscata meticulosamente diseñadas, nuestros sistemas inducen un pulso natural en forma de ocho, amplificando el intercambio de oxígeno y revitalizando la actividad biológica mediante pura biomímesis, sin necesidad de aditivos químicos.",

        landing_vitalization_title: "Hogar",
        landing_vitalization_desc: "Vitalización de precisión para viveros, hidroponía y crecimiento sensible. Estimulación de biomasa radicular.",

        landing_industrial_title: "Farming",
        landing_industrial_desc: "Remediación pesada para Lecherías, Mataderos y Viñas. Revierte condiciones anaeróbicas y elimina olores.",

        landing_municipal_title: "Paisajismo y Arquitectura",
        landing_municipal_desc: "Pulido de aguas servidas y sistemas urbanos. Fomenta la biodiversidad y el crecimiento generativo.",

        btn_explore: "Ver Soluciones",
        btn_research: "Datos Científicos",
        core_tech_label: "Tecnología Principal",
        how_it_works_title: "¿Cómo funciona?",
        how_it_works_desc: "Nuestros sistemas utilizan el ritmo biológico para transformar la calidad del agua.",
        step_4_title: "4. Estabilidad Biológica",
        step_4_desc: "El ecosistema se estabiliza a medida que dominan las bacterias aeróbicas, creando un ambiente saludable autosustentable.",
        see_products: "Ver Productos",

        // Catálogo
        grid_title: "Productos",
        grid_desc: "Datos de ingeniería para unidades rítmicas en tres sectores principales.",
        lpm: "LPM",
        lph: "LPH",
        constant: "Constante",

        // Detalles del Modelo
        capacity_label: "Caudal Horario (LPH)",
        opt_flow_label: "Flujo Óptimo",
        weight_label: "Peso",
        motor_hp: "Potencia Bomba (HP)",
        back_models: "Volver a Productos",
        milestones_title: "Hitos Operacionales",
        milestone_time: "Cambio Biológico",
        milestone_result: "Resultado Primario",
        benefits_title: "Beneficios",
        technical_specs: "Especificaciones Técnicas",
        material_label: "Material",
        dimensions_label: "Dimensiones",
        durability_label: "Durabilidad",
        maintenance_label: "Mantenimiento",
        scientific_validation: "Validación Científica",
        studies_disclaimer: "Estos estudios documentan resultados específicos de campo y laboratorio verificados por terceros.",
        more_solutions: "Más Soluciones",
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
        checkout_note: "Nuestro proceso de pago le solicita registrar su interés con un pequeño pago, tras lo cual verificamos los costos de envío por usted. Si el monto es correcto, solicitamos el pago total o parcial, dependiendo de si el producto está en stock o necesita fundirse.",

        // Winery Specific
        winery_title: "Vinos",
        winery_desc: "Tratamiento avanzado de agua para la producción de vinos premium, desde el riego hasta la remediación de efluentes.",
        winery_pillar_1_title: "Calidad y Valor del Producto",
        winery_pillar_1_desc: "Mejora de perfiles de sabor, grados Brix y vida útil mediante vitalización rítmica.",
        winery_pillar_2_title: "Gestión de Efluentes",
        winery_pillar_2_desc: "Eliminación del 100% de olores y recuperación de nutrientes en aguas de bodega.",
        winery_pillar_3_title: "Vitalización del Terroir",
        winery_pillar_3_desc: "Estimulación radicular profunda y mejor absorción de nutrientes para viñedos resilientes.",
        winery_pillar_4_title: "Dinamización Biodinámica",
        winery_pillar_4_desc: "Agitación en elipse perfecta para preparados 500/501, ahorrando trabajo y mejorando la energía.",

        // Mining Specific
        mining_title: "Minería y Remediación",
        mining_desc: "Tratamiento de agua a escala industrial para operaciones mineras sostenibles y reducción del impacto comunitario.",

        // Municipal Specific
        muni_title: "Municipalidades y Espacios Públicos",
        muni_desc: "Soluciones de gestión de agua sostenible para entornos urbanos, parques e instalaciones de tratamiento de residuos.",
        muni_pillar_1_title: "Pulido de Aguas Residuales",
        muni_pillar_1_desc: "Eliminación eficiente de patógenos y nutrientes (N, P) para descarga segura o reutilización.",
        muni_pillar_2_title: "Lagos y Parques Urbanos",
        muni_pillar_2_desc: "Revitalización de cuerpos de agua estancados, eliminando olores y mejorando el valor estético.",
        muni_pillar_3_title: "Salud Pública",
        muni_pillar_3_desc: "Control de mosquitos y reducción de patógenos mediante oxigenación rítmica continua.",
        muni_pillar_4_title: "Infraestructura Verde",
        muni_pillar_4_desc: "Integración con humedales construidos para tratamiento de agua ecológico y de baja energía.",

        // Meat Industry Specific
        meat_title: "Agricultura Animal",
        meat_desc: "Soluciones avanzadas de remediación de efluentes y salud animal para operaciones lecheras, porcinas y avícolas.",
        meat_pillar_1_title: "Eliminación de Olores",
        meat_pillar_1_desc: "Neutralización completa de olores de H2S y Amoníaco en lagunas y estanques de efluentes.",
        meat_pillar_2_title: "Cumplimiento Normativo",
        meat_pillar_2_desc: "Cumpla con los estándares ambientales estrictos (EU IED, EPA) y evite multas costosas o cierres.",
        meat_pillar_3_title: "Residuos a Fertilizante",
        meat_pillar_3_desc: "Convierta lodos anaeróbicos básicos en fertilizante líquido aeróbico rico en nutrientes y de alto valor.",
        meat_pillar_4_title: "Salud Animal",
        meat_pillar_4_desc: "Mejore la hidratación y las tasas de conversión alimenticia con agua vitalizada libre de patógenos."
    }
};
