import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from '../../models/artist/artist';
import { Tracklist } from '../../models/tracklist/tracklist';

@Injectable({
  providedIn: 'root'
})
export class TracklistService {

  @Input()artist: Artist;
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  getTracks(id: number): Observable<Tracklist> {
    return this.http.get<Tracklist>(`${environment.baseUrl}${id}/top?limit=5`, {'headers': this.headers});
  }
}
