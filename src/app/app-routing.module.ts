import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayVideoComponent } from './components/play-video/play-video.component';
import { PopularComponent } from './components/popular/popular.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeroComponent },
  { path: 'tvDetail/:id', component: TvDetailsComponent },
  { path: 'movieDetail/:id', component: MovieDetailsComponent },
  { path: 'video/:type/:id', component: PlayVideoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
