import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';

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
  successStories: { labelEs: string; labelEn: string; titleEs: string; titleEn: string; bodyEs: string; bodyEn: string; beforeLabel: string; beforeValue: string; afterLabel: string; afterValue: string; pdfLabel?: string; pdf?: string }[];
  metrics: { label: string; value: string; pdf?: string; page?: string }[];
}

@Component({
  selector: 'app-textile-industry',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent
  ],
  templateUrl: './textile-industry.html',
  styleUrl: './textile-industry.css'
})
export class TextileIndustryComponent {
  lang = inject(LanguageService);
  data = inject(DataService);

  activeIndustry: string = 'textile-remediation';
  activeArea: string | null = null;
  viewMode: 'process' | 'analysis' = 'process';

  toggleIndustry(id: string) {
    this.activeIndustry = id;
    this.activeArea = null;
  }

  toggleArea(id: string) {
    this.activeArea = this.activeArea === id ? null : id;
  }

  toggleViewMode(mode: 'process' | 'analysis') {
    this.viewMode = mode;
  }

  get l() { return this.lang.language(); }

  get industries(): Industry[] {
    return [
      {
        id: 'textile-remediation',
        icon: '🧵',
        labelEs: 'Tratamiento de Efluentes',
        labelEn: 'Effluent Treatment',
        theme: {
          btnActive: 'bg-emerald-800 border-emerald-600 text-white shadow-xl scale-[1.03]',
          btnHover: 'hover:border-emerald-500 hover:shadow-lg hover:scale-[1.02]',
          bannerBg: 'bg-emerald-900 text-white',
          bannerLabel: 'text-emerald-400',
          cardBg: 'bg-emerald-50/80',
          cardBorder: 'border-emerald-200',
          cardHover: 'hover:border-emerald-400 hover:shadow-md',
          cardTitle: 'text-emerald-800',
          cardDesc: 'text-emerald-600',
          metricVariant: 'emerald'
        },
        pillars: [
          {
            icon: '🎨',
            titleEs: 'Remediación de Tintes',
            titleEn: 'Dye Remediation',
            descEs: 'Descomposición acelerada de colorantes complejos mediante oxigenación rítmica y exposición controlada.',
            descEn: 'Accelerated decomposition of complex dyes through rhythmic oxygenation and controlled exposure.'
          },
          {
            icon: '📜',
            titleEs: 'Cumplimiento ZDHC',
            titleEn: 'ZDHC Compliance',
            descEs: 'Ayuda a cumplir con los estándares globales de "Cero Vertido de Productos Químicos Peligrosos".',
            descEn: 'Helps meet global "Zero Discharge of Hazardous Chemicals" standards.'
          },
          {
            icon: '🧪',
            titleEs: 'Eficiencia en Procesos',
            titleEn: 'Process Efficiency',
            descEs: 'El agua revitalizada mejora la penetración de tintes, reduciendo el consumo de auxiliares químicos.',
            descEn: 'Revitalized water improves dye penetration, reducing the consumption of chemical auxiliaries.'
          },
          {
            icon: '⚡',
            titleEs: 'Sostenibilidad Energética',
            titleEn: 'Energy Sustainability',
            descEs: 'Tratamiento aeróbico de grandes volúmenes con un consumo de energía significativamente menor.',
            descEn: 'Aerobic treatment of large volumes with significantly lower energy consumption.'
          }
        ],
        applicationAreas: [
          {
            id: 'dyehouse-effluent',
            titleEs: 'Efluentes de Tintorería',
            titleEn: 'Dyer-House Effluents',
            locationEs: 'Canales de descarga y lagunas de ecualización.',
            locationEn: 'Discharge channels and equalization lagoons.',
            detailsEs: 'Los tintes sintéticos son difíciles de degradar. El sistema Flowform oxigena el agua a niveles que permiten a las bacterias aeróbicas descomponer las moléculas de color de forma más eficiente.',
            detailsEn: 'Synthetic dyes are difficult to degrade. The Flowform system oxygenates water to levels that allow aerobic bacteria to break down color molecules more efficiently.'
          },
          {
            id: 'cooling-towers',
            titleEs: 'Torres de Enfriamiento',
            titleEn: 'Cooling Towers',
            locationEs: 'Sistemas de enfriamiento de maquinaria textil.',
            locationEn: 'Textile machinery cooling systems.',
            detailsEs: 'Previene la formación de biofilm y depósitos minerales sin necesidad de biocidas agresivos, extendiendo la vida útil de los equipos.',
            detailsEn: 'Prevents biofilm formation and mineral deposits without the need for aggressive biocides, extending equipment life.'
          }
        ],
        successStories: [
          {
            labelEs: 'TRATAMIENTO TEXTIL',
            labelEn: 'TEXTILE TREATMENT',
            titleEs: 'Hacia el Vertido Cero',
            titleEn: 'Towards Zero Discharge',
            bodyEs: 'Optimización de plantas de tratamiento biológico mediante la integración de cascadas rítmicas, logrando una reducción visible de color y carga orgánica.',
            bodyEn: 'Optimization of biological treatment plants through the integration of rhythmic cascades, achieving a visible reduction in color and organic load.',
            beforeLabel: 'CARGA ORGÁNICA / ORGANIC LOAD',
            beforeValue: 'ALTA / HIGH',
            afterLabel: 'RESULTADO / RESULT',
            afterValue: 'REDUCIDA'
          }
        ],
        metrics: []
      }
    ];
  }

  get activeIndustryData(): Industry | undefined {
    return this.industries.find(i => i.id === this.activeIndustry);
  }
}
