import { Component, OnInit } from '@angular/core';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  auth = getAuth();
  constructor(private route: Router) { }

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        this.route.navigate(['/app-root/home']);
      } else {
        // User is signed out
        // ...
        this.route.navigate(['/welcome']);
      }
    });

  }

}
