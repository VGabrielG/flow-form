import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';

@Component({
  selector: 'app-green-hydrogen',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent
  ],
  templateUrl: './green-hydrogen.html',
  styleUrl: './green-hydrogen.css'
})
export class GreenHydrogenComponent {
  lang = inject(LanguageService);
  viewMode: any = 'process';

  toggleViewMode(mode: string) {
    this.viewMode = mode;
  }
}
