

import { Injectable } from "@angular/core";
import { Base } from "../base/base";
import { LoginModel } from "../Model/LoginModel";
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Http,Headers, RequestOptions,Response } from "@angular/http";
import { Observable } from "rxjs/internal/Observable";
import { RegisterModel } from "../Model/RegisterModel";
import { ResultModel } from "../Model/ResultModel";
import { ResultGeneralModel } from "../Model/ResultGeneralModel";
//const { map, filter, switchMap } = require('rxjs/operators');

@Injectable()
export class LoginService {
constructor(private http:Http,private base : Base){}
loginUrl =this.base.baseUrl+ "/users/UserControl";
registerUrl =this.base.baseUrl+ "/users/";
parolamiUnuttumUrl  =this.base.baseUrl+ "/users/RemovePassword";
parolaSifirlar  =this.base.baseUrl+ "/users/RemovePassword";
UserControl(model: LoginModel): Observable<ResultModel> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();

    data.append("Email", model.Email);
    data.append("Parola", model.Password);
    let body = data.toString()
console.log(this.loginUrl);
    return this.http
    .post(this.loginUrl, data, requestOptions)
    .map((response: Response) => <ResultModel>response.json())
    .catch((error: any) => {
      //  alert("hi");
      if(error.status == 201){
        var sonuc = new ResultModel();
        alert("Please check your email and password");
        return Observable.throw( sonuc); 
      }

     
      //    this.base.TokenOlusmadiHataSayfasi(6);
      return Observable.throw(new Error(error.status));
      /*this.base.TokenOlusmadiHataSayfasi(6);
         if (error.status === 500) {

           //  return Observable.throw(new Error(error.status));
         }
         else if (error.status === 400) {
             return Observable.throw(new Error(error.status));
         }
         else if (error.status === 409) {
             return Observable.throw(new Error(error.status));
         }
         else if (error.status === 406) {
             return Observable.throw(new Error(error.status));
         }*/
    });
  // .do((data) => console.log(""));

    // return this.http
    //   .post(this.loginUrl, data, requestOptions)
    //   .map((response: Response) => <DonenSonuc>response.json())
    //   .catch((error: any) => {
    //     //  alert("hi");
    //     if(error.status == 201){
    //       var sonuc = new DonenSonuc();
          
    //       return Observable.throw( sonuc); 
    //     }
    //     alert(error.status);
    //     //    this.base.TokenOlusmadiHataSayfasi(6);
    //     return Observable.throw(new Error(error.status));
    //     /*this.base.TokenOlusmadiHataSayfasi(6);
    //        if (error.status === 500) {

    //          //  return Observable.throw(new Error(error.status));
    //        }
    //        else if (error.status === 400) {
    //            return Observable.throw(new Error(error.status));
    //        }
    //        else if (error.status === 409) {
    //            return Observable.throw(new Error(error.status));
    //        }
    //        else if (error.status === 406) {
    //            return Observable.throw(new Error(error.status));
    //        }*/
    //   });
    // // .do((data) => console.log(""));



  }


  RegisterUser(model: RegisterModel): Observable<ResultModel> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();

    data.append("Email", model.Email);
    data.append("Password", model.Password);
    data.append("NameSurname", model.NameSurname);
    let body = data.toString()


    return this.http
      .post(this.registerUrl, data, requestOptions)
      .map((response: Response) => <ResultModel>response.json())
      .catch((error: any) => {
        //  alert("hi");
        alert(error.status);
        //    this.base.TokenOlusmadiHataSayfasi(6);
        return Observable.throw(new Error(error.status));
        /*this.base.TokenOlusmadiHataSayfasi(6);
           if (error.status === 500) {

             //  return Observable.throw(new Error(error.status));
           }
           else if (error.status === 400) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 409) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 406) {
               return Observable.throw(new Error(error.status));
           }*/
      });
    // .do((data) => console.log(""));



  }
  
  ForgetPassword(email:string): Observable<ResultGeneralModel> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();

    data.append("email",email);
    let body = data.toString()


    return this.http
      .post(this.parolamiUnuttumUrl, data, requestOptions)
      .map((response: Response) => <ResultGeneralModel>response.json())
      .catch((error: any) => {
        //  alert("hi");
        alert(error.status);
        //    this.base.TokenOlusmadiHataSayfasi(6);
        return Observable.throw(new Error(error.status));
        /*this.base.TokenOlusmadiHataSayfasi(6);
           if (error.status === 500) {

             //  return Observable.throw(new Error(error.status));
           }
           else if (error.status === 400) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 409) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 406) {
               return Observable.throw(new Error(error.status));
           }*/
      });
    // .do((data) => console.log(""));



  }

  RemovePassword(parola:string,id:string): Observable<ResultGeneralModel> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();


    data.append("Parola",parola);
    data.append("Id",id);
    let body = data.toString()


    return this.http
      .post(this.parolaSifirlar, data, requestOptions)
      .map((response: Response) => <ResultGeneralModel>response.json())
      .catch((error: any) => {
        //  alert("hi");
        alert(error.status);
        //    this.base.TokenOlusmadiHataSayfasi(6);
        return Observable.throw(new Error(error.status));
        /*this.base.TokenOlusmadiHataSayfasi(6);
           if (error.status === 500) {

             //  return Observable.throw(new Error(error.status));
           }
           else if (error.status === 400) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 409) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 406) {
               return Observable.throw(new Error(error.status));
           }*/
      });
    // .do((data) => console.log(""));



  }
}
