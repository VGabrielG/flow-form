import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-biochemistry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biochemistry.html',
  styleUrl: './biochemistry.css'
})
export class BiochemistryComponent implements OnInit {
  lang = inject(LanguageService);
  data = inject(DataService);
  route = inject(ActivatedRoute);

  category: string = 'vitalization';

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.category = params['category'] || 'vitalization';
    });
  }

  get scienceFacts() {
    return this.data.getScienceStats(this.lang.language())[this.category] || [];
  }

  get caseStudies() {
    return this.data.getCaseStudiesData(this.lang.language())[this.category] || [];
  }

  get themeColorClass() {
    if (this.category === 'vitalization') return 'bg-neutral-600';
    if (this.category === 'industrial') return 'bg-zinc-600';
    return 'bg-stone-600';
  }
}
