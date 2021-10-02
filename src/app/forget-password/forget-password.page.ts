import { Component, OnInit } from '@angular/core';
import { AppCommon } from '../common/app.common';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  email = '';
  constructor(private appCommon: AppCommon) { }

  ngOnInit() {
  }

  sendLink(){
    if(this.email === ''){
      this.appCommon.presentAlert('Incomplete Data','Please Enter Email Id');
    }else{
      this.appCommon.showLoading('Sending Link');
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          // Password reset email sent!
          // ..
          this.appCommon.hideLoading();
          this.appCommon.presentAlert('Success','Password reset link has been sent!');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          this.appCommon.hideLoading();
          this.appCommon.presentAlert('Error','Email doesn\'t enrolled with Programming Masters')
        });
    }
  }

  back(){
    this.appCommon.backPressed();
  }
}
