import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';
import { CoreTechnologySectionComponent } from '../../components/core-technology-section/core-technology-section.component';
import { MetricCardComponent } from '../../components/metric-card/metric-card.component';
import { TechnicalEvaluationCTAComponent } from '../../components/technical-evaluation-cta/technical-evaluation-cta.component';

@Component({
  selector: 'app-municipalities',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent,
    CoreTechnologySectionComponent,
    MetricCardComponent,
    TechnicalEvaluationCTAComponent
  ],
  templateUrl: './municipalities.html',
  styleUrl: './municipalities.css'
})
export class MunicipalitiesComponent {
  lang = inject(LanguageService);
  data = inject(DataService);

  get scienceFacts() {
    return this.data.getScienceStats(this.lang.language())['municipal'] || [];
  }

  get unifiedPillars() {
    const l = this.lang.language();
    return [
      {
        icon: '🏙️',
        title: l === 'es' ? 'Bienestar Ciudadano' : 'Citizen Well-being',
        desc: l === 'es' ? 'Eliminación de olores ofensivos en zonas urbanas densas.' : 'Elimination of offensive odors in dense urban areas.',
        color: 'bg-cyan-50/40 backdrop-blur-md text-cyan-900'
      },
      {
        icon: '🦆',
        title: l === 'es' ? 'Restauración Ecológica' : 'Ecological Restoration',
        desc: l === 'es' ? 'Lagos limpios y claros que invitan a la recreación.' : 'Clean lakes and canals that invite recreation.',
        color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
      },
      {
        icon: '💰',
        title: l === 'es' ? 'Ahorro Operativo' : 'Operational Savings',
        desc: l === 'es' ? 'Reducción de consumo en aireación y menos químicos.' : 'Reduced energy consumption and fewer chemicals.',
        color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
      },
      { icon: '🌍', title: this.lang.t('muni_pillar_1_title'), desc: this.lang.t('muni_pillar_1_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '♻️', title: this.lang.t('muni_pillar_2_title'), desc: this.lang.t('muni_pillar_2_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '⭐', title: this.lang.t('muni_pillar_3_title'), desc: this.lang.t('muni_pillar_3_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '📈', title: this.lang.t('muni_pillar_4_title'), desc: this.lang.t('muni_pillar_4_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
    ];
  }

  activeArea: string | null = null;

  toggleArea(id: string) {
    this.activeArea = this.activeArea === id ? null : id;
  }

  get applicationAreas() {
    return [
      {
        id: 'lift-stations',
        titleEs: 'Estaciones de Rebombeo (Lift Stations)',
        titleEn: 'Lift Stations / Pump Stations',
        locationEs: 'Estanques previos de pre-acondicionamiento en la red de alcantarillado.',
        locationEn: 'Pre-conditioning holding tanks in the sewer network.',
        detailsEs: 'Antes de llegar a la planta, el agua cloacal estancada en las cañerías se pudre y genera gases tóxicos y corrosivos. Flowform se instala para pre-acondicionar el agua, reduciendo el desgaste de infraestructura y neutralizando los olores en áreas residenciales conectadas.',
        detailsEn: 'Before reaching the plant, sewage stagnant in the pipes rots and generates toxic and corrosive gases. Flowform is installed to pre-condition the water, reducing infrastructure wear and neutralizing odors in connected residential areas.'
      },
      {
        id: 'oxidation-ponds',
        titleEs: 'Lagunas Facultativas / de Oxidación',
        titleEn: 'Facultative / Oxidation Ponds',
        locationEs: 'Instalación en cascada en grandes lagunas municipales.',
        locationEn: 'Cascade installation in large municipal lagoons.',
        detailsEs: 'Actúa como un pulmón gigante y pasivo. Asegura que la capa superior se mantenga 100% aeróbica, cortando el olor que afecta a las poblaciones. Reduce dramáticamente el volumen de lodo (Sludge) en el fondo, disminuyendo costos millonarios de dragado y dejando un efluente de salida cristalino.',
        detailsEn: 'Acts as a giant, passive lung. Ensures the top layer remains 100% aerobic, cutting odors that affect populations. Dramatically reduces the volume of sludge at the bottom, lowering million-dollar dredging costs and leaving a crystal-clear effluent.'
      }
    ];
  }
}

