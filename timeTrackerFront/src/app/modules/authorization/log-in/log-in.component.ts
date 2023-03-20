import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../core/model/User";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private authenticationService: AuthenticationService,
              public activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private router: Router) {
  }

  email = '';
  password = '';


  logIn() {
    console.log("login works ", this.email, this.password)
    this.authenticationService.loginUser(this.email, this.password).pipe(first())
      .subscribe(
        result => {
          console.log("result ", result);
          const tokenJSON: any = result;
          console.log(tokenJSON.token);

          const userData: User = jwtDecode(tokenJSON.token);
          console.log("userData - ", userData);

          sessionStorage.setItem("username", userData.username);
          sessionStorage.setItem("role", userData.role);
          sessionStorage.setItem("userData", JSON.stringify(userData));

          console.log("session username ", sessionStorage.getItem("username"))
          console.log("session userData ", sessionStorage.getItem("userData"))
          console.log("session role ", sessionStorage.getItem("role"))

          this.router.navigateByUrl('/dashboard');
        },
        error => {
          console.log(error);
        }
      );
  }
}
