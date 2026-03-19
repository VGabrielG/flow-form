import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';
import { CoreTechnologySectionComponent } from '../../components/core-technology-section/core-technology-section.component';
import { MetricCardComponent } from '../../components/metric-card/metric-card.component';
import { TechnicalEvaluationCTAComponent } from '../../components/technical-evaluation-cta/technical-evaluation-cta.component';

export interface Industry {
  id: string;
  icon: string;
  labelEs: string;
  labelEn: string;
  theme: {
    btnActive: string;
    btnHover: string;
    bannerBg: string;
    bannerLabel: string;
    cardBg: string;
    cardBorder: string;
    cardHover: string;
    cardTitle: string;
    cardDesc: string;
    metricVariant: 'stone' | 'slate' | 'amber' | 'green' | 'red' | 'cyan' | 'emerald';
  };
  pillars: { icon: string; titleEs: string; titleEn: string; descEs: string; descEn: string }[];
  applicationAreas: { id: string; titleEs: string; titleEn: string; locationEs: string; locationEn: string; detailsEs: string; detailsEn: string }[];
  successStories: { labelEs: string; labelEn: string; titleEs: string; titleEn: string; bodyEs: string; bodyEn: string; beforeLabel: string; beforeValue: string; afterLabel: string; afterValue: string; pdfLabel: string; pdf: string }[];
  metrics: { label: string; value: string; pdf: string; page: string }[];
  empty?: boolean;
}

@Component({
  selector: 'app-meat-industry',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent,
    CoreTechnologySectionComponent,
    MetricCardComponent,
    TechnicalEvaluationCTAComponent
  ],
  templateUrl: './meat-industry.html',
  styleUrl: './meat-industry.css'
})
export class MeatIndustryComponent {
  lang = inject(LanguageService);
  data = inject(DataService);

  activeIndustry: string | null = null;
  activeArea: string | null = null;

  toggleIndustry(id: string) {
    if (this.activeIndustry === id) {
      this.activeIndustry = null;
      this.activeArea = null;
    } else {
      this.activeIndustry = id;
      this.activeArea = null;
    }
  }

  toggleArea(id: string) {
    this.activeArea = this.activeArea === id ? null : id;
  }

  get l() { return this.lang.language(); }

  get industries(): Industry[] {
    return [
      {
        id: 'piggeries',
        icon: '🐷',
        labelEs: 'Criaderos de Cerdos',
        labelEn: 'Piggeries',
        theme: {
          btnActive: 'bg-stone-800 border-stone-600 text-white shadow-xl scale-[1.03]',
          btnHover: 'hover:border-stone-500 hover:shadow-lg hover:scale-[1.02]',
          bannerBg: 'bg-stone-900 text-white',
          bannerLabel: 'text-stone-400',
          cardBg: 'bg-stone-50/80',
          cardBorder: 'border-stone-200',
          cardHover: 'hover:border-stone-400 hover:shadow-md',
          cardTitle: 'text-stone-800',
          cardDesc: 'text-stone-600',
          metricVariant: 'stone'
        },
        pillars: [
          {
            icon: '💨',
            titleEs: 'Eliminación de Olores',
            titleEn: 'Odor Elimination',
            descEs: 'El movimiento rítmico disuelve costras sólidas e introduce oxígeno, eliminando el 100% de olores ofensivos.',
            descEn: 'Rhythmic movement dissolves solid crusts and introduces oxygen, eliminating 100% of offensive odors.'
          },
          {
            icon: '🦠',
            titleEs: 'Digestión Aeróbica',
            titleEn: 'Aerobic Digestion',
            descEs: 'Transforma la digestión anaeróbica a aeróbica, eliminando metano y gases nocivos para los animales.',
            descEn: 'Transforms digestion from anaerobic to aerobic, eliminating methane and harmful gases for animals.'
          },
          {
            icon: '♻️',
            titleEs: 'Fertilizante Líquido',
            titleEn: 'Liquid Fertilizer',
            descEs: 'El purín tratado se convierte en fertilizante líquido premium sin riesgo de quema de cultivos.',
            descEn: 'Treated slurry becomes premium liquid fertilizer with no risk of crop burn.'
          },
          {
            icon: '🐷',
            titleEs: 'Salud Animal',
            titleEn: 'Animal Health',
            descEs: 'Reduce el estrés respiratorio y mejora el bienestar del hato al eliminar NH3 y H2S.',
            descEn: 'Reduces respiratory stress and improves herd wellbeing by eliminating NH3 and H2S.'
          }
        ],
        applicationAreas: [
          {
            id: 'pig-pits',
            titleEs: 'Fosos Bajo Galpones',
            titleEn: 'Under-Slat Pits',
            locationEs: 'Fosos de acumulación bajo los galpones de cría.',
            locationEn: 'Accumulation pits under breeding sheds.',
            detailsEs: 'El purín de cerdo genera costras sólidas que atrapan metano y olores fétidos. El movimiento rítmico del Flowform disuelve la costra superior al introducir un torrente oxigenado.',
            detailsEn: "Pig slurry generates solid crusts that trap methane and foul odors. Flowform's rhythmic movement dissolves the top crust by introducing an oxygenated torrent."
          },
          {
            id: 'pig-lagoon',
            titleEs: 'Laguna Anaeróbica Principal',
            titleEn: 'Main Anaerobic Lagoon',
            locationEs: 'Laguna de almacenamiento y tratamiento primario.',
            locationEn: 'Primary storage and treatment lagoon.',
            detailsEs: 'La laguna anaeróbica acumula gases de efecto invernadero. El Flowform aeróbica la laguna, acelera la digestión orgánica y convierte el problema en un activo.',
            detailsEn: 'The anaerobic lagoon accumulates greenhouse gases. Flowform aerates the lagoon, accelerates organic digestion and converts the problem into an asset.'
          }
        ],
        successStories: [
          {
            labelEs: 'PORCINOS',
            labelEn: 'PIGGERY',
            titleEs: 'Evitando el Cierre',
            titleEn: 'Avoiding Closure',
            bodyEs: 'Enfrentando cierre por olores ofensivos y multas. El sistema Vortex transformó la laguna, eliminó el olor y convirtió el problema en fertilizante.',
            bodyEn: 'Facing closure due to offensive odors and fines. The Vortex system transformed the lagoon, eliminated odor, and turned the problem into fertilizer.',
            beforeLabel: 'MULTAS / FINES',
            beforeValue: '$$$',
            afterLabel: 'RESULTADO / RESULT',
            afterValue: 'OPERATIVO',
            pdfLabel: 'VER BROCHURE TÉCNICO / VIEW BROCHURE',
            pdf: '/studies/Farming/5. Agricultural_Effluent_Brochure.pdf'
          }
        ],
        metrics: [
          { label: 'Odor Neutralization / Neutralización Olores', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
          { label: 'Dissolved Oxygen (DO) / Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
          { label: 'Chemical Oxygen Demand (COD) Reduction / Reducción de Demanda Química de Oxígeno (DQO)', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
          { label: 'Pathogen Reduction / Eliminación Patógenos', value: '99.9%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '2' }
        ]
      },
      {
        id: 'dairy',
        icon: '🐄',
        labelEs: 'Lecherías',
        labelEn: 'Dairy',
        theme: {
          btnActive: 'bg-slate-800 border-slate-600 text-white shadow-xl scale-[1.03]',
          btnHover: 'hover:border-slate-500 hover:shadow-lg hover:scale-[1.02]',
          bannerBg: 'bg-slate-900 text-white',
          bannerLabel: 'text-slate-400',
          cardBg: 'bg-slate-50/80',
          cardBorder: 'border-slate-200',
          cardHover: 'hover:border-slate-400 hover:shadow-md',
          cardTitle: 'text-slate-800',
          cardDesc: 'text-slate-600',
          metricVariant: 'slate'
        },
        pillars: [
          {
            icon: '🌱',
            titleEs: 'Fertilizante Premium',
            titleEn: 'Premium Fertilizer',
            descEs: 'El efluente oxigenado se absorbe como fertilizante premium sin quemar las hojas ni el pasto.',
            descEn: 'Oxygenated effluent is absorbed as premium fertilizer without burning leaves or pasture grass.'
          },
          {
            icon: '💨',
            titleEs: 'Sin Olores',
            titleEn: 'Odor-Free',
            descEs: 'El Flowform oxigena la fracción líquida, evitando que las fibras sueltas fermenten y huelan mal.',
            descEn: 'Flowform oxygenates the liquid fraction, preventing loose fibers from fermenting and smelling bad.'
          },
          {
            icon: '🐮',
            titleEs: 'Vacas Saludables',
            titleEn: 'Healthier Cows',
            descEs: 'Las vacas vuelven a pastar antes en zonas regadas con efluente, de 14 días a solo 4 días.',
            descEn: 'Cows return to graze effluent-irrigated zones faster, from 14 days down to just 4 days.'
          },
          {
            icon: '💧',
            titleEs: 'Agua Vitalizada',
            titleEn: 'Vitalized Water',
            descEs: 'Mejora la conversión alimenticia y la hidratación del ganado con agua de bebida tratada con Flowform.',
            descEn: 'Improves feed conversion and hydration of livestock with Flowform-treated drinking water.'
          }
        ],
        applicationAreas: [
          {
            id: 'dairy-collection',
            titleEs: 'Estanques de Recolección Primaria',
            titleEn: 'Primary Collection Ponds',
            locationEs: 'Estanques de recolección primaria de efluente lechero.',
            locationEn: 'Primary effluent collection ponds from milking operations.',
            detailsEs: 'El efluente de lechería es voluminoso. El Flowform oxigena constantemente la fracción líquida, evitando que la fibra suelta fermente y huela mal.',
            detailsEn: 'Dairy effluent is voluminous. Flowform constantly oxygenates the liquid fraction, preventing loose fibers from fermenting and smelling bad.'
          },
          {
            id: 'dairy-lagoon',
            titleEs: 'Lagunas de Almacenamiento',
            titleEn: 'Effluent Storage Lagoons',
            locationEs: 'Lagunas de almacenamiento de efluentes para riego posterior.',
            locationEn: 'Effluent storage lagoons for subsequent pasture irrigation.',
            detailsEs: 'Al rociar el líquido tratado en las praderas, el pasto lo absorbe como fertilizante premium sin quemar las hojas ni contaminar napas.',
            detailsEn: 'When the treated liquid is sprayed on pastures, grass absorbs it as premium fertilizer without burning leaves or contaminating aquifers.'
          }
        ],
        successStories: [
          {
            labelEs: 'LECHERÍA',
            labelEn: 'DAIRY FARM',
            titleEs: 'El Ciclo de Rechazo',
            titleEn: 'The Rejection Cycle',
            bodyEs: 'Las vacas rechazaban pastar zonas regadas con efluente por 14 días. Con Flowform, el efluente se volvió inodoro y las vacas volvieron en solo 4 días.',
            bodyEn: 'Cows refused to graze effluent-irrigated zones for 14 days. With Flowform, effluent became odorless and cows returned in just 4 days.',
            beforeLabel: 'ANTES / BEFORE',
            beforeValue: '14 Days',
            afterLabel: 'AHORA / NOW',
            afterValue: '4 Days',
            pdfLabel: 'VER REPORTE DE CAMPO / VIEW FIELD REPORT',
            pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf'
          }
        ],
        metrics: [
          { label: 'Odor Neutralization / Neutralización Olores', value: '100%', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' },
          { label: 'Dissolved Oxygen (DO) / Oxígeno Disuelto (OD)', value: '6.3 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
          { label: 'Chemical Oxygen Demand (COD) Reduction / Reducción de Demanda Química de Oxígeno (DQO)', value: '17%', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
          { label: 'Grazing Return / Retorno al Pastoreo', value: '14→4 days', pdf: '/studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf', page: '1' }
        ]
      },
      {
        id: 'piscicultura',
        icon: '🐟',
        labelEs: 'Piscicultura',
        labelEn: 'Fish Farming',
        theme: {
          btnActive: 'bg-amber-800 border-amber-600 text-white shadow-xl scale-[1.03]',
          btnHover: 'hover:border-amber-500 hover:shadow-lg hover:scale-[1.02]',
          bannerBg: 'bg-amber-900 text-amber-50',
          bannerLabel: 'text-amber-300',
          cardBg: 'bg-amber-50/80',
          cardBorder: 'border-amber-200',
          cardHover: 'hover:border-amber-400 hover:shadow-md',
          cardTitle: 'text-amber-900',
          cardDesc: 'text-amber-800',
          metricVariant: 'amber'
        },
        pillars: [
          {
            icon: '💨',
            titleEs: 'Oxigenación de Alta Densidad',
            titleEn: 'High-Density Oxygenation',
            descEs: 'Aumenta el Oxígeno Disuelto (OD) de forma pasiva, permitiendo mayores densidades de siembra sin estrés hipóxico.',
            descEn: 'Passively increases Dissolved Oxygen (DO), allowing higher stocking densities without hypoxic stress.'
          },
          {
            icon: '⚗️',
            titleEs: 'Control de Amoníaco',
            titleEn: 'Ammonia Control',
            descEs: 'Acelera la desgasificación de amoníaco tóxico y CO2, manteniendo un entorno químico equilibrado.',
            descEn: 'Accelerates degassing of toxic ammonia and CO2, maintaining a balanced chemical environment.'
          },
          {
            icon: '🛡️',
            titleEs: 'Inmunidad y Salud',
            titleEn: 'Health & Immunity',
            descEs: 'El agua revitalizada reduce el estrés biológico, mejorando las tasas de supervivencia y resistencia a enfermedades.',
            descEn: 'Revitalized water reduces biological stress, improving survival rates and disease resistance.'
          },
          {
            icon: '✨',
            titleEs: 'Claridad del Agua',
            titleEn: 'Water Clarity',
            descEs: 'El flujo en lemniscata interrumpe el crecimiento de algas nocivas y promueve la transparencia del agua.',
            descEn: 'Lemniscate flow disrupts harmful algae growth and promotes water transparency.'
          }
        ],
        applicationAreas: [
          {
            id: 'ras-systems',
            titleEs: 'Sistemas de Recirculación (RAS)',
            titleEn: 'Recirculating Systems (RAS)',
            locationEs: 'Retorno de agua tratada a tanques principales.',
            locationEn: 'Treated water return to main tanks.',
            detailsEs: 'Integración de cascadas Flowform en el retorno para re-oxigenar y vitalizar el agua "cansada" del sistema.',
            detailsEn: 'Integration of Flowform cascades in the return path to re-oxygenate and vitalize "tired" system water.'
          },
          {
            id: 'rearing-ponds',
            titleEs: 'Estanques de Engorde',
            titleEn: 'Rearing Ponds',
            locationEs: 'Canales (Raceways) y estanques abiertos.',
            locationEn: 'Raceways and open ponds.',
            detailsEs: 'Mantiene el flujo y la vitalidad a lo largo de todo el canal, evitando la estratificación térmica y zonas muertas.',
            detailsEn: 'Maintains flow and vitality throughout the channel, avoiding thermal stratification and dead zones.'
          }
        ],
        successStories: [
          {
            labelEs: 'PISCICULTURA',
            labelEn: 'FISH FARMING',
            titleEs: 'Vitalidad en el Cardumen',
            titleEn: 'Shoal Vitality',
            bodyEs: 'Estudios indican que peces como la trucha y el salmón muestran una preferencia por el agua tratada con Flowform, resultando en un crecimiento más vigoroso.',
            bodyEn: 'Studies indicate that fish like trout and salmon show a preference for Flowform-treated water, resulting in more vigorous growth.',
            beforeLabel: 'ESTRÉS / STRESS',
            beforeValue: 'ALTO / HIGH',
            afterLabel: 'CRECIMIENTO / GROWTH',
            afterValue: '+ VIGOROSO',
            pdfLabel: 'VER DATOS CIENTÍFICOS / VIEW SCIENTIFIC DATA',
            pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf'
          }
        ],
        metrics: [
          { label: 'Dissolved Oxygen (DO) / Oxígeno Disuelto (OD)', value: '6.3-8.2 ppm', pdf: '/studies/Farming/13. Research data on livestock and agriculture.doc.pdf', page: '1' },
          { label: 'Nitrogen Removal / Remoción de Nitrógeno', value: '13-97%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
          { label: 'Pathogen Elimination / Eliminación Patógenos', value: '99.9%', pdf: '/studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf', page: '1' },
          { label: 'pH Stabilization / Estabilización pH', value: '6.5-7.5', pdf: '/studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf', page: '1' }
        ]
      }
    ];
  }

  get activeIndustryData(): Industry | undefined {
    return this.industries.find(i => i.id === this.activeIndustry);
  }
}
