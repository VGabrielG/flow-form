import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer *ngIf="showFooter" class="bg-neutral-950 text-white py-24 relative overflow-hidden bg-grid-technical border-t border-white/5">
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div class="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl mx-auto flex items-center justify-center mb-8">
          <img src="/images/logo.png" alt="Logo" class="w-6 h-6 object-contain opacity-50" />
        </div>
        <p class="text-neutral-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Flowform Eco-Technology Research</p>
        <div class="w-12 h-px bg-white/10 mx-auto mb-6"></div>
        <p class="text-neutral-50 text-[10px] max-w-xl mx-auto leading-loose uppercase tracking-widest font-medium opacity-60">
          Advanced biomimetic solutions for structural and biochemical water stabilization. <br />
          Supporting global ecological restoration since 1970.
        </p>
        <div class="mt-12 text-[9px] font-black text-neutral-600 uppercase tracking-widest leading-none">
          © {{ currentYear }} Flowform. All rights reserved.
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class FooterComponent {
  private router = inject(Router);
  showFooter = true;
  currentYear = new Date().getFullYear();

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.showFooter = event.url !== '/' && event.urlAfterRedirects !== '/';
    });
  }
}
