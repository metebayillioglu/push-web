

import { Headers } from '@angular/http';
import { Injectable, OnInit, Component } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class Base {
  TokenOlusmadiHataSayfasi(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor() {
    //this.UseApiUrl();
    this.baseUrl = "http://api.pushforever.online/api";
    // this.DovizleriGetir();
   //constructor(){


  }

  UseApiUrl(){
  this.baseUrl = environment.baseUrl;
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
    const kullaniciId = localStorage.getItem('key');


    if (kullaniciId != null) {
      return kullaniciId;
    }else {
      return  '';
    }
  }
  AddKey(key) {
    localStorage.setItem('key', key);
    
  }
  AddNameSurname(kullaniciId) {
    localStorage.setItem('nameSurname', kullaniciId);
    console.log("adsoyad yazıldı"+kullaniciId);
  }
  
  GetNameSurname(): string {
    const kullaniciId = localStorage.getItem('nameSurname');

    console.log("adsoyad getir "+kullaniciId);
    if (kullaniciId != null) {
      return kullaniciId;
    }else {
      return  '';
    }
  }
  AddUserId(kullaniciId) {
    localStorage.setItem('userId', kullaniciId);
  }
  GetUserId(): string {
    const kullaniciId = localStorage.getItem('userId');


    if (kullaniciId != null) {
      return kullaniciId;
    }else {
      return  '';
    }
  }

}
