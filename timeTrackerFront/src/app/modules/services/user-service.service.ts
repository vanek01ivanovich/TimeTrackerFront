import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<any> {
    return this.http.get<any>(environment.url + 'user/getall', this.httpOptions).pipe(

    );
  }

  findUserByEmail(email: string){
    return this.http.get<any>(environment.url + 'user/get-user-by-email/' + email, this.httpOptions).pipe(

    );
  }

  findUserByUserName(userName: string){
    return this.http.get<any>(environment.url + 'user/get-user-by-username/' + userName, this.httpOptions).pipe(

    );
  }

  findUserById(id: string){
    return this.http.get<any>(environment.url + 'user/get-user-by-id/' + id, this.httpOptions).pipe(

    );
  }

  constructor(private http: HttpClient) {
  }

}
