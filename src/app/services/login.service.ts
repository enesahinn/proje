import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

   createTask(data : any) {
    let API_URL = `http://localhost:8888/account/login`;
    return this.http.post(API_URL, data);
  }
}
   
