import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from './playlist';
import { reg1 } from './reg1';
import { reg2 } from './reg2';

@Injectable({
  providedIn: 'root'
})
export class Data1serviceService {

  constructor(private httpClient:HttpClient) { }

  url="http://localhost:9000/api/v1/register";

  userData(regData2: reg1): Observable<reg1>{ 
    return this.httpClient.post<reg1>(`${this.url}`,regData2,{responseType:'text' as 'json'});
  }

  // setemail(email:string) {
  //     localStorage.setItem("email",email);
  //     alert(email);
     
  //     return true;
  // }

  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

 

  getemail() {
    // alert(" get email "+localStorage.getItem("email"));
    this.get();
    return localStorage.getItem("email");
  }

  url2 : string="http://localhost:9000/api/v1/allsongs/";
  get() {
    // alert(this.url2);
    
  }
  // reqHeader =new HttpHeaders().set('Authorization','Bearer '+window.localStorage.getItem('token'));

  getAllSongs1() {
    console.log(localStorage.getItem("email"));
    // let x = this.getemail();
    // alert(x);
      return this.httpClient.get<reg2[]>(this.url2);
    }

  url3: string="http://localhost:9000/api/v1/user/";  
  addSongs(data:reg2){
      console.log();
      console.log(localStorage.getItem("email"));
      return this.httpClient.post<reg2>(this.url3+localStorage.getItem("email")+"/playlists",data);
    }
    
   url4: string="http://localhost:9000/api/v1/playlist";

   addToPlay(data1:Playlist)
   {
    console.log(data1);
      return this.httpClient.post<Playlist>(this.url4, data1);
   }

}
