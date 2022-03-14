import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/artist/artist';
import { ArtistService } from '../../services/artist/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  artistId: number;
  artist: Artist;
  

  constructor(private activatedRoute: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));

      this.artistService.getArtist(this.artistId)
        .subscribe((a) => {
          if (!('error' in a)) {
            this.artist = a;
          }

        });

    });
  }

}
