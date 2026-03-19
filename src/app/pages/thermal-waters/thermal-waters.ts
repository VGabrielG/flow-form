import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';

@Component({
  selector: 'app-thermal-waters',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedPulsePillComponent
  ],
  templateUrl: './thermal-waters.html',
  styleUrl: './thermal-waters.css'
})
export class ThermalWatersComponent {
  lang = inject(LanguageService);
  viewMode: string = 'process';

  toggleViewMode(mode: string) {
    this.viewMode = mode;
  }
}
