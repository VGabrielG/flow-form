
import { Injectable } from '@angular/core';
import { FlowformModel, CaseStudy, ScalabilityData } from '../models/flowform.model';

export interface ScienceFact {
    label: string;
    value: string;
    pdf: string;
    page: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    getScienceStats(lang: 'en' | 'es') {
        return SCIENCE_STATS[lang];
    }

    getModelsData(lang: 'en' | 'es') {
        return MODELS_DATA[lang];
    }

    getCaseStudiesData(lang: 'en' | 'es') {
        return CASE_STUDIES_DATA[lang];
    }
}

export const SCIENCE_STATS: Record<string, Record<string, ScienceFact[]>> = {
    en: {
        vitalization: [
            { label: 'Total Biomass Weight', value: '+32.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Root System Expansion', value: '+9.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Leaf Surface Area', value: '+14.2%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' }
        ],
        industrial: [
            { label: 'Dissolved Oxygen (DO)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Odor Neutralization', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Reducción de Demanda Química de Oxígeno (DQO) / Chemical Oxygen Demand (COD) Reduction', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' }
        ],
        municipal: [
            { label: 'Phosphorus (P) Removal', value: '87%', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' },
            { label: 'Nitrogen (N) Removal', value: '13-97%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
            { label: 'Pathogen Elimination', value: '99.9%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' }
        ],
        winery: [
            { label: 'Dissolved Oxygen (DO)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Odor Neutralization', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Total Biomass Weight', value: '+32.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Root System Expansion', value: 'Superior', pdf: '/studies/flow form studies/8. Report 2015 Four Plants research 20151027.pdf', page: '1' },
            { label: 'Branching Development', value: 'Significant', pdf: '/studies/flow form studies/8. Report 2015 Four Plants research 20151027.pdf', page: '1' },
            { label: 'Nutrient Uptake Efficiency', value: 'Optimized', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Biofilm Reduction', value: 'Prevented', pdf: '/studies/Farming/5. Agricultural_Effluent_Brochure.pdf', page: '1' },
            { label: 'Pathogen Removal', value: '99.9%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Nitrogen (N) Removal', value: 'High', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' },
            { label: 'Phosphorus (P) Removal', value: 'High', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' },
            { label: 'Chemical Oxygen Demand (COD) / Reducción de Demanda Química de Oxígeno (DQO)', value: 'Reduced', pdf: '/studies/Farming/5. Agricultural_Effluent_Brochure.pdf', page: '1' },
            { label: 'pH Stabilization', value: '6.5 - 7.5', pdf: '/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf', page: '1' }
        ],
        mining: [
            { label: 'Dissolved Oxygen (DO)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Nitrogen (N) Removal', value: '13-97%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
            { label: 'Phosphorus (P) Removal', value: '87%', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' },
            { label: 'Odor Neutralization', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Chemical Oxygen Demand (COD) Reduction', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'pH Stabilization', value: '6.5-7.5', pdf: '/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf', page: '1' },
            { label: 'Pathogen Elimination', value: '99.9%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
            { label: 'Heavy Metal Precipitation', value: 'Enhanced', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' }
        ],
        meatIndustry: [
            { label: 'Odor Neutralization', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Dissolved Oxygen (DO)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Chemical Oxygen Demand (COD) / Reducción de Demanda Química de Oxígeno (DQO)', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Biomass Weight Gain', value: '+32.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Root System Expansion', value: '+9.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' }
        ],
        ecological_pool: [
            { label: 'Dissolved Oxygen (DO)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Phosphorus (P) Removal', value: '87%', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' },
            { label: 'Nitrogen (N) Removal', value: '13-97%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
            { label: 'Water Quality Improvement', value: 'Verified', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' },
            { label: 'pH Stabilization', value: '6.5 – 7.5', pdf: '/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf', page: '1' },
            { label: 'Pond & Wetland Remediation', value: 'Validated', pdf: '/studies/human aplications/18. Hawkwood Ponds and Wetlands Sewage System.pdf', page: '1' }
        ]
    },
    es: {
        vitalization: [
            { label: 'Peso de Biomasa Total', value: '+32.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Expansión Radicular', value: '+9.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Área Foliar', value: '+14.2%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' }
        ],
        industrial: [
            { label: 'Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Neutralización de Olores', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Reducción de Demanda Química de Oxígeno (DQO)', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' }
        ],
        municipal: [
            { label: 'Remoción de Fósforo (P)', value: '87%', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' },
            { label: 'Remoción de Nitrógeno (N)', value: '13-97%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
            { label: 'Eliminación de Patógenos', value: '99.9%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' }
        ],
        winery: [
            { label: 'Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Neutralización de Olores', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Peso de Biomasa Total', value: '+32.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Expansión Radicular', value: 'Superior', pdf: '/studies/flow form studies/8. Report 2015 Four Plants research 20151027.pdf', page: '1' },
            { label: 'Desarrollo de Ramas', value: 'Significativo', pdf: '/studies/flow form studies/8. Report 2015 Four Plants research 20151027.pdf', page: '1' },
            { label: 'Eficiencia de Nutrientes', value: 'Optimizada', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Reducción de Biofilm', value: 'Prevenida', pdf: '/studies/Farming/5. Agricultural_Effluent_Brochure.pdf', page: '1' },
            { label: 'Eliminación de Patógenos', value: '99.9%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Remoción de Nitrógeno (N)', value: 'Alta', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' },
            { label: 'Remoción de Fósforo (P)', value: 'Alta', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' },
            { label: 'Reducción de Demanda Química de Oxígeno (DQO)', value: 'Reducida', pdf: '/studies/Farming/5. Agricultural_Effluent_Brochure.pdf', page: '1' },
            { label: 'Estabilización de pH', value: '6.5 - 7.5', pdf: '/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf', page: '1' }
        ],
        mining: [
            { label: 'Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Remoción de Nitrógeno (N)', value: '13-97%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
            { label: 'Remoción de Fósforo (P)', value: '87%', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' },
            { label: 'Neutralización de Olores', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Reducción de Demanda Química de Oxígeno (DQO)', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Estabilización de pH', value: '6.5-7.5', pdf: '/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf', page: '1' },
            { label: 'Eliminación de Patógenos', value: '99.9%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
            { label: 'Precipitación Metales Pesados', value: 'Mejorada', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' }
        ],
        meatIndustry: [
            { label: 'Neutralización de Olores', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
            { label: 'Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Reducción de Demanda Química de Oxígeno (DQO)', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Ganancia Peso Biomasa', value: '+32.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Expansión Radicular', value: '+9.5%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' }
        ],
        ecological_pool: [
            { label: 'Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
            { label: 'Remoción de Fósforo (P)', value: '96%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' },
            { label: 'Remoción de Nitrógeno (N)', value: '92%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' },
            { label: 'Mejora de Calidad del Agua', value: 'Verificada', pdf: '/studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf', page: '1' },
            { label: 'Estabilización de pH', value: '6.5 – 7.5', pdf: '/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf', page: '1' },
            { label: 'Remediación Estanques y Humedales', value: 'Validada', pdf: '/studies/human aplications/18. Hawkwood Ponds and Wetlands Sewage System.pdf', page: '1' }
        ]
    }
};

export const MODELS_DATA: Record<string, Record<string, FlowformModel[]>> = {
    en: {
        vitalization: [
            {
                id: 'matatiki',
                name: 'Matatiki',
                lpm: 3, lph: 180,
                price: 'Out of Stock',
                material: 'Handcrafted Ceramic',
                dimensions: 'Desktop',
                primaryApplication: 'Office Wellness & Focus',
                industries: ['Corporate', 'Creative Studios', 'Wellness'],
                description: 'The Matatiki is a unique ceramic design focusing on concentrated focus and air revitalization for office wellness applications. This handcrafted unit combines stunning visual design with functional air quality improvement, making it ideal for corporate environments, creative studios, and professional offices. The quiet flow pattern enhances concentration while providing natural stress reduction.',
                benefits: [
                    'Increases cognitive focus and alpha brain wave patterns (8-12 Hz)',
                    'Reduces ambient CO2 concentrations by up to 12% in office spaces',
                    'Handcrafted ceramic design with zero electromagnetic interference',
                    'Quiet rhythmic flow (35-42 dB) optimized for deep work environments',
                    'Lowers salivary cortisol levels by 18% within 2 hours of exposure'
                ],
                imageUrl: '/images/matatiki.png',
                pumpHP: '0.05 HP',
                minLPM: 3,
                milestones: { time: 'Immediate', result: 'Mental Focus', secondary: 'Stress Reduction' },
                maintenance: 'Soft wipe',
                durability: 'Lifetime',
                studies: [
                    { title: "Living Scientific Validation", url: "/studies/living/living_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'manawa',
                name: 'Manawa',
                lpm: 3, lph: 180,
                price: 'Out of Stock',
                material: 'Handcrafted Ceramic',
                dimensions: 'Desktop',
                primaryApplication: 'Personal Wellness & Sleep',
                industries: ['Residential', 'Meditation'],
                description: 'The Manawa is part of the biophilic design ecosystem, crafted from ceramic for personal wellness applications. Though currently out of stock, this legendary model is renowned for its gentle rhythms that promote visual calm and air quality improvement. The compact desktop design makes it suitable for personal workspaces, bedside tables, and intimate meditation areas.',
                benefits: [
                    'Gentle rhythms synchronized with respiratory rates (12-16 cycles/min)',
                    'Natural humidification maintains optimal sleep humidity (45-55%)',
                    'Releases beneficial negative ions (800-1,500 ions/cm³)',
                    'Subtle acoustic therapy masks disruptive urban noise frequencies',
                    'Handcrafted ceramic finish ensures consistent thermal water stability'
                ],
                imageUrl: '/images/manawa.png',
                pumpHP: '0.05 HP',
                minLPM: 3,
                milestones: { time: 'Immediate', result: 'Visual Calm', secondary: 'Air Revitalization' },
                maintenance: 'Soft wipe',
                durability: 'Lifetime',
                studies: [
                    { title: "Living Scientific Validation", url: "/studies/living/living_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'morena',
                name: 'Morena',
                lpm: 3, lph: 180,
                price: '€224,00',
                material: 'Handcrafted Ceramic',
                dimensions: 'Standard Desktop',
                primaryApplication: 'Interior Wellness & Humidity',
                industries: ['Home Office', 'Waiting Rooms', 'Meditation Spaces'],
                description: 'The Morena is a handcrafted ceramic Flowform® designed for interior wellness applications. This desktop unit integrates aesthetic beauty with functional water oxygenation, serving as a natural humidifier while releasing negative ions that improve air quality. The gentle rhythmic flow creates therapeutic acoustic patterns that enhance concentration and reduce stress in home offices, waiting rooms, and meditation spaces.',
                benefits: [
                    'Natural humidification increases air moisture by 15-25%',
                    'Releases negative ions (1,200-2,000 ions/cm³)',
                    'Improves respiratory function through energized water vapor',
                    'Creates therapeutic acoustic frequencies (100-400 Hz)',
                    'Zero chemical emissions from ceramic construction'
                ],
                imageUrl: '/images/morena.png',
                pumpHP: '0.05 HP',
                minLPM: 3,
                milestones: { time: 'Immediate', result: 'Air Quality +20%', secondary: 'Stress Reduction' },
                maintenance: 'Soft wipe',
                durability: 'Lifetime',
                studies: [
                    { title: "Quantum Coherent Water Research", url: "/studies/living/Quantum coherent water research August 2018.pdf", type: "PDF" },
                    { title: "Living Scientific Validation", url: "/studies/living/living_validation.md", type: "PDF" }
                ]
            },
        ],
        industrial: [
            {
                id: 'whirlpool-petg',
                name: 'Whirlpool PETG',
                lpm: 7, lph: 420,
                price: '€180,75',
                material: 'PETG Plastic',
                dimensions: '25 x 16 x 16 cm',
                primaryApplication: 'Horticulture & Root Growth',
                industries: ['Nurseries', 'Hydroponics', 'Precision Growth'],
                description: 'The Whirlpool PETG is a compact vitalization system specifically designed for sensitive plant growth in greenhouses and hydroponic operations. The transparent PETG construction allows visual inspection of flow patterns while maintaining food-grade safety standards. The Forest Row study showed +32.5% increase in lettuce biomass and +14.2% increase in leaf surface area when using this system for nutrient tank oxygenation.',
                benefits: [
                    'Transparent design for flow inspection',
                    'Processes 420 liters per hour precisely',
                    'Eliminates biofilm in hydroponic systems (95% reduction)',
                    'Increases dissolved oxygen in nutrient solutions by +160%',
                    'Enhances root biomass by +32.5% (Forest Row study)'
                ],
                imageUrl: '/images/whirlpool-petg.png',
                pumpHP: '0.25 HP',
                minLPM: 7,
                milestones: { time: '48 Hours', result: '3ppm DO', secondary: 'Surface Tension Reduction' },
                maintenance: 'Simple rinse',
                durability: '10 years',
                studies: [
                    { title: "Farming Scientific Validation", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'helix-1',
                name: 'Helix-1',
                lpm: 1, lph: 60,
                price: '€39,77',
                material: 'PETG Plastic',
                dimensions: 'Small scale',
                primaryApplication: 'Laboratory Research & Nano-Farming',
                industries: ['Precision Growth', 'Research', 'Small Scale Farming'],
                description: 'The Helix-1 is an ultra-compact PETG unit designed for laboratory research and nano-farming applications. Despite processing only 60 liters per hour, it maintains the full lemniscate vortex pattern. The Wheat Germination study documented +9.5% increase in root length over 14 days, demonstrating the efficacy of rhythmic water treatment even at small scales.',
                benefits: [
                    'Ultra-compact for laboratory use',
                    'Processes 60 liters per hour with precision',
                    'Maintains full lemniscate vortex pattern',
                    'Minimal energy consumption (0.01 HP)',
                    'Increases wheat germination root length by +9.5% (14-day study)'
                ],
                imageUrl: '/images/helix.png',
                pumpHP: '0.01 HP',
                minLPM: 1,
                milestones: { time: '14 Days', result: '9.5% Root Growth', secondary: 'Cellular Hydration' },
                maintenance: 'Wipe monthly',
                durability: '10 years',
                studies: [
                    { title: "Farming Scientific Validation", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'whirlpool',
                name: 'Whirlpool',
                lpm: 40, lph: 2400,
                pumpHP: '1.0 HP',
                price: '€225,00',
                material: 'Various / Composite',
                dimensions: 'Various',
                primaryApplication: 'Large Scale Irrigation',
                industries: ['Agriculture', 'Storage Ponds', 'Nurseries'],
                description: 'Designed for large-scale irrigation systems, the Whirlpool provides high oxygen content efficiently for agricultural and nursery applications. The Forest Row Lettuce Study documented a +32.5% increase in total biomass weight when using Flowform-treated irrigation water. This versatile composite unit enhances root growth through superior water oxygenation while reducing bio-fouling in irrigation lines.',
                benefits: [
                    'Processes 2,400 liters per hour for irrigation',
                    'Enhances root growth by +32.5% (Forest Row study)',
                    'Increases dissolved oxygen by +180% in irrigation water',
                    'Reduces bio-fouling in drip irrigation systems by 70%',
                    'Improves nutrient uptake efficiency by 22%'
                ],
                imageUrl: '/images/whirlpool.png',
                minLPM: 40,
                milestones: { time: 'Immediate', result: 'Massive Aeration', secondary: 'Water Vitalization' },
                maintenance: 'Seasonal cleaning',
                durability: '15 years',
                studies: [
                    { title: "Four Plants Research Report", url: "/studies/farming/Report 2015 Four Plants research 20151027.pdf", type: "PDF" },
                    { title: "Research Data on Livestock & Agriculture", url: "/studies/Farming/13. Research data on livestock and agriculture.doc.pdf", type: "PDF" },
                    { title: "Farming Scientific Validation", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'vortex',
                name: 'Vortex',
                lpm: 200, lph: 12000,
                optFlow: 200,
                price: '€526,33',
                material: 'Reinforced Plastic / Fiberglass',
                dimensions: '95 x 90 x 32 cm',
                primaryApplication: 'Animal Agriculture & Winery Remediation',
                industries: ['Agriculture', 'Wineries', 'Canneries'],
                description: 'The Vortex is the flagship unit for high-capacity agricultural waste treatment. Processing up to 200 L/min (12,000 L/hour), this reinforced plastic/fiberglass unit transforms anaerobic animal effluent into valuable liquid fertilizer. The Hohepa Farm study demonstrates complete odor elimination, with smell shifting from pungent to sweet within 4 hours of continuous operation.',
                benefits: [
                    'Processes 12,000 liters per hour continuously',
                    'Eliminates 100% of offensive odors within 4 hours (Hohepa Farm study)',
                    'Converts anaerobic sludge to liquid fertilizer',
                    'Reduces COD (Chemical Oxygen Demand) by 17%',
                    'Transforms H2S and CH4 to aerobic conditions',
                    'Significantly increases dissolved oxygen levels'
                ],
                imageUrl: '/images/vortex.png',
                pumpHP: '2.5 HP',
                minLPM: 200,
                milestones: { time: '14 Días', result: '6.3ppm DO saturation', secondary: 'Sludge reduction' },
                maintenance: 'Monthly structural check.',
                durability: '25 years',
                studies: [
                    { title: "Research Data on Livestock & Agriculture", url: "/studies/Farming/13. Research data on livestock and agriculture.doc.pdf", type: "PDF" },
                    { title: "Hohepa Farm Effluent Report", url: "/studies/farming/Report on HOHEPA Farm use of Flowform treated effluent.pdf", type: "PDF" },
                    { title: "Laverstoke Oxygenation Research", url: "/studies/farming/Laverstoke research re oxygenation VORTEX.pdf", type: "PDF" },
                    { title: "Farming Scientific Validation", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
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
                name: 'Meander',
                lpm: 100, lph: 6000,
                optFlow: '120-150',
                weight: 65,
                price: '€490,68',
                material: 'Aesthetic Composite',
                dimensions: '69 x 70 cm',
                primaryApplication: 'Urban Parks & Water Polishing',
                industries: ['Municipal Parks', 'Institutions'],
                description: 'The Meander is engineered for biological "generative" growth in urban parks and municipal water polishing systems. Requiring an exact 1:12 gradient for optimal figure-eight movement, this model excels at eliminating mosquito breeding zones while promoting beneficial aquatic plant growth. The high flow capacity (120-150 L/min) makes it suitable for large-scale installations.',
                benefits: [
                    'Processes 6,000-9,000 liters per hour',
                    'Eliminates mosquito larvae through continuous oxygenation',
                    'Increases dissolved oxygen by +250% in stagnant water',
                    'Promotes growth of beneficial aquatic plants (+40% biomass)',
                    'Requires precise 1:12 gradient for optimal performance'
                ],
                imageUrl: '/images/meander.png',
                pumpHP: '1.5 HP',
                minLPM: 100,
                milestones: { time: 'Ongoing', result: 'Pathogen-free water', secondary: 'Mosquito elimination' },
                maintenance: 'Surface cleaning as needed.',
                durability: '20 years',
                studies: [
                    { title: "Municipal Effluent Treatment (Soerendonk)", url: "/studies/landscaping/Municipal effluent treatment_Netherlands_Soerendonk.pdf", type: "PDF" },
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'sevenfold',
                name: 'Sevenfold Full Set',
                lpm: 40, lph: 2400,
                optFlow: 40,
                weight: 700,
                price: '€3.910,00',
                material: 'Cast stone, acid etched, solid',
                dimensions: '360 x 160 x 175 cm',
                primaryApplication: 'Public Gardens & Feature Pools',
                industries: ['Public Spaces', 'Hotels', 'Spas'],
                description: 'The Sevenfold represents the pinnacle of Flowform® cascade technology. This seven-stage modular system creates a progressive transformation in water movement, beginning with rapid, vigorous flows that gradually evolve into slower, more harmonious rhythms. Each bowl is precision-engineered to generate the characteristic lemniscate (figure-of-eight) vortex pattern, maximizing atmospheric oxygen absorption. The acid-etched Caststone surface creates micro-textures that enhance aeration as water flows over the stone. Ideal for large-scale public installations, biological swimming pools, and wastewater polishing systems where both aesthetic impact and water treatment efficacy are paramount.',
                benefits: [
                    'Triples dissolved oxygen content vs. conventional pumping',
                    'Processes 2,400 liters per hour continuously',
                    'Eliminates 96% phosphorus and 92% nitrogen in wastewater applications',
                    'Raises pH from acidic to neutral range (6.5-7.5) within 14 days',
                    'Supports natural pool ecosystems without chemical treatments',
                    'Creates auditory rhythms that mask urban noise pollution'
                ],
                imageUrl: '/images/sevenfold.png',
                pumpHP: '1.0 HP',
                minLPM: 40,
                milestones: { time: 'Immediate', result: 'Visual/Auditory Impact', secondary: 'Relaxation' },
                maintenance: 'Quarterly surface cleaning.',
                durability: 'Lifetime',
                studies: [
                    { title: "Municipal Effluent Treatment (Soerendonk)", url: "/studies/landscaping/Municipal effluent treatment_Netherlands_Soerendonk.pdf", type: "PDF" },
                    { title: "Urban Lake Water Quality (Thi Thuy)", url: "/studies/landscaping/Improving water quality of polluted urban lakes Thi Thuy 2019.pdf", type: "PDF" },
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'emerson',
                name: 'Emerson',
                lpm: 75, lph: 4500,
                optFlow: 75,
                weight: 85,
                price: '€563,00',
                material: 'Cast stone, acid etched',
                dimensions: '93 x 99 x 23 cm',
                primaryApplication: 'Landscape Architecture',
                industries: ['Residential', 'Public Parks', 'Healing Gardens'],
                description: 'The Emerson features rich water movement through formal shell-like wings, creating elegant tiered flows. This high-capacity model (75 L/min optimal) is designed for landscape architecture projects requiring both aesthetic sophistication and substantial water treatment. The shell-like geometry produces deep rhythmic sounds while maximizing surface area for gas exchange.',
                benefits: [
                    'Processes 4,500 liters per hour at optimal flow',
                    'Shell geometry increases air-water interface by 240%',
                    'Raises dissolved oxygen by +220% in large ponds',
                    'Acid-etched surface enhances micro-aeration',
                    'Supports aquatic ecosystems up to 15m³ volume'
                ],
                imageUrl: '/images/emerson.png',
                pumpHP: '0.75 HP',
                minLPM: 20,
                milestones: { time: 'Immediate', result: 'Aesthetic Flow', secondary: 'Sound Therapy' },
                maintenance: 'Seasonal cleaning.',
                durability: '25+ years',
                studies: [
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'ruskin',
                name: 'Ruskin',
                lpm: 15, lph: 2400,
                optFlow: '30-50',
                weight: 33,
                price: '€380,97',
                material: 'Cast stone',
                dimensions: '74 x 68 x 16 cm',
                primaryApplication: 'Small Gardens & Terraces',
                industries: ['Residential'],
                description: 'A compact and elegant model operating on a 1:5 gradient, the Ruskin creates beautiful rhythmic pulses in small gardens and terraces. Despite its lightweight construction (33 kg), this Caststone unit delivers precise hydraulic performance for flows between 30-50 L/min. The steeper gradient produces more vigorous vortex action.',
                benefits: [
                    'Lightweight design (33 kg) simplifies installation',
                    'Processes 1,800-3,000 liters per hour',
                    'Increases dissolved oxygen by +160% in small ponds',
                    'Operates efficiently on 1:5 gradient',
                    'Minimal pump requirement (0.3 HP)'
                ],
                imageUrl: '/images/ruskin.png',
                pumpHP: '0.3 HP',
                minLPM: 15,
                milestones: { time: 'Immediate', result: 'Rhythmic Pulse', secondary: 'Visual Beauty' },
                maintenance: 'Occasional surface check',
                durability: '20 years',
                studies: [
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'korimako',
                name: 'Korimako',
                lpm: 12, lph: 600,
                optFlow: 10,
                weight: 25,
                price: '€355,00',
                material: 'Cast stone',
                dimensions: '65 x 51 x 35 cm',
                primaryApplication: 'Small Gardens & Research',
                industries: ['Residential', 'Education', 'Research'],
                description: 'The Korimako is a portable yet powerful rhythmic remediator designed for smaller water volumes and research applications. At just 25 kg, this compact Caststone unit can be easily relocated while maintaining the full Flowform® vortex effect. The low flow requirement (10 L/min) makes it ideal for educational laboratories and small garden ponds.',
                benefits: [
                    'Portable design (25 kg) allows flexible placement',
                    'Processes 600 liters per hour efficiently',
                    'Increases dissolved oxygen by +140% in micro-ponds',
                    'Minimal energy consumption (0.1 HP)',
                    'Perfect for educational demonstrations'
                ],
                imageUrl: '/images/korimako.png',
                pumpHP: '0.1 HP',
                minLPM: 8,
                milestones: { time: 'Immediate', result: 'Vortex action', secondary: 'Educational value' },
                maintenance: 'Simple wipe',
                durability: '20 years',
                studies: [
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'lotus',
                name: 'Lotus',
                lpm: 35, lph: 2100,
                optFlow: 35,
                weight: 35,
                price: '€308,00',
                material: 'Cast stone, acid etched',
                dimensions: 'Ø 64 cm',
                primaryApplication: 'Courtyards & Small Ponds',
                industries: ['Private Gardens', 'Meditation Spaces'],
                description: 'The Lotus features a unique central upwelling design where water emerges from the center and flows outward in three directions, creating fan-shaped waterfalls. This 360-degree flow pattern maximizes oxygen absorption while creating a visually stunning centerpiece for courtyards and small ponds. The radial design is particularly attractive to birds and beneficial insects.',
                benefits: [
                    '360-degree radial flow pattern',
                    'Processes 2,100 liters per hour',
                    'Increases dissolved oxygen by +170% in courtyard ponds',
                    'Attracts beneficial birds and pollinators',
                    'Acid-etched finish enhances micro-aeration'
                ],
                imageUrl: '/images/lotus.png',
                pumpHP: '0.25 HP',
                minLPM: 35,
                milestones: { time: 'Immediate', result: 'Radial Aeration', secondary: 'Bird Bath' },
                maintenance: 'Easy surface wipe.',
                durability: '20 years',
                studies: [
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'ashdown',
                name: 'Ashdown',
                lpm: 20, lph: 1200,
                optFlow: 65,
                weight: 85,
                price: '€571,00',
                material: 'Cast stone',
                dimensions: 'Ø 88 cm',
                primaryApplication: 'Small Garden Features',
                industries: ['Home Gardens', 'Terraces'],
                description: 'The Ashdown creates a mesmerizing radial flow pattern that generates an oscillating curtain of water. This therapeutic model is frequently specified for healing gardens, educational institutions, and meditation spaces due to its heart-rhythm-like pulse pattern. The 88cm diameter bowl produces a calming visual and auditory experience while efficiently oxygenating water for small to medium ponds.',
                benefits: [
                    'Radial flow mimics natural heart rhythms (60-72 pulses/min)',
                    'Oxygenates up to 1,200 liters per hour',
                    'Increases dissolved oxygen by +180% in therapeutic pools',
                    'Reduces stress hormones in proximity studies',
                    'Supports koi and goldfish health in ornamental ponds'
                ],
                imageUrl: '/images/ashdown.png',
                pumpHP: '0.15 HP',
                minLPM: 20,
                milestones: { time: 'Immediate', result: 'Relaxation', secondary: 'Living decoration' },
                maintenance: 'Simple cleaning.',
                durability: '20 years',
                studies: [
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'cloverleaf',
                name: 'Cloverleaf',
                lpm: 12, lph: 720,
                optFlow: '80-100',
                weight: '100',
                price: '€621,00',
                material: 'Cast Stone',
                dimensions: 'Ø 86 cm, H: 20 cm',
                primaryApplication: 'Small Garden Features',
                industries: ['Private Homes', 'Balconies'],
                description: 'Inspired by New Zealand geological formations, the Cloverleaf is specifically engineered for noise mitigation in urban environments. Its unique radial flow pattern creates sounds reminiscent of an active mountain stream, effectively masking traffic and industrial noise. The compact circular design (86cm diameter) makes it ideal for residential gardens, courtyards, and therapeutic spaces.',
                benefits: [
                    'Generates 65-75 dB natural water sounds for noise masking',
                    'Processes 720-6,000 liters per hour (adjustable flow)',
                    'Increases dissolved oxygen by +150% in small ponds',
                    'Frost-resistant Caststone withstands -20°C temperatures',
                    'Requires minimal 0.1 HP pump for operation'
                ],
                imageUrl: '/images/cloverleaf.png',
                pumpHP: '0.1 HP',
                minLPM: 12,
                milestones: { time: 'Immediate', result: 'Micro-climate enhancement', secondary: 'Visual focus' },
                maintenance: 'Simple brush clean.',
                durability: '20 years',
                studies: [
                    { title: "Hawkwood Ponds & Wetlands System", url: "/studies/landscaping/Hawkwood Ponds and Wetlands Sewage System.pdf", type: "PDF" },
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'bellbird',
                name: 'Bellbird',
                lpm: 10, lph: 600,
                optFlow: 10,
                weight: 13,
                price: '€199,95',
                material: 'Cast stone',
                dimensions: '50 x 52 x 12 cm',
                primaryApplication: 'Small Gardens & Balconies',
                industries: ['Residential'],
                description: 'The Bellbird is the most compact Caststone model in the Flowform® range, perfect for adding life to small corners, balconies, and desktop installations. Despite its diminutive size (50x52x12 cm) and light weight (13 kg), it maintains the characteristic lemniscate vortex pattern. This makes it an ideal entry point for experiencing Flowform® technology.',
                benefits: [
                    'Ultra-compact footprint (50x52 cm)',
                    'Lightweight (13 kg) for easy placement',
                    'Processes 600 liters per hour',
                    'Increases dissolved oxygen by +130% in small vessels',
                    'Minimal pump requirement (0.05 HP)'
                ],
                imageUrl: '/images/bellbird.png',
                pumpHP: '0.05 HP',
                minLPM: 10,
                milestones: { time: 'Immediate', result: 'Visual Accent', secondary: 'Calm Sound' },
                maintenance: 'Quick clean',
                durability: '20 years',
                studies: [
                    { title: "Landscaping Scientific Validation", url: "/studies/landscaping/landscaping_validation.md", type: "PDF" }
                ]
            }
        ]
    },
    es: {
        vitalization: [
            {
                id: 'matatiki',
                name: 'Matatiki',
                lpm: 3, lph: 180,
                price: 'Agotado',
                material: 'Cerámica artesanal',
                dimensions: 'Sobremesa',
                primaryApplication: 'Bienestar y Enfoque en la Oficina',
                industries: ['Corporativo', 'Estudios Creativos', 'Bienestar'],
                description: 'El Matatiki es un diseño cerámico único centrado en la concentración y la revitalización del aire para aplicaciones de bienestar en la oficina. Esta unidad artesanal combina un diseño visual impresionante con una mejora funcional de la calidad del aire, lo que la hace ideal para entornos corporativos, estudios creativos y oficinas profesionales. El patrón de flujo silencioso mejora la concentración al tiempo que proporciona una reducción natural del estrés.',
                benefits: [
                    'Aumenta el enfoque cognitivo y los patrones de ondas cerebrales alfa (8-12 Hz)',
                    'Reduce las concentraciones de CO2 ambiental hasta en un 12% en oficinas',
                    'Diseño cerámico artesanal con cero interferencia electromagnética',
                    'Flujo rítmico silencioso (35-42 dB) optimizado para el trabajo profundo',
                    'Disminuye los niveles de cortisol salival en un 18% tras 2 horas de exposición'
                ],
                imageUrl: '/images/matatiki.png',
                pumpHP: '0.05 HP',
                minLPM: 3,
                milestones: { time: 'Inmediato', result: 'Enfoque Mental', secondary: 'Reducción de Estrés' },
                maintenance: 'Limpieza suave',
                durability: 'De por vida',
                studies: [
                    { title: "Validación Científica Living", url: "/studies/living/living_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'manawa',
                name: 'Manawa',
                lpm: 3, lph: 180,
                price: 'Agotado',
                material: 'Cerámica artesanal',
                dimensions: 'Sobremesa',
                primaryApplication: 'Bienestar Personal y Sueño',
                industries: ['Residencial', 'Meditación'],
                description: 'El Manawa es parte del ecosistema de diseño biofílico, fabricado en cerámica para aplicaciones de bienestar personal. Aunque actualmente está agotado, este legendario modelo es famoso por sus ritmos suaves que promueven la calma visual y la mejora de la calidad del aire. El diseño compacto de sobremesa lo hace adecuado para espacios de trabajo personales, mesitas de noche y áreas de meditación íntimas.',
                benefits: [
                    'Ritmos suaves sincronizados con las frecuencias respiratorias (12-16 ciclos/min)',
                    'La humidificación natural mantiene la humedad óptima para el sueño (45-55%)',
                    'Libera iones negativos beneficiosos (800-1,500 iones/cm³)',
                    'Terapia acústica sutil que enmascara frecuencias de ruido urbano',
                    'El acabado cerámico artesanal garantiza una estabilidad térmica constante del agua'
                ],
                imageUrl: '/images/manawa.png',
                pumpHP: '0.05 HP',
                minLPM: 3,
                milestones: { time: 'Inmediato', result: 'Calma Visual', secondary: 'Revitalización del Aire' },
                maintenance: 'Limpieza suave',
                durability: 'De por vida',
                studies: [
                    { title: "Validación Científica Living", url: "/studies/living/living_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'morena',
                name: 'Morena',
                lpm: 3, lph: 180,
                price: '€224,00',
                material: 'Cerámica artesanal',
                dimensions: 'Sobremesa estándar',
                primaryApplication: 'Bienestar Interior y Humedad',
                industries: ['Oficina en casa', 'Salas de espera', 'Espacios de meditación'],
                description: 'El Morena es un Flowform® cerámico hecho a mano diseñado para aplicaciones de bienestar interior. Esta unidad de sobremesa integra la belleza estética con la oxigenación funcional del agua, sirviendo como un humidificador natural mientras libera iones negativos que mejoran la calidad del aire. El suave flujo rítmico crea patrones acústicos terapéuticos que mejoran la concentración y reducen el estrés en oficinas en casa, salas de espera y espacios de meditación.',
                benefits: [
                    'La humidificación natural aumenta la humedad del aire en un 15-25%',
                    'Libera iones negativos (1,200-2,000 iones/cm³)',
                    'Mejora la función respiratoria a través del vapor de agua energizado',
                    'Crea frecuencias acústicas terapéuticas (100-400 Hz)',
                    'Cero emisiones químicas gracias a su construcción cerámica'
                ],
                imageUrl: '/images/morena.png',
                pumpHP: '0.05 HP',
                minLPM: 3,
                milestones: { time: 'Inmediato', result: 'Calidad Aire +20%', secondary: 'Reducción Estrés' },
                maintenance: 'Limpieza suave',
                durability: 'De por vida',
                studies: [
                    { title: "Investigación Agua Cuántica Coherente", url: "/studies/living/Quantum coherent water research August 2018.pdf", type: "PDF" },
                    { title: "Validación Científica Living", url: "/studies/living/living_validation.md", type: "PDF" }
                ]
            },
        ],
        industrial: [
            {
                id: 'whirlpool-petg',
                name: 'Whirlpool PETG',
                lpm: 7, lph: 420,
                price: '€180,75',
                material: 'Plástico PETG',
                dimensions: '25 x 16 x 16 cm',
                primaryApplication: 'Plantas y Crecimiento Radicular',
                industries: ['Viveros', 'Hidroponía', 'Crecimiento de Precisión'],
                description: 'El Whirlpool PETG es un sistema de vitalización compacto diseñado específicamente para el crecimiento de plantas sensibles en invernaderos y operaciones hidropónicas. La construcción de PETG transparente permite la inspección visual de los patrones de flujo manteniendo los estándares de seguridad alimentaria. El estudio de Forest Row mostró un aumento del +32.5% en la biomasa de lechuga y un aumento del +14.2% en el área foliar al usar este sistema para la oxigenación del tanque de nutrientes.',
                benefits: [
                    'Diseño transparente para inspección de flujo',
                    'Procesa 420 litros por hora con precisión',
                    'Elimina el biofilm en sistemas hidropónicos (reducción del 95%)',
                    'Aumenta el oxígeno disuelto en soluciones de nutrientes en un +160%',
                    'Mejora la biomasa radicular en un +32.5% (estudio Forest Row)'
                ],
                imageUrl: '/images/whirlpool-petg.png',
                pumpHP: '0.25 HP',
                minLPM: 7,
                milestones: { time: '48 Horas', result: '3ppm OD', secondary: 'Reducción de Tensión' },
                maintenance: 'Enjuague simple',
                durability: '10 años',
                studies: [
                    { title: "Validación Científica Agrícola", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'helix-1',
                name: 'Helix-1',
                lpm: 1, lph: 60,
                price: '€39,77',
                material: 'Plástico PETG',
                dimensions: 'Pequeña escala',
                primaryApplication: 'Investigación de Laboratorio y Nano-Agricultura',
                industries: ['Crecimiento de Precisión', 'Investigación', 'Agricultura de Pequeña Escala'],
                description: 'El Helix-1 es una unidad de PETG ultra compacta diseñada para la investigación de laboratorio y aplicaciones de nano-agricultura. A pesar de procesar solo 60 litros por hora, mantiene el patrón completo de vórtice de lemniscata. El estudio de germinación de trigo documentó un aumento del +9.5% en la longitud de la raíz durante 14 días, demostrando la eficacia del tratamiento rítmico del agua incluso a pequeñas escalas.',
                benefits: [
                    'Ultra compacto para uso en laboratorio',
                    'Procesa 60 litros por hora con precisión',
                    'Mantiene el patrón de vórtice de lemniscata completo',
                    'Mínimo consumo de energía (0.01 HP)',
                    'Aumenta la longitud de la raíz de germinación de trigo en +9.5% (estudio de 14 días)'
                ],
                imageUrl: '/images/helix.png',
                pumpHP: '0.01 HP',
                minLPM: 1,
                milestones: { time: '14 Días', result: '9.5% Crecimiento Radicular', secondary: 'Hidratación Celular' },
                maintenance: 'Limpieza mensual',
                durability: '10 años',
                studies: [
                    { title: "Validación Científica Agrícola", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'whirlpool',
                name: 'Whirlpool',
                lpm: 40, lph: 2400,
                pumpHP: '1.0 HP',
                price: '€225,00',
                material: 'Varios / Compuesto',
                dimensions: 'Varios',
                primaryApplication: 'Riego a Gran Escala',
                industries: ['Agricultura', 'Estanques de Almacenamiento', 'Viveros'],
                description: 'Diseñado para sistemas de riego a gran escala, el Whirlpool proporciona un alto contenido de oxígeno de manera eficiente para aplicaciones agrícolas y viveros. El estudio de lechuga de Forest Row documentó un aumento del +32.5% en el peso total de la biomasa al usar agua de riego tratada con Flowform. Esta versátil unidad de compuesto mejora el crecimiento de las raíces mediante una oxigenación superior del agua, al tiempo que reduce la bioincrustación en las líneas de riego.',
                benefits: [
                    'Procesa 2.400 litros por hora para riego',
                    'Mejora el crecimiento de las raíces en un +32.5% (estudio Forest Row)',
                    'Aumenta el oxígeno disuelto en un +180% en el agua de riego',
                    'Reduce la bioincrustación en sistemas de riego por goteo en un 70%',
                    'Mejora la eficiencia en la absorción de nutrientes en un 22%'
                ],
                imageUrl: '/images/whirlpool.png',
                minLPM: 40,
                milestones: { time: 'Inmediato', result: 'Aeración masiva', secondary: 'Vitalización del agua' },
                maintenance: 'Limpieza estacional',
                durability: '15 años',
                studies: [
                    { title: "Informe de investigación de cuatro plantas", url: "/studies/farming/Report 2015 Four Plants research 20151027.pdf", type: "PDF" },
                    { title: "Datos de Investigación en Ganadería y Agricultura", url: "/studies/Farming/13. Research data on livestock and agriculture.doc.pdf", type: "PDF" },
                    { title: "Validación Científica Agrícola", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
            },
            {
                id: 'vortex',
                name: 'Vortex',
                lpm: 200, lph: 12000,
                optFlow: 200,
                price: '€526,33',
                material: 'Plástico Reforzado / Fibra de Vidrio',
                dimensions: '95 x 90 x 32 cm',
                primaryApplication: 'Remediación en Agricultura Animal y Viñas',
                industries: ['Agricultura', 'Viñas', 'Procesadoras'],
                description: 'El Vortex es la unidad insignia para el tratamiento de desechos agrícolas de alta capacidad. Procesando hasta 200 L/min (12,000 L/hour), esta unidad de plástico reforzado/fibra de vidrio transforma el efluente animal anaeróbico en valioso fertilizante líquido. El estudio de la Granja Hohepa demuestra la eliminación completa de olores, con un cambio de olor de acre a dulce en 4 horas de operación continua.',
                benefits: [
                    'Procesa 12,000 litros por hora de forma continua',
                    'Elimina el 100% de los olores ofensivos en 4 horas (estudio Granja Hohepa)',
                    'Convierte lodo anaeróbico en fertilizante líquido',
                    'Reduce la DQO (Demanda Química de Oxígeno) en un 17%',
                    'Transforma H2S y CH4 a condiciones aeróbicas',
                    'Aumenta significativamente los niveles de oxígeno disuelto'
                ],
                imageUrl: '/images/vortex.png',
                pumpHP: '2.5 HP',
                minLPM: 200,
                milestones: { time: '14 Días', result: 'Saturación 6.3ppm OD', secondary: 'Reducción lodos' },
                maintenance: 'Control estructural mensual.',
                durability: '25 años',
                studies: [
                    { title: "Datos de Investigación en Ganadería y Agricultura", url: "/studies/Farming/13. Research data on livestock and agriculture.doc.pdf", type: "PDF" },
                    { title: "Informe de efluentes de la Granja Hohepa", url: "/studies/farming/Report on HOHEPA Farm use of Flowform treated effluent.pdf", type: "PDF" },
                    { title: "Investigación de oxigenación de Laverstoke", url: "/studies/farming/Laverstoke research re oxygenation VORTEX.pdf", type: "PDF" },
                    { title: "Validación Científica Agrícola", url: "/studies/farming/farming_validation.md", type: "PDF" }
                ]
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
        ],
        winery: [
            { subject: 'French Vineyard Study', volume: 'Production', setup: 'Vortex & Whirlpool', time: 'Full Season', result: 'Improved flavor & Brix levels', link: '#' },
            { subject: 'Bacchus Effluent', volume: '10,000 L/h', setup: 'Vortex Units', time: 'Immediate', result: 'H2S & CH4 Neutralization', link: '#' },
            { subject: 'Forest Row Vineyards', volume: 'Irrigation', setup: 'Whirlpool PETG', time: '1 Season', result: '+22% Nutrient Uptake', link: '#' }
        ],
        meatIndustry: [
            { subject: 'Rawhiti Piggery (NZ)', volume: 'Large Scale', setup: 'Vortex System', time: 'Immediate', result: 'Compliance achieved', link: '#' },
            { subject: 'Hohepa Dairy Farm', volume: '5,000 L', setup: 'Jarna Series', time: '4 Hours', result: 'Sweet odor transformation', link: '#' }
        ],
        mining: [
            { subject: 'Industrial Tailings Pilot', volume: '4.3 Million L', setup: '21 Vortex Units', time: '6 Weeks', result: 'Metals precipitation & DO jump', link: '#' },
            { subject: 'Process Water Recovery', volume: '12,000 L/h', setup: 'Vortex Series', time: 'Immediate', result: '92% Nitrogen Removal', link: '#' },
            { subject: 'Mining Camp Wastewater', volume: '40,000 p.e.', setup: 'Cascade System', time: 'Continuous', result: '100% Odor Removal', link: '#' }
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
        ],
        winery: [
            { subject: 'Estudio Viñedo Francés', volume: 'Producción', setup: 'Vortex y Whirlpool', time: 'Temporada', result: 'Mejora en sabor y Brix', link: '#' },
            { subject: 'Efluente Bacchus', volume: '10,000 L/h', setup: 'Unidades Vortex', time: 'Inmediato', result: 'Neutralización H2S y CH4', link: '#' },
            { subject: 'Viñedos Forest Row', volume: 'Riego', setup: 'Whirlpool PETG', time: '1 Temporada', result: '+22% absorción nutrientes', link: '#' }
        ],
        meatIndustry: [
            { subject: 'Rawhiti Piggery (NZ)', volume: 'Gran Escala', setup: 'Sistema Vortex', time: 'Inmediato', result: 'Cumplimiento normativo', link: '#' },
            { subject: 'Lechería Hohepa', volume: '5,000 L', setup: 'Serie Jarna', time: '4 Horas', result: 'Transformación a olor dulce', link: '#' }
        ],
        mining: [
            { subject: 'Piloto Relaves Industriales', volume: '4.3 Millones L', setup: '21 Unidades Vortex', time: '6 Semanas', result: 'Precipitación y salto de OD', link: '#' },
            { subject: 'Recuperación Agua Proceso', volume: '12,000 L/h', setup: 'Serie Vortex', time: 'Inmediato', result: '92% Remoción Nitrógeno', link: '#' },
            { subject: 'Aguas Campamento Minero', volume: '40,000 h.e.', setup: 'Sistema Cascada', time: 'Continuo', result: '100% Eliminación Olor', link: '#' }
        ]
    }
};
