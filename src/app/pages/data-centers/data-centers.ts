import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';

@Component({
  selector: 'app-data-centers',
  standalone: true,
  imports: [CommonModule, AnimatedPulsePillComponent],
  templateUrl: './data-centers.html',
})
export class DataCentersComponent {
  lang = inject(LanguageService);
  viewMode: any = 'process';

  toggleViewMode(mode: string) {
    this.viewMode = mode;
  }
}
