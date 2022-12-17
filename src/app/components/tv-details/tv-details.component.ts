import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieFetchService } from 'src/app/services/movie-fetch.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  id:any= ''
  tvDetails:any = ''
  tvId:any = ''
  loading:any = true
  constructor(private movieService:MovieFetchService,private route:ActivatedRoute) { }
 ngOnInit(): void {
  this.route.paramMap.subscribe((params: ParamMap) => {
    console.log(params);
    this.id = params.get('id');
  })
  this.movieService.getPopTvDetails(this.id).subscribe(response =>{
    this.tvDetails = response;
    this.loading = false
    this.tvId = this.tvDetails.id
  });
 
}

}
