import { Component, inject, OnInit, computed, signal, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { FlowformModel } from '../../models/flowform.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  lang = inject(LanguageService);
  data = inject(DataService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  searchTerm = signal('');
  activeTab = signal<string>('all');

  tabs = [
    { id: 'all', label_key: 'tab_all' },
    { id: 'landscaping', label_key: 'tab_landscaping' },
    { id: 'farming', label_key: 'tab_farming' },
    { id: 'living', label_key: 'tab_living' }
  ];

  categories: Array<{ id: 'municipal' | 'industrial' | 'vitalization', title_key: string }> = [
    { id: 'municipal', title_key: 'cat_landscaping' },
    { id: 'industrial', title_key: 'cat_agricultural' },
    { id: 'vitalization', title_key: 'cat_interior' }
  ];

  allModels = computed(() => {
    const l = this.lang.language();
    const data = this.data.getModelsData(l);
    return {
      municipal: data['municipal'] || [],
      industrial: data['industrial'] || [],
      vitalization: data['vitalization'] || []
    };
  });

  filteredModels = computed(() => {
    const searchLower = this.searchTerm().toLowerCase();
    const tab = this.activeTab();
    const models = this.allModels();

    const filterFn = (list: FlowformModel[]) =>
      list.filter(m =>
        m.name.toLowerCase().includes(searchLower) ||
        m.description.toLowerCase().includes(searchLower)
      );

    return {
      municipal: tab === 'all' || tab === 'landscaping' ? filterFn(models.municipal) : [],
      industrial: tab === 'all' || tab === 'farming' ? filterFn(models.industrial) : [],
      vitalization: tab === 'all' || tab === 'living' ? filterFn(models.vitalization) : []
    };
  });

  ngOnInit() {
    this.initCanvas();
    window.addEventListener('resize', this.onResize);

    this.route.params.subscribe((params: any) => {
      const cat = params['category'];
      if (cat) {
        // Map URL categories to home page tabs
        const tabMap: any = {
          'municipal': 'landscaping',
          'industrial': 'farming',
          'vitalization': 'living'
        };
        this.activeTab.set(tabMap[cat] || 'all');
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Set canvas dimensions
  }

  onResize = () => {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  onSearchInput(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  navigateDetails(catId: string, id: string) {
    this.router.navigate(['/model', catId, id]);
  }
}
