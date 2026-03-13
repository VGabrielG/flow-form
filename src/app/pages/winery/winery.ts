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

  activeArea: string | null = null;

  toggleArea(id: string) {
    this.activeArea = this.activeArea === id ? null : id;
  }

  get applicationAreas() {
    return [
      {
        id: 'riles',
        titleEs: 'Tratamiento de Riles (Residuos Industriales Líquidos)',
        titleEn: 'Liquid Industrial Waste Treatment (Riles)',
        locationEs: 'Puntos pre-tratamiento y lagunas de estabilización.',
        locationEn: 'Pre-treatment points and stabilization lagoons.',
        detailsEs: 'Durante la vendimia, los miles de litros de mosto azucarado y agua de lavado saturan los sistemas. El Flowform oxigena intensamente estas lagunas de desecho agrícola balanceando el pH biológicamente sin químicos, dominando los picos orgánicos por azúcares sin colapsar energéticamente.',
        detailsEn: 'During harvest, thousands of liters of sugary must and wash water saturate the systems. Flowform intensely oxygenates these agricultural waste lagoons, biologically balancing the pH without chemicals, mastering organic sugar peaks without energy collapse.'
      },
      {
        id: 'compost',
        titleEs: 'Preparación de Té de Compost de Orujo',
        titleEn: 'Pomace Compost Tea Preparation',
        locationEs: 'Brewers (tanques de infusión de 1.000 a 10.000 litros).',
        locationEn: 'Brewers (infusion tanks from 1,000 to 10,000 liters).',
        detailsEs: 'Al prensar la uva sobra piel y pepas (orujo), que se composta. El Flowform se usa para extraer la microbiología del compost de orujo al agua de forma activa y aeróbica, reproduciendo consorcios biológicos benéficos.',
        detailsEn: 'Pressing grapes leaves behind skins and seeds (pomace), which is composted. Flowform is used to actively and aerobically extract microbiology from the pomace compost into the water, reproducing beneficial biological consortiums.'
      },
      {
        id: 'irrigation',
        titleEs: 'Red de Fertirriego / Cisterna Principal',
        titleEn: 'Fertigation Network / Main Cistern',
        locationEs: 'Cisterna general antes de ingresar a las líneas de goteo.',
        locationEn: 'Main cistern before entering the drip irrigation lines.',
        detailsEs: 'El suministro de agua de riego pasa por la cascada Flowform cargándose de alta vitalidad y oxígeno. Al entrar al suelo, estimula a las micorrizas y microbios beneficiosos, facilitando la absorción de minerales que finalmente aportan a la vid una estructura tánica superior.',
        detailsEn: 'The irrigation water supply passes through the Flowform cascade, loading with extraordinary vitality and oxygen. In the soil, it stimulates mycorrhizae and beneficial microbes, facilitating mineral absorption which ultimately provides the vine with superior tannin structure.'
      }
    ];
  }
}

