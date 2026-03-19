import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';

@Component({
  selector: 'app-desalination',
  standalone: true,
  imports: [CommonModule, AnimatedPulsePillComponent],
  templateUrl: './desalination.html',
})
export class DesalinationComponent {
  lang = inject(LanguageService);
  viewMode: 'process' | 'analysis' = 'process';

  toggleViewMode(mode: 'process' | 'analysis') {
    this.viewMode = mode;
  }
}
