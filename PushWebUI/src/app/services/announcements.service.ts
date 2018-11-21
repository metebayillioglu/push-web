

import { Injectable } from "@angular/core";
import { Base } from "../base/base";
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Http,Headers, RequestOptions,Response } from "@angular/http";
import { Observable } from "rxjs/internal/Observable";

import { AnnouncementsFromModel } from "../Model/AnnouncementsFromModel";
import { ResultGeneralModel } from "../Model/ResultGeneralModel";
//const { map, filter, switchMap } = require('rxjs/operators');

@Injectable()
export class AnnouncementsService {
constructor(private http:Http,private base : Base){}
announcementUrl =this.base.baseUrl+ "/announcements";
GetAnnouncementsList(): Observable<AnnouncementsFromModel[]> {

    var userId = this.base.GetUserId();
    var key = this.base.GetKey();
    let headersOlustur = new Headers();
    headersOlustur = this.base.createAuthorizationHeaders(headersOlustur);
    var reqOptions = new RequestOptions({ headers: headersOlustur });
//console.log(this.announcementUrl + "?userId=" + userId +"&key="+key);
    return this.http.get(this.announcementUrl + "?userId=" + userId +"&key="+key, reqOptions)
      .map((response: Response) => <AnnouncementsFromModel[]>response.json())
      .do((data) => console.log("kayit ucretleri geldi"))
      .catch((error: any) => {
        //  alert("hi");
        alert(error.status);
        //  this.base.TokenOlusmadiHataSayfasi(6);
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

  
DeleteDuyuru(annoouncementsId): Observable<ResultGeneralModel> {

  
    var key = this.base.GetKey();
    let headersOlustur = new Headers();
    headersOlustur = this.base.createAuthorizationHeaders(headersOlustur);
    var reqOptions = new RequestOptions({ headers: headersOlustur });

    return this.http.get(this.announcementUrl + "/DeleteAnnouncements?annoouncementsId=" + annoouncementsId +"&key="+key, reqOptions)
      .map((response: Response) => <ResultGeneralModel>response.json())
      .do((data) => console.log("kayit ucretleri geldi"))
      .catch((error: any) => {
        //  alert("hi");
        alert(error.status);
        //  this.base.TokenOlusmadiHataSayfasi(6);
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


  AddAnnouncement(model: AnnouncementsFromModel): Observable<ResultGeneralModel> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();

    data.append("AnnouncementTitle", model.announcementTitle);
    data.append("AnnouncementMesage", model.announcementMesage);
    data.append("Key", model.key);
    data.append("UserId", model.userId);
    let body = data.toString()


    return this.http
      .post(this.announcementUrl, data, requestOptions)
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
