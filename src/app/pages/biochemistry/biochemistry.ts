import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-biochemistry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biochemistry.html',
  styleUrl: './biochemistry.css'
})
export class BiochemistryComponent implements OnInit {
  lang = inject(LanguageService);
  data = inject(DataService);
  route = inject(ActivatedRoute);

  category: string = 'vitalization';

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.category = params['category'] || 'vitalization';
    });
  }

  get scienceFacts() {
    return this.data.getScienceStats(this.lang.language())[this.category] || [];
  }

  get caseStudies() {
    return this.data.getCaseStudiesData(this.lang.language())[this.category] || [];
  }

  get themeColorClass() {
    if (this.category === 'vitalization') return 'bg-neutral-600';
    if (this.category === 'industrial') return 'bg-zinc-600';
    return 'bg-stone-600';
  }

  activeArea: string | null = null;

  toggleArea(id: string) {
    this.activeArea = this.activeArea === id ? null : id;
  }

  get applicationAreas() {
    return [
      {
        id: 'biofertilizers',
        titleEs: 'Estanques de mezcla de Biofertilizantes / Humus líquido',
        titleEn: 'Biofertilizer Mixing Tanks / Liquid Humus',
        locationEs: 'Tanques de infusión donde se mezclan melaza, guanos, algas y minerales.',
        locationEn: 'Infusion tanks where molasses, guano, seaweed, and minerals are mixed.',
        detailsEs: 'Si mezclas bacterias o abonos biológicos en agua estancada, mueren en 2 horas por asfixia. Al mantener un circuito cerrado por medio del dispositivo Flowform, se reproducen consorcios microbianos beneficiosos de billones a trillones. El flujo espiral rítmico no aplasta la delicada biología.',
        detailsEn: 'If you mix bacteria or biological fertilizers in stagnant water, they die in 2 hours from asphyxiation. By maintaining a closed circuit using the Flowform device, beneficial microbial consortiums reproduce from billions to trillions. The rhythmic spiral flow does not crush delicate biology.'
      },
      {
        id: 'irrigation-heads',
        titleEs: 'Cabezales Hidráulicos / Viveros',
        titleEn: 'Hydraulic Heads / Nurseries',
        locationEs: 'Al entrar a las canchas de cultivo o sistemas de riego general.',
        locationEn: 'Upon entering crop fields or general irrigation systems.',
        detailsEs: 'El agua se vitaliza y oxigena pasivamente imitando el cauce de la montaña, multiplicando exponencialmente las colonias de bacterias y hongos beneficiosos antes de aplicarlos. Al mandar esto al suelo por sistemas de riego, revitaliza suelos compactados o dañados por monocultivos.',
        detailsEn: 'Water is passively vitalized and oxygenated, imitating mountain streams, exponentially multiplying colonies of beneficial bacteria and fungi before application. Sending this to the soil via irrigation systems revitalizes soils that are compacted or damaged by monocultures.'
      }
    ];
  }
}

