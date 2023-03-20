import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";
// @ts-ignore
import * as sha1 from 'js-sha1';
import {User} from "../core/model/User";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public readonly PASSWORD_HASHING_ITERATIONS_AMOUNT = 5;
  url = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      observe: 'response'
    })
  };

  constructor(private http: HttpClient) {
  }

  /* POST: login user */
  loginUser(username: string, password: string): Observable<User> {
    console.log("loginUser ", username, password)
    const userInfo = {
      username,
      password: this.passwordHashing(password, this.PASSWORD_HASHING_ITERATIONS_AMOUNT)
    };
    console.log("userInfo ", userInfo)
    return this.http.post<User>(this.url + 'login', JSON.stringify(userInfo), this.httpOptions).pipe(
      userData => {
        console.log("userData ", userData);
        const tokenJSON: any = userData;
        let tokenStr = 'Bearer ' + tokenJSON.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }
    );
  }

  signup(username: string, password: string, lastName: string, firstName: string, email: string ){
    console.log("signup ", username, password, lastName, firstName, email);
    const userInfo = {
      username,
      email,
      firstName,
      lastName,
      password: this.passwordHashing(password, this.PASSWORD_HASHING_ITERATIONS_AMOUNT)
    };
    console.log("signup userInfo ", userInfo)
    return this.http.post(this.url + 'signup',  JSON.stringify(userInfo), this.httpOptions).pipe(
      res => {
        console.log(res);
        return res;
    }
    );
  }

  signoutUser(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userDate");
  }

  passwordHashing(password: string, iterations?: number) {
    let crypt = sha1(password);
    // @ts-ignore
    for (let i = 0; i < iterations; ++i) {
      crypt = sha1(crypt);
    }
    return crypt;
  }
}
