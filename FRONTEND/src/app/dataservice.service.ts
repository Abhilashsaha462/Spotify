import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reg } from './reg';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  url="http://localhost:9000/api/v2/login";

  loginUser(token:any, email: any){
    localStorage.setItem("token",token);
    localStorage.setItem("email", email);
    // this.router.navigateByUrl("");
    return true;
  }

  checkData(logData1:reg): Observable<reg> {
  return this.httpClient.post<reg>(`${this.url}`,logData1,{responseType:'text' as 'json'});
  }

  url1="http://localhost:9000/api/v2/register";

  storeData(regData1: reg): Observable<reg>{ 
    return this.httpClient.post<reg>(`${this.url1}`,regData1,{responseType:'text' as 'json'});
  }
  
}
