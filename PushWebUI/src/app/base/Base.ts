

import { Headers } from '@angular/http';
import { Injectable, OnInit, Component } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class Base {
  TokenOlusmadiHataSayfasi(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor() {
    this.UseApiUrl();
    //this.baseUrl = "http://api.pushforever.online/api";
    // this.DovizleriGetir();
   //constructor(){


  }

  UseApiUrl(){
//  this.baseUrl = environment.baseUrl;
  this.baseUrl = "http://api.pushforever.online/api";
  /*
if(d=="test"){
  this.baseUrl = 'http://localhost:1453/api';
}else{
   this.baseUrl = "http://api.pushforever.online/api";

}*/
}

 baseUrl ="";




  createAuthorizationHeaders(headers: Headers): Headers {
   //  headers.append('Authorization', 'basic ' + btoa('mete:123456'));
   // headers.append('Access-Control-Allow-Origin','*');
    //headers.append('Access-Control-Allow-Credentials','true');

    /*headers.append('contentType', 'application/json; charset=utf-8');
    headers.append('crossDomain', 'true');
    headers.append('dataType', 'json');*/
    /*headers.append('contentType', 'application/json; charset=utf-8');
    headers.append('crossDomain', 'true');
    headers.append('dataType', 'json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
*/

    return headers;
  }

  LogOut(){
    localStorage.removeItem('key');
    localStorage.removeItem('userId');
    localStorage.removeItem('nameSurname');

  }
  GetKey(): string {
    const userId = localStorage.getItem('key');


    if (userId != null) {
      return userId;
    }else {
      return  '';
    }
  }
  AddKey(key) {
    localStorage.setItem('key', key);
    
  }
  AddNameSurname(name) {
    localStorage.setItem('nameSurname', name);
    //console.log("name surname"+name);
  }
  
  GetNameSurname(): string {
    const userName = localStorage.getItem('nameSurname');

    //console.log("name surname "+userName);
    if (userName != null) {
      return userName;
    }else {
      return  '';
    }
  }
  AddUserId(userId) {
    localStorage.setItem('userId', userId);
  }
  GetUserId(): string {
    const userId = localStorage.getItem('userId');


    if (userId != null) {
      return userId;
    }else {
      return  '';
    }
  }

}
