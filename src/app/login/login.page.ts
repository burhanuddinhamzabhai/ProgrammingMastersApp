import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { AppCommon } from '../common/app.common';
import { getAuth,onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  auth = getAuth();
  constructor(private route: Router, private appCommon: AppCommon) {

  }

  ngOnInit() {

  }

  login(){
    if(this.email === '' && this.password === ''){
      this.appCommon.presentAlert('Incomplete Data', 'Please Fill All Fields');
    }else{
      this.appCommon.showLoading('Logging In');
      signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          this.appCommon.hideLoading();
          this.route.navigate(['/app-root/home']);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.appCommon.hideLoading();
          this.appCommon.presentAlert('Login Failed','Invalid Credentials');
        });
    }
  }

  forgetPass(){
    this.route.navigate(['/forget-password']);
  }
  signUp(){
    this.route.navigate(['/sign-up']);
  }
  exitApp(){
    this.appCommon.exit();
  }
}
