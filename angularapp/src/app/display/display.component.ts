import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public movies_data;
  // public series_data;
  public movies;
  // public series;
  public years = new Set();
  public cast = new Set();

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.getData()
      .subscribe(data => {
        this.movies_data = data["movies"];
        // this.series_data = data["series"];
        this.movies = this.movies_data;
        this.getYear();
        this.getCast();
      });
  }

  getYear() {
    this.years.add("All");
    for(let movie of this.movies){
      this.years.add(movie.Released);
    }
  }

  getCast() {
    this.cast.add("All");
    for(let movie of this.movies){
      for(let artist of movie.Cast){
        this.cast.add(artist);
      }
    }
  }

  update(Y, C) {
    if(Y.value == "All" && C.value == "All"){
      this.movies = this.movies_data;
    }else if(Y.value == "All"){
      this.movies = this.movies_data.filter(function(movie) {
        return movie.Cast.includes(C.value);
      });
    }else if(C.value == "All"){
      this.movies = this.movies_data.filter(function(movie) {
        return movie.Released == Y.value;
      });
    }else{
      this.movies = this.movies_data.filter(function(movie) {
        return movie.Released == Y.value && movie.Cast.includes(C.value);
      });
    }
  }
}
