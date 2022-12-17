import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularComponent } from './components/popular/popular.component';
import { TitlePipe } from './pipes/title.pipe';
import { PlayVideoComponent } from './components/play-video/play-video.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SafePipe } from './pipes/safe.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    PopularComponent,
    TitlePipe,
    MovieDetailsComponent,
    PlayVideoComponent,
    NotFoundComponent,
    SafePipe,
    FooterComponent,
    FaqComponent,
    MoviesComponent,
    TvDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
