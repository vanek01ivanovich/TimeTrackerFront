import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from "../services/user-service.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private router: Router, private userService: UserServiceService) {
  }

  ngOnInit(): void {

  }

  findall(){
    this.userService.getAll().pipe(first()).subscribe()
  }

}
