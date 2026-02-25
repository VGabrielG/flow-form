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
}
