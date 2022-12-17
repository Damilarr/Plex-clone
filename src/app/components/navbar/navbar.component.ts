import { Component, OnInit } from '@angular/core';
import { MovieFetchService } from 'src/app/services/movie-fetch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchInp:any = ''
  loading:any = true
  searchResult:any = []
  category:any = 'multi'
  constructor(private movieService:MovieFetchService) { }
  setCategory(param:any){
    this.loading = true
    this.category = param
    this.searchMovie()
  }
  closeModal(){
    document.getElementById('modalCloseBtn')?.click()
  }
  searchMovie(){
    this.movieService.search(this.category,this.searchInp).subscribe(response =>{
      console.log(response);
      this.searchResult = [...response.results]
      console.log(this.searchResult);
      this.loading=false
    }, (error)=>{
      alert(error.message)

    }) 
  }
  displayMovie(){
    this.loading = true
    this.searchResult = []
    document.getElementById('modalBtn')?.click()
    this.searchMovie()
  }
  ngOnInit(): void {
  }

}
