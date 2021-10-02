import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppCommon } from '../common/app.common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private platform: Platform, private appCommon: AppCommon) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.appCommon.exit();
      console.log('back');
    });
  }

  ngOnInit() {
  }

}
