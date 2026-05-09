import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { AnimatedPulsePillComponent } from '../../components/animated-pulse-pill/animated-pulse-pill.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AnimatedPulsePillComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent {
  lang = inject(LanguageService);
  router = inject(Router);

  allOptions = [
    { key: 'nav_winery', path: '/winery', color: 'hover:border-red-500', emoji: '🍷' },
    { key: 'nav_meat', path: '/meat-industry', color: 'hover:border-green-500', emoji: '🥩' },
    { key: 'nav_municipalities', path: '/municipalities', color: 'hover:border-cyan-500', emoji: '🏛️' },
    { key: 'nav_ecological_pool', path: '/ecological-pool', color: 'hover:border-emerald-500', emoji: '🏊' }
  ];

  features = [
    { id: '01', title_key: 'feature_1_title', desc_key: 'feature_1_desc' },
    { id: '02', title_key: 'feature_2_title', desc_key: 'feature_2_desc' },
    { id: '03', title_key: 'feature_3_title', desc_key: 'feature_3_desc' }
  ];

  steps = [
    { step: 1, title: 'step_1_title', desc: 'step_1_desc' },
    { step: 2, title: 'step_2_title', desc: 'step_2_desc' },
    { step: 3, title: 'step_3_title', desc: 'step_3_desc' },
    { step: 4, title: 'step_4_title', desc: 'step_4_desc' }
  ];

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
