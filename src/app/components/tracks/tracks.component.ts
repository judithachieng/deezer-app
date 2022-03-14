import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  tracks: Track[];
  artistId: number;
  activatedRoute: any;
  tracklistService: any;
  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));
    });

    this.tracklistService.getTracklist(this.artistId)
      .subscribe((res) => {
        this.tracks = res.data;
        console.log('Tracks', this.tracks)
      });
  }

}
