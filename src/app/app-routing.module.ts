import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
  {
    path: 'artist',
    component: ArtistsComponent
  },
  {
    path: 'album',
    component: AlbumsComponent
  },
  {
    path: 'artist/:id',
    component: ArtistDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'artist'
  },
  { 
    path: '**',
    pathMatch: 'full',
    redirectTo: 'artist'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

