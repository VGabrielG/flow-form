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
    { key: 'nav_products', path: '/products', color: 'hover:border-yellow-500', emoji: '📦' },
    { key: 'nav_winery', path: '/winery', color: 'hover:border-red-500', emoji: '🍷' },
    { key: 'nav_meat', path: '/meat-industry', color: 'hover:border-green-500', emoji: '🥩' },
    { key: 'nav_municipalities', path: '/municipalities', color: 'hover:border-cyan-500', emoji: '🏛️' },
    { key: 'nav_ecological_pool', path: '/ecological-pool', color: 'hover:border-emerald-500', emoji: '🏊' },
    { key: 'nav_mining', path: '/mining', color: 'hover:border-blue-500', emoji: '⛏️' },
    { key: 'nav_desalination', path: '/desalination', color: 'hover:border-sky-500', emoji: '🌊' },
    { key: 'nav_data_centers', path: '/data-centers', color: 'hover:border-indigo-500', emoji: '🌐' },
    { key: 'nav_thermal_waters', path: '/thermal-waters', color: 'hover:border-teal-500', emoji: '♨️' },
    { key: 'nav_textile_industry', path: '/textile-industry', color: 'hover:border-fuchsia-500', emoji: '🧵' },
    { key: 'nav_green_hydrogen', path: '/green-hydrogen', color: 'hover:border-lime-500', emoji: '🔋' },
    { key: 'nav_leachate', path: '/leachate', color: 'hover:border-orange-500', emoji: '🏗️' }
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
