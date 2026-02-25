import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';
import { CoreTechnologySectionComponent } from '../../components/core-technology-section/core-technology-section.component';
import { TechnicalEvaluationCTAComponent } from '../../components/technical-evaluation-cta/technical-evaluation-cta.component';

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent,
    CoreTechnologySectionComponent,
    TechnicalEvaluationCTAComponent
  ],
  templateUrl: './mining.html',
  styleUrl: './mining.css'
})
export class MiningComponent {
  lang = inject(LanguageService);
  data = inject(DataService);

  get scienceFacts() {
    return this.data.getScienceStats(this.lang.language())['mining'] || [];
  }

  get pillars() {
    const l = this.lang.language();
    return [
      {
        icon: '⚒️',
        title: l === 'es' ? 'Oxidación Pasiva' : 'Passive Oxidation',
        desc: l === 'es' ? 'Manejo de grandes volúmenes de AMD con precipitación eficiente de metales.' : 'Handling large volumes of AMD with efficient metal precipitation.',
        color: 'bg-cyan-50/30 backdrop-blur-md text-cyan-900'
      },
      {
        icon: '🔄',
        title: l === 'es' ? 'Recirculación Segura' : 'Safe Recirculation',
        desc: l === 'es' ? 'Restauración de la calidad del agua para su reutilización en procesos.' : 'Restoration of water quality for reuse in processes.',
        color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
      },
      {
        icon: '🛡️',
        title: l === 'es' ? 'Cumplimiento ESG' : 'ESG Compliance',
        desc: l === 'es' ? 'Demostración tangible de compromiso ambiental y protección de cuencas.' : 'Tangible demonstration of environmental commitment and watershed protection.',
        color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
      },
      {
        icon: '👃',
        title: l === 'es' ? 'Aire Limpio' : 'Clean Air',
        desc: l === 'es' ? 'Eliminación de olores que afectan la calidad de vida.' : 'Elimination of odors affecting quality of life.',
        color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
      },
      {
        icon: '🌿',
        title: l === 'es' ? 'Estética' : 'Aesthetics',
        desc: l === 'es' ? 'Integración paisajística de estructuras de tratamiento.' : 'Landscape integration of treatment structures.',
        color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
      },
      {
        icon: '🐟',
        title: l === 'es' ? 'Biodiversidad' : 'Biodiversity',
        desc: l === 'es' ? 'Retorno de flora y fauna a cuerpos de agua recuperados.' : 'Return of flora and fauna to recovered water bodies.',
        color: 'bg-slate-50/40 backdrop-blur-md text-slate-900'
      }
    ];
  }
}
