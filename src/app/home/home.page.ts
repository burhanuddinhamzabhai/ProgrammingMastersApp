/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppCommon } from '../common/app.common';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, child, get } from 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username = '';
  auth = getAuth();
  constructor(private platform: Platform, private appCommon: AppCommon,
              private route: Router) {

    const userId = this.auth.currentUser.uid;
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.username = snapshot.val().username;
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.appCommon.exit();
      console.log('back');
    });
  }
  slidesOptions = {
    slidesPerView: 1.5
  };
  ngOnInit() {
  }



  logout(){
    this.auth.signOut().then(()=>{
      this.route.navigate(['/login']);
    });
  }
}
