import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { FlowformModel } from '../../models/flowform.model';

@Component({
  selector: 'app-model-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './model-details.html',
  styleUrl: './model-details.css'
})
export class ModelDetailsComponent implements OnInit {
  lang = inject(LanguageService);
  data = inject(DataService);
  route = inject(ActivatedRoute);

  product?: FlowformModel;
  categoryId: string = '';
  categoryColor: string = 'indigo';
  categoryName: string = '';
  otherProducts: FlowformModel[] = [];

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.categoryId = params['category'];
      const id = params['id'];

      this.loadProduct(this.categoryId, id);
      window.scrollTo(0, 0);
    });
  }

  loadProduct(category: string, id: string) {
    const categoryMap: Record<string, string> = {
      'farming': 'industrial',
      'landscaping': 'municipal',
      'living': 'vitalization'
    };

    const dataCategory = categoryMap[category] || category || 'vitalization';
    const l = this.lang.language();
    const categoryData: FlowformModel[] = this.data.getModelsData(l)[dataCategory] || [];
    this.product = categoryData.find((m: FlowformModel) => m.id === id);

    if (this.product) {
      this.otherProducts = categoryData.filter((m: FlowformModel) => m.id !== id).slice(0, 3);
      this.categoryColor = dataCategory === 'industrial' ? 'emerald' : 'indigo';
      this.categoryName = this.lang.t(`nav_${dataCategory}`);
    }
  }

  get specs() {
    if (!this.product) return [];
    return [
      { label: this.lang.t('material_label'), value: this.product.material },
      { label: this.lang.t('dimensions_label'), value: this.product.dimensions },
      { label: this.lang.t('durability_label'), value: this.product.durability },
      { label: this.lang.t('maintenance_label'), value: this.product.maintenance }
    ];
  }
}
