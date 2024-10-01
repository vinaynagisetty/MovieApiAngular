import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements  OnInit {
constructor(private movSerive:MoviesService){}
movies: any[] = [];
  totalResults: number = 0;
  currentPage: number = 1;
  totalPages: number=0;
  itemsPerPage: number = 20;
  allMovies: any[] = [];  // To store all fetched movies
  ngOnInit(): void {
    this.loadAllMovies();
  }
  loadAllMovies(): void {
    for (let i = 1; i <= 5; i++) {  // Fetch the first 5 pages of popular movies
      this.movSerive.getPopularMovies(i).subscribe((response) => {
        this.allMovies = [...this.allMovies, ...response.results];
        this.totalResults = this.allMovies.length;
        this.totalPages = Math.ceil(this.totalResults / this.itemsPerPage);
        this.paginateMovies(this.currentPage);
      });
    }
  }

  paginateMovies(page: number): void {
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.movies = this.allMovies.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.paginateMovies(this.currentPage);
  }

}
