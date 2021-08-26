import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

   createUser(data : any) {
    let API_URL = `http://localhost:8090/rental/account/addUser`;
    return this.http.post(API_URL, data);
  }
}
   
