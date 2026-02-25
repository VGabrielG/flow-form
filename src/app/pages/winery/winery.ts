import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';
import { CoreTechnologySectionComponent } from '../../components/core-technology-section/core-technology-section.component';
import { MetricCardComponent } from '../../components/metric-card/metric-card.component';
import { TechnicalEvaluationCTAComponent } from '../../components/technical-evaluation-cta/technical-evaluation-cta.component';

@Component({
  selector: 'app-winery',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent,
    CoreTechnologySectionComponent,
    MetricCardComponent,
    TechnicalEvaluationCTAComponent
  ],
  templateUrl: './winery.html',
  styleUrl: './winery.css'
})
export class WineryComponent {
  lang = inject(LanguageService);
  data = inject(DataService);

  get scienceFacts() {
    return this.data.getScienceStats(this.lang.language())['winery'] || [];
  }

  get unifiedPillars() {
    const l = this.lang.language();
    return [
      {
        icon: '💧',
        title: l === 'es' ? 'Remediación Inmediata' : 'Immediate Remediation',
        desc: l === 'es' ? 'Eliminación de olores en <4 horas.' : 'Odor elimination in <4 hours.',
        color: 'bg-red-50/40 backdrop-blur-md text-red-900'
      },
      {
        icon: '🌱',
        title: l === 'es' ? 'Vitalidad del Suelo' : 'Soil Vitality',
        desc: l === 'es' ? 'Agua estructurada que penetra profundo.' : 'Structured water that penetrates deeper.',
        color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
      },
      {
        icon: '🍷',
        title: l === 'es' ? 'Perfil Premium' : 'Premium Profile',
        desc: l === 'es' ? 'Suavizado de taninos y mejora del terroir.' : 'Natural tannin softening and improved terroir.',
        color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900'
      },
      { icon: '🌍', title: this.lang.t('winery_pillar_1_title'), desc: this.lang.t('winery_pillar_1_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '♻️', title: this.lang.t('winery_pillar_2_title'), desc: this.lang.t('winery_pillar_2_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '⭐', title: this.lang.t('winery_pillar_3_title'), desc: this.lang.t('winery_pillar_3_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
      { icon: '📈', title: this.lang.t('winery_pillar_4_title'), desc: this.lang.t('winery_pillar_4_desc'), color: 'bg-neutral-50/40 backdrop-blur-md text-neutral-900' },
    ];
  }
}
