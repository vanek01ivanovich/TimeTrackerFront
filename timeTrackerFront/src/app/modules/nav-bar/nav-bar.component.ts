import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  authenticated: boolean = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
   /* console.log("session storage ", sessionStorage.getItem("username"))
    if (sessionStorage.getItem("username") === null){
      console.log("here false")
      this.authenticated = false;
    }else {
      console.log("here true")
      this.authenticated = true;
    }
    console.log("authenticated ", this.authenticated);*/
  }

  logout(){

    this.router.navigate(['/login']).then(
      () => {
        this.authenticationService.signoutUser();
        console.log("session username ", sessionStorage.getItem("username"))
        console.log("session userData ", sessionStorage.getItem("userData"))
        console.log("session role ", sessionStorage.getItem("role"))
        this.authenticated = false;
        location.reload()}
    );
  }

}
