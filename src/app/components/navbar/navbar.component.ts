
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
    <nav class="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
      <div class="max-w-7xl mx-auto flex justify-center items-center pointer-events-auto">
        <div class="hidden md:flex space-x-4 items-center bg-white/70 backdrop-blur-2xl border border-white/20 p-2 rounded-full shadow-2xl">
          <div class="flex space-x-1 px-4">
            <a routerLink="/" routerLinkActive="bg-neutral-950 text-white shadow-xl" [routerLinkActiveOptions]="{exact: true}"
              class="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900 pointer-events-auto">
              {{ lang.t('nav_home') }}
            </a>
            <a routerLink="/products" routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900 pointer-events-auto">
              {{ lang.t('nav_products') }}
            </a>
            <a routerLink="/winery" routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900 pointer-events-auto">
              {{ lang.t('nav_winery') }}
            </a>
            <a routerLink="/meat-industry" routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900 pointer-events-auto">
              {{ lang.t('nav_meat') }}
            </a>

            <a routerLink="/municipalities" routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900 pointer-events-auto">
              {{ lang.t('nav_municipalities') }}
            </a>
            <a routerLink="/contact" routerLinkActive="bg-neutral-950 text-white shadow-xl"
              class="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-900 pointer-events-auto">
              {{ lang.t('nav_contact') }}
            </a>
          </div>

          <div class="w-px h-6 bg-neutral-200/50"></div>

          <!-- Language Toggle -->
          <div class="flex items-center bg-neutral-100/50 rounded-full p-1 border border-neutral-200/50 pointer-events-auto">
            <button
              (click)="lang.setLanguage('en')"
              [class.bg-white]="lang.language() === 'en'"
              [class.text-neutral-900]="lang.language() === 'en'"
              [class.shadow-lg]="lang.language() === 'en'"
              class="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 text-neutral-400 hover:text-neutral-600"
            >
              EN
            </button>
            <button
              (click)="lang.setLanguage('es')"
              [class.bg-white]="lang.language() === 'es'"
              [class.text-neutral-900]="lang.language() === 'es'"
              [class.shadow-lg]="lang.language() === 'es'"
              class="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 text-neutral-400 hover:text-neutral-600"
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent {
    lang = inject(LanguageService);
}
