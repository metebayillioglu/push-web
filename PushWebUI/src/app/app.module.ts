import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule,BaseRequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './services/login.service';
import { Base } from './base/base';
import { DuyurularComponent } from './duyurular/duyurular.component';
import { MenuComponent } from './menu/menu.component';
import { EmailComponent } from './email/email.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementsService } from './services/announcements.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
    data: {
      title: 'home'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'contact'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'about'
    }
  },
  {
    path: '',
    component: HomepageComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'me',
    component: DuyurularComponent,
    data: {
      title: 'Annoncements'
    }
  },
  {
    path: 'email/:id',
    component: EmailComponent,
    data: {
      title: 'Annoncements'
    }
  },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DuyurularComponent,
    MenuComponent,
    EmailComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BaseRequestOptions,LoginService,Base,AnnouncementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
