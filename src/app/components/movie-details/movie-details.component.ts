import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieFetchService } from 'src/app/services/movie-fetch.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id:any= ''
  movieDetails:any = ''
  movieId:any = ''
  loading:any = true
  constructor(private movieService:MovieFetchService,private route:ActivatedRoute) { }
   ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })
    this.movieService.getPopMovieDetails(this.id).subscribe(response =>{
      this.movieDetails = response;
      this.loading = false
      this.movieId = this.movieDetails.id
    });
   
  }
}
