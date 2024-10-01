import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  private apiKey = '9f5b561e8bc86637490707b05210a3b3';
  constructor(private http:HttpClient) { }

  getPopularMovies(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&page=${page}`);
  }
}
