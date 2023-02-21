import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesSearchComponent } from './features/movies-search/movies-search.component';

const childRoutes: Routes = [  
  { path: '', component: MoviesSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
