import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/shared-components/search-bar/search-bar.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AlbumsComponent,
    ArtistDetailsComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
