import { Routes } from '@angular/router';

import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sample1', pathMatch: 'full' },
    { path: 'sample1', component: Sample1Component },
    { path: 'sample2', component: Sample2Component },
    { path: 'sample3', component: Sample3Component }
  ];
