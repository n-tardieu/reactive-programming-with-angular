import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesSearchComponent } from './features/movies-search/movies-search.component';


@NgModule({
  declarations: [
    MoviesSearchComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
