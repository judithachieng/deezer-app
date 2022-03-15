import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist/artist';
import { ArtistService } from '../../services/artist/artist.service'

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  searchTerm: string;
  artists: Artist[] = new Array();


  constructor( private artistService: ArtistService) { }

  ngOnInit(): void {
    this.loadArtists(1,13);
  }



  loadArtists(firstId: number, lastId: number): void {
    this.artists = new Array();
    this.artistService.getArtists(firstId, lastId)
      .subscribe((x) => {
        const artists_list = x;
        artists_list.forEach(artist_each => {
          if (!('error' in artist_each)) {
            this.artists.push(artist_each);
          }
        });
      });
  }

  searchArtist(): void {
    this.artists = new Array();
    if ((this.searchTerm === '') || (this.searchTerm === ' ')) {
      this.loadArtists(1, 13);
    } else {
      this.artistService.searchArtist(this.searchTerm).subscribe((result) => {
        this.artists = result.data
          
        });
    
    }
  }
}