import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album/album.service'
import { Album } from '../../models/albums/albums'
import {  Artist} from '../../models/artist/artist'


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input() albumArtist: Artist;
  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums(this.albumArtist.id)
      .subscribe((a) => {
        if (!('error' in a)) {
          this.albums = a.data.slice(0,4);
          
        }
      });
  }

}
