import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public firebaseService: FirebaseService, firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  loginGoogle() {
    this.firebaseService.googleLogin();
  }

  loginTwitter() {
    this.firebaseService.twitterLogin();
  }

  loginGithub() {
    this.firebaseService.githubLogin();
  }

  loginEmail(email,password){
    this.firebaseService.login(email,password);
  }


  logout(){
    this.firebaseService.logout()
  }

  //Login y logout
/*signup() {
  this.firebaseService.signup(this.email, this.password);
  this.email = this.password = '';
}

login() {
  this.firebaseService.login(this.email, this.password);
  this.email = this.password = '';    
}

logout() {
  this.firebaseService.logout();
}*/

  ngOnInit() {
  }

}
