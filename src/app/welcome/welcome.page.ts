import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { SignUpPage } from '../sign-up/sign-up.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    });

    return await modal.present();
  }

  async register() {
    const modal = await this.modalCtrl.create({
      component: SignUpPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    });

    return await modal.present();
  }
}
