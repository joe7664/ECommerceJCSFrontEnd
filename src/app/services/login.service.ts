import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    id: number = 0

    constructor(private http:HttpClient){
        let sessionID = localStorage.getItem("accountId")
        if (sessionID !== null && sessionID!=="0") this.id = sessionID as unknown as number;
    }
    
    register(account:Account) : Observable<any> {
        const header = new HttpHeaders();
        header.append("accept", "text/json");
        header.append("Access-Control-Allow-Origin", "*");
        return this.http.post("http://localhost:9000/register", account, {responseType:"text"});
    }

    login(account:Account) : Observable<Account> {
        const header = new HttpHeaders();
        header.append("accept", "text/json");
        header.append("Access-Control-Allow-Origin", "*");
        return this.http.post<Account>("http://localhost:9000/login", account, {headers:header});
    }
}