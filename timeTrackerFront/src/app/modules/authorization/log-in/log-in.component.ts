import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private authenticationService: AuthenticationService,
              public activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private _router: Router) {
  }

  email = '';
  password = '';


  logIn() {
    console.log("login works ", this.email, this.password)
    this.authenticationService.loginUser(this.email, this.password).pipe(first())
      .subscribe(
        n => {
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
  }
}
