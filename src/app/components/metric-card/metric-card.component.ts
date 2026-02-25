
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-metric-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-neutral-50/40 backdrop-blur-sm p-10 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full border-l-4" [ngClass]="borderClass">
      <div class="text-5xl font-black mb-6 tracking-tighter" [ngClass]="textClass">
        {{ value }}
      </div>
      <div class="text-[11px] font-black text-neutral-900 uppercase tracking-[0.2em] mb-8 leading-relaxed h-10">
        {{ label }}
      </div>

      <div class="mt-auto pt-6 border-t border-neutral-100">
        <a
          [href]="study"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[9px] font-black uppercase tracking-widest text-neutral-400 transition-colors flex items-center group"
          [ngClass]="hoverTextClass"
        >
          {{ language === 'es' ? 'VER ESTUDIO' : 'VIEW STUDY' }}
          <svg class="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  `,
    styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class MetricCardComponent {
    @Input() label: string = '';
    @Input() value: string = '';
    @Input() study: string = '';
    @Input() language: string = 'en';
    @Input() variant: 'red' | 'blue' | 'cyan' | 'green' = 'red';

    get borderClass() {
        const classes: any = {
            'red': 'border-l-red-900/20',
            'blue': 'border-l-blue-900/20',
            'cyan': 'border-l-cyan-900/20',
            'green': 'border-l-green-900/20'
        };
        return classes[this.variant] || 'border-l-red-900/20';
    }

    get textClass() {
        const classes: any = {
            'red': 'text-red-900',
            'blue': 'text-blue-900',
            'cyan': 'text-cyan-900',
            'green': 'text-green-900'
        };
        return classes[this.variant] || 'text-red-900';
    }

    get hoverTextClass() {
        const classes: any = {
            'red': 'hover:text-red-900',
            'blue': 'hover:text-blue-900',
            'cyan': 'hover:text-cyan-900',
            'green': 'hover:text-green-900'
        };
        return classes[this.variant] || 'hover:text-red-900';
    }
}
