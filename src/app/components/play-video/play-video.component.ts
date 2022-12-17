import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieFetchService } from 'src/app/services/movie-fetch.service';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit {
  id: any;
  videoKey:any = ''
  type:any = ''
  videoUrl:any = ''
  loading:any = true
  currentIndex:any = 0;totalIndex:any;
  constructor(private movieService:MovieFetchService,private route:ActivatedRoute,private router:Router,private location:Location) { }
  getVids(id:any,type:any){
    this.movieService.getVideo(type,id).subscribe((vids)=>{
      if (vids.results.length > 0) {
        this.videoKey = vids
        console.log(this.videoKey);
        this.totalIndex= this.videoKey.results.length
        this.setUrl()
        let huj:any =  document.getElementById('prevBtn');
        huj.style.display = 'none';
        if (vids.results.length == 1) {
          let huj:any =  document.getElementById('nextBtn');
          huj.style.display = 'none';
        }
      }else{
        alert('could not play video')
        this.router.navigate([''])
      }
     
    });
  }
  nextVideo(){
    this.loading = true
    if ( this.currentIndex < this.totalIndex && this.currentIndex != this.totalIndex -1) {
      this.currentIndex++
      this.setUrl()
      let huj:any =  document.getElementById('prevBtn');
      huj.style.display = 'block';
    }
    else{
      let huj:any =  document.getElementById('nextBtn');
      huj.style.display = 'none';
    }
    if (this.currentIndex == this.totalIndex -1) {
      let huj:any =  document.getElementById('nextBtn');
      huj.style.display = 'none';
    }
  }
  goBack(){
    this.router.navigate([''])
  }
  previousVideo(){
    this.loading = true
    if (this.currentIndex != 0) {
      this.currentIndex--;
      this.setUrl()
    }
  }
  setUrl(){
    this.videoUrl = `https://www.youtube.com/embed/${this.videoKey.results[this.currentIndex].key}?controls=1`
    this.loading = false
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');  
      this.type = params.get('type')
      this.getVids(this.id,this.type)    
    });
  }
}
