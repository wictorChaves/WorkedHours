import { JobArchiveComponent } from './../components/job-archive/job-archive';
import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { LoginComponent } from './../components/login/login';
import { JobListComponent } from './../components/job-list/job-list';
import { environment } from './../environments/environment';
import { JobCreateComponent } from './../components/job-create/job-create';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginComponent;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public authService: AuthServiceProvider) {
    this.initializeApp();
    
    this.pages = [
      { title: 'Trabalhos', component: JobListComponent },
      { title: 'Novo trabalho', component: JobCreateComponent },
      { title: 'Arquivados', component: JobArchiveComponent }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(environment.firebase);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(event) {
    firebase.auth().signOut().then(function () {
      console.log('Signed Out');
    }, function (error) {
      console.error('Sign Out Error', error);
    });
    this.nav.setRoot(LoginComponent);
  }

}
