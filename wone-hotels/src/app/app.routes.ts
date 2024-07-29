import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Search',
    component: SearchComponent,
  },
];
