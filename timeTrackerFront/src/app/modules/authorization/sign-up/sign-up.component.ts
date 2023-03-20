import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  email = '';
  password = '';
  firstName = '';
  lastName = '';
  username = '';

  ngOnInit(): void {
  }

  signup(){
      this.authenticationService.signup(this.username,this.password,this.lastName,this.firstName,this.email)
        .pipe(first())
      .subscribe(
        n => {
          //location.reload();
        },
        error => {
          //console.log(error);
        }
      );
  }

}
