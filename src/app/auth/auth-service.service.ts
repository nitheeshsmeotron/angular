import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnInit {
  accessToken = '';
  constructor(private router: Router ) {
    const config = {
      apiKey: 'AIzaSyAWPvaEx-MFa__jLIrhFqpmK5IbXTlxsEI',
      authDomain: 'recipe-book-3e94f.firebaseapp.com',
      databaseURL: 'https://recipe-book-3e94f.firebaseio.com',
      projectId: 'recipe-book-3e94f',
      storageBucket: 'recipe-book-3e94f.appspot.com',
      messagingSenderId: '462031901055'
    };
    firebase.initializeApp(config);
  }
  ngOnInit() {}
  signUpUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken().
          then(
            token => {
              this.accessToken = token;
              this.router.navigate(['recipes']);
            }
          );
      })
      .catch(error => console.log(error));
  }
  signInUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken().
        then(
          token => {
            this.accessToken = token;
            this.router.navigate(['recipes']);
          }
        );
      })
      .catch(error => console.log(error));
  }
  getAccessToken() {
    firebase.auth().currentUser.getIdToken().
      then(
        token => {
          this.accessToken = token;
          console.log(token);

        }
      );
      return this.accessToken;
  }
  isAuthenticated() {
    return this.accessToken !== '';
  }

}
