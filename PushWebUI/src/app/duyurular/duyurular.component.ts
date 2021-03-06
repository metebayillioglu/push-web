import { Component, OnInit } from '@angular/core';
import { Base } from '../base/base';
import * as CryptoJS from 'crypto-js';
import { AnnouncementsFromModel } from '../Model/AnnouncementsFromModel';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-duyurular',
  templateUrl: './duyurular.component.html',
  styleUrls: ['./duyurular.component.css']
})
export class DuyurularComponent implements OnInit {
  duyurular: AnnouncementsFromModel[] = [];
  txtAnnouncementTitle = "";
  txtAnnouncementMessage = "";
  showAnnouncementResult = false;
  AnnouncementResultClass = "";
  AnnouncementResultText = "";
  announcementTitle = "";
  announcementMessage = "";
  showmessagedetail = false;
  messagedeleting = false;
  announcnementsDeleteClass = "";
  announcnementsDeleteText = "";
  UserId = "";
  UserKey = "";

  constructor(private announcementService: AnnouncementsService, private base: Base) { }

  ngOnInit() {

   
    this.GetInformation();
    this.CloseVisible();
    this.GetAnnouncements();
  }


  GetInformation() {
    this.UserId = this.base.GetUserId();
    this.UserKey = this.base.GetKey();

  }
  CloseVisible() {
    this.showmessagedetail = false;
    this.messagedeleting = false;
  }
  GetAnnouncements() {
    this.announcementService.GetAnnouncementsList().subscribe(t => {
      this.duyurular = t;
    })
  }
  AddAnnouncements() {
    if (this.txtAnnouncementTitle == "" || this.txtAnnouncementMessage == "") {
      this.showAnnouncementResult = true;
      this.AnnouncementResultClass = "alert alert-danger";
      this.AnnouncementResultText = "please fill the all fields";
      return;
    }
    this.showAnnouncementResult = true;
    this.AnnouncementResultClass = "alert alert-info";
    this.AnnouncementResultText = "Please wait";
    var model = new AnnouncementsFromModel();
    model.announcementTitle = this.txtAnnouncementTitle;
    model.announcementMesage = this.txtAnnouncementMessage;
    model.userId = this.base.GetUserId();
    model.key = this.base.GetKey();
    this.announcementService.AddAnnouncement(model).subscribe(t => {
      this.showAnnouncementResult = true;
      this.AnnouncementResultClass = t.css;
      this.AnnouncementResultText = t.text;
      if (t.status == "ok") {
        this.GetAnnouncements();
      }

    })

  }
  PopUpAc() {
    (<HTMLInputElement>document.getElementById('myModal')).style.display = "block";
    //this.SalonlarPanelAc();
  }
  PopUpKapat() {
    (<HTMLInputElement>document.getElementById('myModal')).style.display = "none";

  }

  FindAnnouncment(duyuruId) {
    for (var x of this.duyurular) {
      if (x.annoucncementId == duyuruId) {
        this.announcementTitle = x.announcementTitle;
        this.announcementMessage = x.announcementMesage;
        this.showmessagedetail = true;
        this.PopUpAc();
      }
    }
  }
  Delete(duyuruId) {
    this.CloseVisible();
    this.PopUpAc();
    this.messagedeleting = true;
    this.announcnementsDeleteClass = "alert alert-info";
    this.announcnementsDeleteText = "Please wait";
    this.announcementService.DeleteDuyuru(duyuruId).subscribe(t => {
      this.announcnementsDeleteClass = t.css;
      this.announcnementsDeleteText = t.text;
      if (t.status == "ok") {
        this.PopUpKapat();
        this.GetAnnouncements();
      }
    })
  }
  Preview(duyuruId) {
    this.CloseVisible();
    this.FindAnnouncment(duyuruId);
  }


}
