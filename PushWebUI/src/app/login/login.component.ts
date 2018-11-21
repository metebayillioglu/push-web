import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Base } from '../base/base';
import { LoginModel } from '../Model/LoginModel';
import { RegisterModel } from '../Model/RegisterModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtEmail = "";
  txtPassword = "";
// / HataVar = false;
 // HataText = "";
  loginisopen = true;
  class = "alert alert-danger";
  waitisOpen = false;
  waitText = "";
  ckeditorContent: string = '<p>Some html</p>';
  txtNameSurnameNewUser = "";
  txtEmailNewUser = "";
  txtPasswordNewUser = "";
  isButtonActive = true;
  resultClass = "";
  registerOpen = false;
  forgotPassword = false;
  txtPasswordCheck = "";
  user = new LoginModel();
  stlye(id) {
    let styles = {
      'font-size': id == 1 ? '42px' : '12px',
      'color': 'red'
    }
    return styles;
  };
  constructor(private loginService: LoginService, 
    private base: Base) { }

  ngOnInit() {

  }

  ChangeButtonsActive(d) {
    //false inaktif
    this.isButtonActive = d;
  }
  CloseAllPanels() {
    this.loginisopen = false;
    this.registerOpen = false;
    this.forgotPassword = false;
  }
  AddNewUserClose() {
    this.waitisOpen = false;
    this.CloseAllPanels();
    this.loginisopen = true;
  }
  PasswordCheckCancel() {
    this.waitisOpen = false;
    this.CloseAllPanels();
    this.loginisopen = true;
  }
  PasswordCheck() {
    if (this.txtPasswordCheck == "") {
      this.waitisOpen = true;
      this.waitText = "please fill the all fields";
      this.resultClass = "alert alert-info"
    }

    this.ChangeButtonsActive(false);
    this.loginService.ForgetPassword(this.txtPasswordCheck).subscribe(t => {
      this.waitisOpen = true;
      this.waitText =t.text;
      this.resultClass = t.css;
      this.ChangeButtonsActive(true);

    })

  }
  AddNewUserPanel() {
    this.waitisOpen = false;
    this.CloseAllPanels();
    this.registerOpen = true;
    
  }
  ForgotPasswordClick() {
    this.CloseAllPanels();
    this.forgotPassword = true;
  }
  AddNewUser() {
    if (this.txtEmailNewUser == "" || this.txtPasswordNewUser == "" || this.txtNameSurnameNewUser == "") {
      this.waitisOpen = true;
      this.waitText = "please fill the all fields";
      this.resultClass = "alert alert-info"
      return;
    }
    var model = new RegisterModel();
    this.waitisOpen = true;
    this.waitText = "Please wait";
    this.resultClass = "alert alert-info";
    model.Email = this.txtEmailNewUser;
    model.Password = this.txtPasswordNewUser;
    model.NameSurname = this.txtNameSurnameNewUser;
    this.ChangeButtonsActive(false);
    this.loginService.RegisterUser(model).subscribe(t => {

      if (t.userId == "hata") {
        //hata
        alert(t.userId);
        this.waitisOpen = true;
        this.waitText = "User Name or password is wrong";
        this.resultClass = "alert alert-danger";
        this.ChangeButtonsActive(true);
      } else {
        //ok

        this.base.AddUserId(t.userId);
        this.base.AddKey(t.key);
        this.base.AddNameSurname(t.nameSurname);
        window.top.location.href = 'me';
      }

    })
  }


  ControlUser() {
    if (this.txtPassword == "" || this.txtEmail == "") {
      this.waitisOpen = true;
      this.waitText = "please fill the all fields ";
      this.resultClass = "alert alert-info"
      return;
    }
    console.log(this.txtEmail);
    console.log(this.txtPassword);
    this.waitisOpen = true;
    this.waitText = "Please wait";
    this.resultClass = "alert alert-info";
    this.user.Email = this.txtEmail;
    this.user.Password = this.txtPassword;
    this.loginService.UserControl(this.user).subscribe(t => {


      if (t.userId == "hata") {
        //hata

        this.waitisOpen = true;
        this.resultClass = "alert alert-danger";
        this.waitText = "User Name or password is wrong";

      } else {
        //ok

        this.base.AddUserId(t.userId);
        this.base.AddKey(t.key);
        this.base.AddNameSurname(t.nameSurname);
        window.top.location.href = 'me';
      }

    })
  }
}
