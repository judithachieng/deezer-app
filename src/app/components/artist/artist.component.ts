import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../models/artist/artist'
import { MatCard, MatCardActions} from '@angular/material/card'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() artist: Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
