
import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/products/home';
import { ModelDetailsComponent } from './pages/model-details/model-details';
import { BiochemistryComponent } from './pages/biochemistry/biochemistry';
import { WineryComponent } from './pages/winery/winery';
import { MeatIndustryComponent } from './pages/meat-industry/meat-industry';
import { MiningComponent } from './pages/mining/mining';
import { MunicipalitiesComponent } from './pages/municipalities/municipalities';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'products', component: HomeComponent },
    { path: 'category/:category', component: HomeComponent },
    { path: 'model/:category/:id', component: ModelDetailsComponent },
    { path: 'biochemistry/:category', component: BiochemistryComponent },
    { path: 'winery', component: WineryComponent },
    { path: 'meat-industry', component: MeatIndustryComponent },
    { path: 'mining', component: MiningComponent },
    { path: 'municipalities', component: MunicipalitiesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
