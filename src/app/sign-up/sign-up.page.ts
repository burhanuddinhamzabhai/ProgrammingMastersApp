import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommon } from '../common/app.common';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  username = '';
  email = '';
  password = '';
  constructor(private route: Router, private appCommon: AppCommon,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  login(){
    this.route.navigate(['/login']);
  }

  writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email
    });
  }
  signUp(){
    if(this.email === '' && this.password === '' && this.username === ''){
      this.appCommon.presentAlert('Incomplete Data','Please Fill All Fields');
    }else{
      const auth = getAuth();
      this.appCommon.showLoading('Signing In..');
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      this.writeUserData(user.uid,this.username,this.email);
      this.appCommon.hideLoading();
      this.route.navigate(['app-root/home']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    }

  }

  exitApp(){
    this.appCommon.exit();
  }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }
}
