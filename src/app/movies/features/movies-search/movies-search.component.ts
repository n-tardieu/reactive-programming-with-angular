import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, switchMap, tap } from 'rxjs';
import { MoviesService } from '../../data-access/movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {

  searchControl = new FormControl();
  searchResults$: Observable<string[]>;


  constructor(private moviesService: MoviesService) {
    this.searchResults$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.moviesService.search(query))
    );
  }

  ngOnInit(): void { }

}
