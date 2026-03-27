import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mining.html',
  styleUrl: './mining.css'
})
export class MiningComponent {
  lang = inject(LanguageService);
  viewMode: any = 'process';

  toggleViewMode(mode: string) {
    this.viewMode = mode;
  }
}
