import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';

@Component({
  selector: 'app-leachate',
  standalone: true,
  imports: [CommonModule, AnimatedPulsePillComponent],
  templateUrl: './leachate.html',
  styleUrl: './leachate.css'
})
export class LeachateComponent {
  lang = inject(LanguageService);
  viewMode: any = 'process';

  toggleViewMode(mode: string) {
    this.viewMode = mode;
  }
}
