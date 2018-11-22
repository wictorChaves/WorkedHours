import { LoginComponent } from './../components/login/login';
import { CreateUserComponent } from './../components/create-user/create-user';
import { JobListComponent } from './../components/job-list/job-list';
import { JobCreateComponent } from './../components/job-create/job-create';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartActiveComponent } from '../components/start-active/start-active';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { FirebaseJobProvider } from '../providers/firebase-job/firebase-job';
import { FirebaseArchiveProvider } from './../providers/firebase-archive/firebase-archive';

@NgModule({
  declarations: [
    MyApp,
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
    StartActiveComponent,
    JobCreateComponent,
    CreateUserComponent,
    LoginComponent,
    JobListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    FirebaseJobProvider,
    FirebaseArchiveProvider
  ]
})
export class AppModule { }
