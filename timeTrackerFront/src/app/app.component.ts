import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'timeTrackerFront';

  authenticated: boolean = false;

  ngOnInit(): void {
    console.log("session storage ", sessionStorage.getItem("username"))
    if (sessionStorage.getItem("username") === null){
      console.log("here false")
      this.authenticated = false;
    }else {
      console.log("here true")
      this.authenticated = true;
    }
    console.log("authenticated ", this.authenticated);
  }


}
