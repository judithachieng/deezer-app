import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {  MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/shared-components/search-bar/search-bar.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';
import { TracksComponent } from './components/tracks/tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AlbumsComponent,
    ArtistDetailsComponent,
    ArtistsComponent,
    ArtistComponent,
    TrackComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, 
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
