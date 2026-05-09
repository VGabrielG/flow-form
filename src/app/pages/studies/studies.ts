import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Study {
  name: string;
  path: string;
}

interface Section {
  title: string;
  studies: Study[];
}

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './studies.html',
  styleUrls: ['./studies.css']
})
export class StudiesComponent {
  lang = inject(LanguageService);

  sections: Section[] = [
    {
      title: 'Farming',
      studies: [
        { name: 'The Chemistry of Animal Waste: Transforming Effluent into Assets', path: 'studies/Farming/10. Animal effluent treatment chemistry by Peter Bacchus.pdf' },
        { name: 'Case Study: HOHEPA Farm\'s Success with Flowform Technology', path: 'studies/Farming/11.Report on HOHEPA Farm use of Flowform treated effluent.pdf' },
        { name: 'From Waste to Wealth: Creating Liquid Fertilizer from Effluent', path: 'studies/Farming/12. Transforming animal effluent into liquid fertilizer.pdf' },
        { name: 'Scientific Validation: Enhancing Livestock and Agricultural Yields', path: 'studies/Farming/13. Research data on livestock and agriculture.doc.pdf' },
        { name: 'Complete Guide to Agricultural Effluent Solutions', path: 'studies/Farming/5. Agricultural_Effluent_Brochure.pdf' },
        { name: 'The Vortex Effect: Laverstoke\'s Breakthrough in Oxygenation', path: 'studies/Farming/9. Laverstoke research re oxygenation VORTEX.pdf' }
      ]
    },
    {
      title: 'Scientific Research & Validation',
      studies: [
        { name: 'Quantum Coherence: The Physics of Structured Water', path: 'studies/flow form studies/6. Quantum coherent water research August 2018.pdf' },
        { name: 'Four-Plant Comparative Study: The Impact of Flowform Technology', path: 'studies/flow form studies/8. Report 2015 Four Plants research 20151027.pdf' }
      ]
    },
    {
      title: 'Human Applications',
      studies: [
        { name: 'Historical Efficacy: JARNA Effluent Ponds Research', path: 'studies/human aplications/1. Research document JARNA effluent ponds 1986.pdf' },
        { name: 'The Warmonderhoof Project: Domestic Wastewater Innovations', path: 'studies/human aplications/14. Warmonderhoof project description and findings.pdf' },
        { name: 'Synergy in Action: Flowform Cascades & Constructed Wetlands', path: 'studies/human aplications/15. Thyu hong, Combining flowform cascade with constructed wetland to enhance domestic wastewater treatment, avril 2022[1].pdf' },
        { name: 'Municipal Success: Effluent Treatment in Soerendonk, Netherlands', path: 'studies/human aplications/16. Municipal effluent treatment_Netherlands_Soerendonk.pdf' },
        { name: 'Industrial Scale: The Hungarian Effluent Plant Project', path: 'studies/human aplications/17. Hungarian effluent plant project.pdf' },
        { name: 'Ecological Engineering: Hawkwood Ponds Sewage System', path: 'studies/human aplications/18. Hawkwood Ponds and Wetlands Sewage System.pdf' },
        { name: 'Technical Overview: Hungarian Effluent Plant Implementation', path: 'studies/human aplications/2. Hungarian effluent plant project.pdf' },
        { name: 'Pure Results: Advancements in Drinking Water Treatment', path: 'studies/human aplications/3. Drinking water treatment .docx.pdf' },
        { name: 'Urban Revival: Restoring Polluted Lakes with Flowform Technology', path: 'studies/human aplications/7. Improving water quality of polluted urban lakes Thi Thuy 2019.pdf' }
      ]
    },
    {
      title: 'Wine',
      studies: [
        { name: 'The French Terroir: Flowform Impact on Wine Making & Food Growth', path: 'studies/wine/4. French wine making and food growth feedback .pdf' }
      ]
    }
  ];
}
