import { Component, OnInit } from '@angular/core';
import { MovieFetchService } from 'src/app/services/movie-fetch.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any = []
  movies2:any = []
  constructor(private movieService:MovieFetchService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data)=>{
      this.movies = [...data.results]
    })
    this.movieService.getMovies2().subscribe((data)=>{
      this.movies2 = [...data.results]
    })
   
  }

}
