import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
    <nav class="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
      <div class="max-w-7xl mx-auto flex justify-center items-center pointer-events-auto">
        <div class="hidden md:flex space-x-4 items-center bg-white/70 backdrop-blur-2xl border border-white/20 p-2 rounded-full shadow-2xl">
          <div class="flex space-x-1 px-4">
            <a
              routerLink="/"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              [routerLinkActiveOptions]="{exact: true}"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900"
            >
              {{ lang.t('nav_home') }}
            </a>
            <a
              routerLink="/products"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900"
            >
              {{ lang.t('nav_products') }}
            </a>
            <a
              routerLink="/winery"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900"
            >
              {{ lang.t('nav_winery') }}
            </a>
            <a
              routerLink="/meat-industry"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900"
            >
              {{ lang.t('nav_meat') }}
            </a>
            <a
              routerLink="/mining"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900"
            >
              {{ lang.t('nav_mining') }}
            </a>
            <a
              routerLink="/municipalities"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900"
            >
              {{ lang.t('nav_municipalities') }}
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900"
            >
              {{ lang.t('nav_contact') }}
            </a>
          </div>

          <div class="w-px h-6 bg-neutral-200/50"></div>

          <!-- Language Toggle -->
          <div class="flex items-center bg-neutral-100/50 rounded-full p-1 border border-neutral-200/50">
            <button
              (click)="lang.setLanguage('en')"
              [ngClass]="lang.language() === 'en' ? 'bg-white text-neutral-900 shadow-lg' : 'text-neutral-400 hover:text-neutral-600'"
              class="px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest transition-all duration-300"
            >
              EN
            </button>
            <button
              (click)="lang.setLanguage('es')"
              [ngClass]="lang.language() === 'es' ? 'bg-white text-neutral-900 shadow-lg' : 'text-neutral-400 hover:text-neutral-600'"
              class="px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest transition-all duration-300"
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
    styles: [`
    :host { display: block; }
  `]
})
export class HeaderComponent {
    lang = inject(LanguageService);
}
