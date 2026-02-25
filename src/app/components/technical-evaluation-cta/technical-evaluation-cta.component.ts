
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-technical-evaluation-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full flex items-center justify-center gap-4 my-10">
      <!-- Arrow pointing right toward the button -->
      <div class="flex items-center gap-2 text-neutral-400">
        <span class="text-xs font-bold uppercase tracking-widest opacity-60">
          {{ lang.language() === 'es' ? 'Evaluación' : 'Evaluation' }}
        </span>
        <svg
          class="w-8 h-8 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      <button class="bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-500 px-8 py-3 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all duration-300 shadow-lg">
        {{ lang.language() === 'es' ? 'Solicitar Evaluación Técnica' : 'Request Technical Evaluation' }}
      </button>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; }
  `]
})
export class TechnicalEvaluationCTAComponent {
  lang = inject(LanguageService);

  @Input() variant: 'livestock' | 'winery' | 'mining' | 'municipalities' = 'winery';
  @Input() titleEs: string = '';
  @Input() titleEn: string = '';
  @Input() descEs: string = '';
  @Input() descEn: string = '';
}
