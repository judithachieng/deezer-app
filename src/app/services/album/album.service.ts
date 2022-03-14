import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../../models/albums/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }
  getAlbums(query?: number): Observable<Album> {
    return this.http.get<Album>(`${environment.baseUrl}${query}/albums`, {'headers': this.headers});
  }
  
}

