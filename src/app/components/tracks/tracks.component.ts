
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracklistService } from '../../services/tracklist/tracklist.service';
import { Track } from '../../models/track/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  tracks: Track[];
  artistId: number;
  
  constructor(private activatedRoute: ActivatedRoute, private tracklistService: TracklistService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));
    });

    this.tracklistService.getTracks(this.artistId)
      .subscribe((res) => {
        this.tracks = res.data;
      });
  }

}
