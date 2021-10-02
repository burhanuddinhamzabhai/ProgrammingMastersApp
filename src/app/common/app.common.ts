import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import {Location} from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AppCommon {
  loading;
  constructor(private route: Router, private platform: Platform, public alertController: AlertController,
              private loadingController: LoadingController, private location: Location) {

  }

  async presentAlert(head,msg) {
    const alert = await this.alertController.create({
      header: head,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  showLoader(msg: string) {
    if (!this.loading) {
      this.loadingController.create({
        message: msg,
        duration: 5000,
        spinner: 'lines-small'
      }).then((response) => {
        this.loading = response;
        this.loading.present();
      });
    }
  }
  showLoading(m: string) {
    this.showLoader(m);
    }

  hideLoading() {
    if (this.loading) {
      this.loadingController.dismiss().then((response) => {
        console.log('Loader closed!', response);
      }).catch((err) => {
        this.showLoader('Please wait');
      });
    }
  }

  backPressed(){
    this.location.back();
  }

  exit(){
    this.alertController.create({
      header: 'Close Programming Masters',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
}
