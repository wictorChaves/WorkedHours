import { LoginComponent } from './../components/login/login';
import { CreateUserComponent } from './../components/create-user/create-user';
import { JobListComponent } from './../components/job-list/job-list';
import { JobCreateComponent } from './../components/job-create/job-create';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartActiveComponent } from '../components/start-active/start-active';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StartActiveComponent,
    JobCreateComponent,
    CreateUserComponent,
    LoginComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StartActiveComponent,
    JobCreateComponent,
    CreateUserComponent,
    LoginComponent,
    JobListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
