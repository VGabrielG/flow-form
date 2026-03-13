
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-animated-pulse-pill',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-md shadow-sm mb-4">
      <span class="relative flex h-2 w-2 mr-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" [ngClass]="colorClass"></span>
        <span class="relative inline-flex rounded-full h-2 w-2" [ngClass]="colorClass"></span>
      </span>
      <span class="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900">{{ label }}</span>
    </div>
  `,
    styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class AnimatedPulsePillComponent {
    @Input() label: string = '';
    @Input() color: string = 'white';

    get colorClass() {
        return this.color === 'white' ? 'bg-neutral-900' : 'bg-blue-500';
    }
}
