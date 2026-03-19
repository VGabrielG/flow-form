import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
    <nav class="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
      <div class="max-w-7xl mx-auto flex justify-center items-center pointer-events-auto">
        <div class="hidden md:flex space-x-2 items-center bg-white/70 backdrop-blur-3xl border border-white/20 p-2 rounded-full shadow-2xl">
          
          <div class="flex items-center space-x-1 px-2">
            <!-- HOME -->
            <a #rlaHome="routerLinkActive"
              routerLink="/"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              [routerLinkActiveOptions]="{exact: true}"
              [ngClass]="rlaHome.isActive ? 'hover:text-white' : 'text-neutral-500 hover:text-neutral-950'"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300"
            >
              {{ lang.t('nav_home') }}
            </a>

            <!-- PRODUCTS -->
            <a #rlaProd="routerLinkActive"
              routerLink="/products"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              [ngClass]="rlaProd.isActive ? 'hover:text-white' : 'text-neutral-500 hover:text-neutral-950'"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300"
            >
              {{ lang.t('nav_products') }}
            </a>
            
            <!-- INDUSTRIES DROPDOWN -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-500 hover:text-neutral-950 flex items-center gap-1 focus:outline-none">
                {{ lang.t('nav_industries') }}
                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              <div class="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top z-50">
                <div class="absolute -top-4 left-0 right-0 h-4 pointer-events-auto"></div>
                <div class="bg-white/90 backdrop-blur-3xl border border-neutral-200/50 rounded-3xl shadow-2xl p-2 flex flex-col gap-1">
                  
                  <a #rlaWine="routerLinkActive" routerLink="/winery" routerLinkActive="bg-neutral-950 text-white shadow-md"
                    [ngClass]="rlaWine.isActive ? 'hover:text-white' : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950'"
                    class="px-5 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-between">
                    {{ lang.t('nav_winery') }}
                    <span class="text-[12px] group-hover:scale-110 transition-transform">🍷</span>
                  </a>
                  
                  <a #rlaMeat="routerLinkActive" routerLink="/meat-industry" routerLinkActive="bg-neutral-950 text-white shadow-md"
                    [ngClass]="rlaMeat.isActive ? 'hover:text-white' : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950'"
                    class="px-5 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-between">
                    {{ lang.t('nav_meat') }}
                    <span class="text-[12px] group-hover:scale-110 transition-transform">🥩</span>
                  </a>
                  

                  
                  <a #rlaMuni="routerLinkActive" routerLink="/municipalities" routerLinkActive="bg-neutral-950 text-white shadow-md"
                    [ngClass]="rlaMuni.isActive ? 'hover:text-white' : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950'"
                    class="px-5 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-between">
                    {{ lang.t('nav_municipalities') }}
                    <span class="text-[12px] group-hover:scale-110 transition-transform">🏛️</span>
                  </a>
                  
                  <a #rlaPool="routerLinkActive" routerLink="/ecological-pool" routerLinkActive="bg-neutral-950 text-white shadow-md"
                    [ngClass]="rlaPool.isActive ? 'hover:text-white' : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950'"
                    class="px-5 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-between">
                    {{ lang.t('nav_ecological_pool') }}
                    <span class="text-[12px] group-hover:scale-110 transition-transform">🏊</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- FUTURE SOLUTIONS DROPDOWN -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-neutral-400 hover:text-neutral-950 flex items-center gap-1 focus:outline-none">
                {{ lang.language() === 'es' ? 'Futuras Soluciones' : 'Future Solutions' }}
                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              <div class="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top z-50">
                <div class="absolute -top-4 left-0 right-0 h-4 pointer-events-auto"></div>
                <div class="bg-white/90 backdrop-blur-3xl border border-neutral-200/50 rounded-3xl shadow-2xl p-2 flex flex-col gap-1">
                  
                  <!-- Mining -->
                  <a routerLink="/mining" class="px-5 py-3 rounded-2xl flex items-center justify-between hover:bg-neutral-100 transition-colors group/item shadow-sm">
                    <div class="flex-1">
                      <div class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700 group-hover/item:text-neutral-950 flex items-center justify-between pr-4">
                        {{ lang.t('nav_mining') }}
                        <span class="text-[11px]">⛏️</span>
                      </div>
                      <div class="text-[8px] font-medium text-neutral-400 mt-0.5">
                        {{ lang.language() === 'es' ? 'Tratamiento de aguas mineras' : 'Mining water treatment' }}
                      </div>
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-600 rounded-full whitespace-nowrap">
                      {{ lang.language() === 'es' ? 'Próximamente' : 'Soon' }}
                    </span>
                  </a>

                  <!-- Desalination -->
                  <a routerLink="/desalination" class="px-5 py-3 rounded-2xl flex items-center justify-between hover:bg-neutral-100 transition-colors group/item">
                    <div class="flex-1">
                      <div class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700 group-hover/item:text-neutral-950 flex items-center justify-between pr-4">
                        {{ lang.language() === 'es' ? 'Desalinización' : 'Desalination' }}
                        <span class="text-[11px]">🌊</span>
                      </div>
                      <div class="text-[8px] font-medium text-neutral-400 mt-0.5">
                        {{ lang.language() === 'es' ? 'Vitalización post-osmosis' : 'Post-osmosis vitalization' }}
                      </div>
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-600 rounded-full whitespace-nowrap">
                      {{ lang.language() === 'es' ? 'Próximamente' : 'Soon' }}
                    </span>
                  </a>

                  <!-- Data Centers -->
                  <a routerLink="/data-centers" class="px-5 py-3 rounded-2xl flex items-center justify-between hover:bg-neutral-100 transition-colors group/item">
                    <div class="flex-1">
                      <div class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700 group-hover/item:text-neutral-950 flex items-center justify-between pr-4">
                        {{ lang.language() === 'es' ? 'Centros de Datos' : 'Data Centers' }}
                        <span class="text-[11px]">🌐</span>
                      </div>
                      <div class="text-[8px] font-medium text-neutral-400 mt-0.5">
                        {{ lang.language() === 'es' ? 'Enfriamiento sin químicos' : 'Chemical-free cooling' }}
                      </div>
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-600 rounded-full whitespace-nowrap">
                      {{ lang.language() === 'es' ? 'Próximamente' : 'Soon' }}
                    </span>
                  </a>

                  <!-- Thermal Waters -->
                  <a routerLink="/thermal-waters" class="px-5 py-3 rounded-2xl flex items-center justify-between hover:bg-neutral-100 transition-colors group/item shadow-sm">
                    <div class="flex-1">
                      <div class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700 group-hover/item:text-neutral-950 flex items-center justify-between pr-4">
                        {{ lang.language() === 'es' ? 'Aguas Termales' : 'Thermal Waters' }}
                        <span class="text-[11px]">♨️</span>
                      </div>
                      <div class="text-[8px] font-medium text-neutral-400 mt-0.5">
                        {{ lang.language() === 'es' ? 'Tratamiento natural profundo' : 'Deep natural treatment' }}
                      </div>
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-600 rounded-full whitespace-nowrap">
                      {{ lang.language() === 'es' ? 'Próximamente' : 'Soon' }}
                    </span>
                  </a>

                  <!-- Textile Industry -->
                  <a routerLink="/textile-industry" class="px-5 py-3 rounded-2xl flex items-center justify-between hover:bg-neutral-100 transition-colors group/item shadow-sm">
                    <div class="flex-1">
                      <div class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700 group-hover/item:text-neutral-950 flex items-center justify-between pr-4">
                        {{ lang.language() === 'es' ? 'Industria Textil' : 'Textile Industry' }}
                        <span class="text-[11px]">🧵</span>
                      </div>
                      <div class="text-[8px] font-medium text-neutral-400 mt-0.5">
                        {{ lang.language() === 'es' ? 'Remediación de tintes' : 'Dye remediation' }}
                      </div>
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-600 rounded-full whitespace-nowrap">
                      {{ lang.language() === 'es' ? 'Próximamente' : 'Soon' }}
                    </span>
                  </a>

                  <!-- Green Hydrogen -->
                  <a routerLink="/green-hydrogen" class="px-5 py-3 rounded-2xl flex items-center justify-between hover:bg-neutral-100 transition-colors group/item shadow-sm">
                    <div class="flex-1">
                      <div class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700 group-hover/item:text-neutral-950 flex items-center justify-between pr-4">
                        {{ lang.language() === 'es' ? 'Hidrógeno Verde' : 'Green Hydrogen' }}
                        <span class="text-[11px]">🔋</span>
                      </div>
                      <div class="text-[8px] font-medium text-neutral-400 mt-0.5">
                        {{ lang.language() === 'es' ? 'Oxígeno Verde y Brine' : 'Green Oxygen and Brine' }}
                      </div>
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-600 rounded-full whitespace-nowrap">
                      {{ lang.language() === 'es' ? 'Próximamente' : 'Soon' }}
                    </span>
                  </a>

                  <!-- Leachate -->
                  <a routerLink="/leachate" class="px-5 py-3 rounded-2xl flex items-center justify-between hover:bg-neutral-100 transition-colors group/item shadow-sm">
                    <div class="flex-1">
                      <div class="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700 group-hover/item:text-neutral-950 flex items-center justify-between pr-4">
                        {{ lang.language() === 'es' ? 'Remediación de lixiviados' : 'Leachate remediation' }}
                        <span class="text-[11px]">🏗️</span>
                      </div>
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-600 rounded-full whitespace-nowrap">
                      {{ lang.language() === 'es' ? 'Próximamente' : 'Soon' }}
                    </span>
                  </a>

                </div>
              </div>
            </div>

            <!-- CONTACT -->
            <a #rlaContact="routerLinkActive"
              routerLink="/contact"
              routerLinkActive="bg-neutral-950 text-white shadow-xl"
              [ngClass]="rlaContact.isActive ? 'hover:text-white' : 'text-neutral-500 hover:text-neutral-950'"
              class="px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300"
            >
              {{ lang.t('nav_contact') }}
            </a>
          </div>

          <div class="w-px h-6 bg-neutral-200/50"></div>

          <!-- Language Toggle -->
          <div class="flex items-center bg-neutral-100/50 rounded-full p-1 border border-neutral-200/50 ml-1">
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
