
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-core-technology-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full flex flex-col items-center mt-12 relative z-20">
      <button
        (click)="isOpen = !isOpen"
        class="group flex items-center gap-4 px-8 py-4 rounded-full border transition-all duration-300 shadow-lg hover:shadow-xl"
        [ngClass]="[colors.button, colors.border]"
      >
        <span class="text-sm font-black uppercase tracking-widest">
          {{ lang.language() === 'es' ? 'Cómo funciona la tecnología' : 'How the technology works' }}
        </span>
        <svg
          class="w-5 h-5 transition-transform duration-500"
          [class.rotate-180]="isOpen"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div 
        class="w-full overflow-hidden transition-all duration-700 ease-in-out text-left"
        [class.max-h-[2000px]]="isOpen"
        [class.opacity-100]="isOpen"
        [class.translate-y-0]="isOpen"
        [class.mt-8]="isOpen"
        [class.max-h-0]="!isOpen"
        [class.opacity-0]="!isOpen"
        [class.-translate-y-8]="!isOpen"
      >
        <div class="bg-neutral-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div class="relative z-10 w-full">
            <h2 class="text-sm font-black uppercase tracking-[0.4em] mb-12 border-l-2 pl-4" [ngClass]="[colors.border, colors.accent]">
              {{ lang.language() === 'es' ? 'MECANISMO CORE' : 'CORE MECHANISM' }}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-left">
              <div>
                <div class="text-4xl mb-6" [ngClass]="colors.accent">01</div>
                <h3 class="text-2xl font-black mb-4 uppercase tracking-tight">{{ lang.t('step_1_title') }}</h3>
                <p class="text-sm text-neutral-400 leading-relaxed">{{ lang.t('step_1_desc') }}</p>
              </div>
              <div>
                <div class="text-4xl mb-6" [ngClass]="colors.accent">02</div>
                <h3 class="text-2xl font-black mb-4 uppercase tracking-tight">{{ lang.t('step_2_title') }}</h3>
                <p class="text-sm text-neutral-400 leading-relaxed">{{ lang.t('step_2_desc') }}</p>
              </div>
              <div>
                <div class="text-4xl mb-6" [ngClass]="colors.accent">03</div>
                <h3 class="text-2xl font-black mb-4 uppercase tracking-tight">{{ lang.t('step_3_title') }}</h3>
                <p class="text-sm text-neutral-400 leading-relaxed">{{ lang.t('step_3_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; }
  `]
})
export class CoreTechnologySectionComponent {
  lang = inject(LanguageService);

  @Input() themeColor: 'red' | 'amber' | 'cyan' | 'yellow' | 'emerald' = 'red';

  isOpen = false;

  colorMap: any = {
    red: {
      button: 'bg-red-900 hover:bg-red-800 text-white border-red-700',
      accent: 'text-red-400',
      border: 'border-red-500',
    },
    amber: {
      button: 'bg-amber-700 hover:bg-amber-600 text-white border-amber-600',
      accent: 'text-amber-400',
      border: 'border-amber-500',
    },
    cyan: {
      button: 'bg-cyan-800 hover:bg-cyan-700 text-white border-cyan-600',
      accent: 'text-cyan-400',
      border: 'border-cyan-500',
    },
    yellow: {
      button: 'bg-yellow-700 hover:bg-yellow-600 text-white border-yellow-500',
      accent: 'text-yellow-400',
      border: 'border-yellow-500',
    },
    emerald: {
      button: 'bg-emerald-800 hover:bg-emerald-700 text-white border-emerald-600',
      accent: 'text-emerald-400',
      border: 'border-emerald-500',
    },
  };

  get colors() {
    return this.colorMap[this.themeColor] || this.colorMap.red;
  }
}
