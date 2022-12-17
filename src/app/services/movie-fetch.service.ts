import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieFetchService {

  constructor(private http:HttpClient) { }
  getPopularTv(){
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/popular?api_key=1099d96100ea6fe3a48bcc110ed3036b`)
    .pipe((retry(4)),catchError(this.handleErorr));
  }
  getPopularTv2(){
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/popular?api_key=1099d96100ea6fe3a48bcc110ed3036b&page=2`)
    .pipe((retry(4)),catchError(this.handleErorr))
  }
  getMovies(){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=1099d96100ea6fe3a48bcc110ed3036b`)
    .pipe((retry(4)),catchError(this.handleErorr));
  }
  getMovies2(){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=1099d96100ea6fe3a48bcc110ed3036b&page=2`)
    .pipe((retry(4)),catchError(this.handleErorr))
  }
  getPopTvDetails(id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${id}?api_key=1099d96100ea6fe3a48bcc110ed3036b`)
    .pipe((retry(4)),catchError(this.handleErorr));
  }
  getPopMovieDetails(id:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=1099d96100ea6fe3a48bcc110ed3036b`)
    .pipe((retry(4)),catchError(this.handleErorr));
  }
  getVideo(type:any,vidId:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/${type}/${vidId}/videos?api_key=1099d96100ea6fe3a48bcc110ed3036b`)
    .pipe((retry(4)),catchError(this.handleErorr));
  }
  getPopMovieVideo(vidId:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${vidId}/videos?api_key=1099d96100ea6fe3a48bcc110ed3036b`)
    .pipe((retry(4)),catchError(this.handleErorr));
  }
  search(category:any ='multi',searchQuery:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/search/${category}?api_key=1099d96100ea6fe3a48bcc110ed3036b&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
    .pipe((retry(4)),catchError(this.handleErorr));
  }

  handleErorr(error: HttpErrorResponse):any{
    alert(error.message)
  }
}
