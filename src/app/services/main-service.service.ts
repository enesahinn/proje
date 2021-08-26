import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';


@Injectable({
    providedIn: "root"
})

export class RestApiService {

    apiURL = 'http://localhost:4200'

    constructor(private http: HttpClient) { }

    httpOptions = {
        Headers: new HttpHeaders({
            'Content-Type':'application/json'
        })
    }


    

}


// login ()
// httpclient.get<>(url);
// url = localhost:8080/login