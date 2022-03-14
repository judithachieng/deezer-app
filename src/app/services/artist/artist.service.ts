import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Artist } from '../../models/artist/artist';
import { map, mergeMap, toArray} from 'rxjs/operators'
import { List } from '../../models/list/list';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  getArtist(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${environment.baseUrl}${id}`, {'headers': this.headers})
  }

  getArtists(firstId: number, lastId: number): Observable<Artist[]>{
    return range(firstId, lastId)
    .pipe(
      map(a => this.getArtist(a)),
      mergeMap(a => a),
      toArray()
    )
  }


  searchArtist(artist: string): Observable<List> {
    const result = this.http.get<List>(`${environment.searchUrl}${artist}`, {'headers': this.headers})
    .pipe(
      map(a => a))
      return result;
  }

}
