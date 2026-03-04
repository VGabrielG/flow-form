import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';
import { CoreTechnologySectionComponent } from '../../components/core-technology-section/core-technology-section.component';
import { TechnicalEvaluationCTAComponent } from '../../components/technical-evaluation-cta/technical-evaluation-cta.component';
import { MetricCardComponent } from '../../components/metric-card/metric-card.component';

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent,
    CoreTechnologySectionComponent,
    TechnicalEvaluationCTAComponent,
    MetricCardComponent
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

  activeArea: string | null = null;

  toggleArea(id: string) {
    this.activeArea = this.activeArea === id ? null : id;
  }

  get applicationAreas() {
    return [
      {
        id: 'process-water',
        titleEs: 'Piscinas de Aguas de Proceso',
        titleEn: 'Process Water Ponds',
        locationEs: 'Circuitos de recirculación hídrica.',
        locationEn: 'Water recirculation circuits.',
        detailsEs: 'Se configuran circuitos rítmicos para inyectar una cantidad masiva de oxígeno de forma pasiva, mitigar los malos olores formados por la ausencia de flujo y potenciar la actividad de bacterias aeróbicas degradadoras, utilizando una fracción del costo energético de los inmensos aireadores mecánicos.',
        detailsEn: 'Rhythmic circuits are configured to passively inject massive amounts of oxygen, mitigate bad odors formed by lack of flow, and enhance the activity of aerobic degrading bacteria, using a fraction of the energy cost of huge mechanical aerators.'
      },
      {
        id: 'tailings',
        titleEs: 'Tranques de Relaves (Lagos de Decantación)',
        titleEn: 'Tailings Ponds (Decantation Lakes)',
        locationEs: 'Instalación sobre pontones flotantes en la "laguna clara".',
        locationEn: 'Installation on floating pontoons in the "clear lagoon".',
        detailsEs: 'La aireación natural y el constante fluir rítmico del Flowform acelera la oxidación y sedimentación de trazas de metales (como hierro y manganeso). Además, asiste en la neutralización de reactivos químicos flotantes antes de reutilizar el agua.',
        detailsEn: 'The natural aeration and constant rhythmic flowing of the Flowform accelerate the oxidation and sedimentation of trace metals (like iron and manganese). Additionally, it assists in neutralizing floating chemical reagents before reusing the water.'
      },
      {
        id: 'amd',
        titleEs: 'Tratamiento de Aguas Ácidas',
        titleEn: 'Acid Mine Drainage (AMD) Treatment',
        locationEs: 'Plantas de recuperación y estaciones de biolixiviación.',
        locationEn: 'Recovery plants and bioleaching stations.',
        detailsEs: 'A través de un flujo estructurado, aumenta dramáticamente el oxígeno disuelto. Este aumento cataliza la precipitación natural de los metales pesados disueltos, vital en la retención preventiva y manejo de pasivos ambientales sin sobrecargar la planta con calicionales químicos.',
        detailsEn: 'Through a structured flow, dissolved oxygen is dramatically increased. This increase catalyzes the natural precipitation of dissolved heavy metals, vital in preventive retention and management of environmental liabilities without overloading the plant with chemical alkalizers.'
      }
    ];
  }
}

