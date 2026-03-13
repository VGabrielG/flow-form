import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';
import { CoreTechnologySectionComponent } from '../../components/core-technology-section/core-technology-section.component';
import { MetricCardComponent } from '../../components/metric-card/metric-card.component';
import { TechnicalEvaluationCTAComponent } from '../../components/technical-evaluation-cta/technical-evaluation-cta.component';

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

  get scienceFacts() {
    return this.data.getScienceStats(this.lang.language())['meatIndustry'] || [];
  }

  get unifiedPillars() {
    const l = this.lang.language();
    return [
      {
        icon: '🦠',
        title: l === 'es' ? 'Activación Microbiana' : 'Microbial Activation',
        desc: l === 'es' ? 'Bacterias aeróbicas devoran lodos rápidamente.' : 'Aerobic bacteria devour sludge rapidly.',
        color: 'bg-green-50/40 backdrop-blur-md text-green-900'
      },
      {
        icon: '⚡',
        title: l === 'es' ? 'Valorización de Fertilizante' : 'Fertilizer Optimization',
        desc: l === 'es' ? 'Transforma efluentes en irrigación nutritiva.' : 'Transforms toxic effluents into nutrient-rich irrigation.',
        color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
      },
      {
        icon: '🐮',
        title: l === 'es' ? 'Salud Animal' : 'Animal Health',
        desc: l === 'es' ? 'Mejora hidratación y conversión alimenticia.' : 'Improves hydration and feed conversion ratios.',
        color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
      },
      { icon: '🌍', title: this.lang.t('meat_pillar_1_title'), desc: this.lang.t('meat_pillar_1_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '♻️', title: this.lang.t('meat_pillar_2_title'), desc: this.lang.t('meat_pillar_2_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '⭐', title: this.lang.t('meat_pillar_3_title'), desc: this.lang.t('meat_pillar_3_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '📈', title: this.lang.t('meat_pillar_4_title'), desc: this.lang.t('meat_pillar_4_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
    ];
  }

  activeArea: string | null = null;

  toggleArea(id: string) {
    this.activeArea = this.activeArea === id ? null : id;
  }

  get applicationAreas() {
    return [
      {
        id: 'dairy',
        titleEs: 'Lecherías (Dairies) - Efluentes Verdes',
        titleEn: 'Dairies - Green Effluents',
        locationEs: 'Estanques de recolección primaria y lagunas de almacenamiento de efluentes.',
        locationEn: 'Primary collection ponds and effluent storage lagoons.',
        detailsEs: 'El efluente de lechería es voluminoso. El Flowform oxigena constantemente la fracción líquida, evitando que la fibra suelta fermente y huela mal. Al rociar este líquido en las praderas, el pasto lo absorbe como fertilizante premium sin quemar las hojas.',
        detailsEn: 'Dairy effluent is voluminous. Flowform constantly oxygenates the liquid fraction, preventing loose fibers from fermenting and smelling bad. When this liquid is sprayed on pastures, grass absorbs it as premium fertilizer without burning the leaves.'
      },
      {
        id: 'piggeries',
        titleEs: 'Criaderos de Cerdos (Piggeries)',
        titleEn: 'Pig Farms (Piggeries)',
        locationEs: 'Fosados bajo los galpones y laguna anaeróbica principal.',
        locationEn: 'Under-slat pits and main anaerobic lagoon.',
        detailsEs: 'El purín de cerdo genera costras sólidas que atrapan metano y olores fétidos. El movimiento rítmico del Flowform disuelve la costra superior al introducir un torrente oxigenado. Transforma la digestión de anaeróbica a aeróbica, eliminando la asfixia de gases nocivos para los animales.',
        detailsEn: 'Pig slurry generates solid crusts that trap methane and foul odors. Flowform\'s rhythmic movement dissolves the top crust by introducing an oxygenated torrent. It transforms digestion from anaerobic to aerobic, eliminating asphyxiation from harmful gases for the animals.'
      },
      {
        id: 'meat-processing',
        titleEs: 'Procesamiento de Carne (Mataderos)',
        titleEn: 'Meat Processing (Abattoirs)',
        locationEs: 'Tanques ecualizadores y lagunas de estabilización secundarias.',
        locationEn: 'Equalizing tanks and secondary stabilization lagoons.',
        detailsEs: 'El agua residual es alta en grasa y sangre, pudriéndose en horas. El Flowform rompe las capas de grasa superficial e impide la proliferación de bacterias del sulfuro de hidrógeno (huevo podrido), eliminando olores extremos y acelerando radicalmente la digestión orgánica.',
        detailsEn: 'Wastewater is high in fat and blood, rotting within hours. Flowform breaks the surface fat layers and prevents the proliferation of hydrogen sulfide bacteria (rotten egg odor), eliminating extreme odors and radically accelerating organic digestion.'
      }
    ];
  }
}

