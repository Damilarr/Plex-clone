import { Component, OnInit } from '@angular/core';
import { MovieFetchService } from 'src/app/services/movie-fetch.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  popular:any=[]
  popular2:any=[]
  constructor(private movieService:MovieFetchService) { }

  ngOnInit(): void {
    this.movieService.getPopularTv().subscribe((data)=>{
      this.popular = [...data.results]
    })
    this.movieService.getPopularTv2().subscribe((data)=>{
      this.popular2 = [...data.results]
    })
   
  }

}
