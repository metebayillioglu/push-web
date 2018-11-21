import { Component, OnInit } from '@angular/core';
import { Base } from '../base/base';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  NameSurname = "";
  isLogin = false;
  constructor(private base: Base) { }

  ngOnInit() {
    this.UyeGirisiYapilmisMiKontrolEt();
  }
  UyeGirisiYapilmisMiKontrolEt() {
    if (this.base.GetNameSurname() != "") {
      this.isLogin = true;
      this.NameSurname = this.base.GetNameSurname();
    } else {
      this.isLogin = false;
    }
  }

  LogOut() {
    this.base.LogOut();
    window.top.location.href = 'home';
  }
}
