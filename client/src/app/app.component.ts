import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating app';
  //Using Any removes the type safety.
  users: any;

  constructor(private http: HttpClient) { }

    ngOnInit() {
        //throw new Error("Method not implemented.");
      this.getUsers();
  }

  getUsers() {
    //using this, when we want to access any property inside a class.
    //subscribe is used to get the data
    this.http.get('https://localhost:5001/api/users').subscribe(Response => {
      this.users = Response;
    }, error => {
      console.log(error);
    })
  }
}
