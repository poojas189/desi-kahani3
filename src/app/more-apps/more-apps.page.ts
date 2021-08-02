import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-apps',
  templateUrl: './more-apps.page.html',
  styleUrls: ['./more-apps.page.scss'],
})
export class MoreAppsPage implements OnInit {

  myApps = [
    {
      appName: "Sad Shayari",
      imagesrc: "assets/images/sad-shayari.png",
      navigationLink: "https://play.google.com/store/apps/details?id=com.corlogix.sadshayari"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  navigateToApp(link) {
    window.open(link, '_system');
  }

}
