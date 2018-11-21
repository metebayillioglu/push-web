import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  txtPassword = "";
  txtPasswordConfirm = "";
  text = "";
  id = "";
  cssClass="";
  constructor(private activatedRoute: ActivatedRoute, private loginService: LoginService) {
    this.activatedRoute.params.subscribe(t => {
      this.id = t["id"]
    });
  }

  ngOnInit() {
  }

  ParolaSifirlar() {
    if (this.txtPassword == "" ) {
      this.text = "Please fill blanks";
      this.cssClass="alert alert-danger";
      return;

    }
    if(this.txtPassword != this.txtPasswordConfirm){
      this.text = "Password not match";
      this.cssClass="alert alert-danger";
      return;
    }

    this.loginService.RemovePassword(this.txtPassword, this.id).subscribe(t => {
      this.text = t.text;
      
      this.cssClass= t.css;

    })

  }
}
