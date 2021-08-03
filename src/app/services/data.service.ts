import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatahandlerService } from './datahandler.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage | null = null;
  notificationData: any;

  constructor(private db: AngularFireDatabase,
    public datahandlerService: DatahandlerService,
    public router: Router,
    private localNotifications: LocalNotifications,
    public storage: Storage) {

    this.init();
    this.db.object('storyThree').valueChanges().subscribe(res => {
      this.datahandlerService._quoteDatabaseSubject.next(res);
      this.createPushNotification(res);
    });

    this.db.object('notificationThree').valueChanges().subscribe(res => {
      this.notificationData = res;
    });

    // this.localNotifications.on('click').subscribe(notification => {
    //   this.router.navigate(['/quote-viewer'], { queryParams: { view: 'pushnotification' } });
    // });

  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  createPushNotification(data) {

    // this.localNotifications.schedule({
    //   text: data.text.replace(/<br>/g, ''),
    //   foreground: true,
    //   title: data.title,
    //   trigger: {at: new Date(new Date().getTime() + 10000)},
    // });

    let selectedQuote = data[Math.floor(Math.random() * (data.length))];
    let notificationQuote = selectedQuote.quoteList[Math.floor(Math.random() * 3)].replace(/<br>/g, '');
    // console.log('notificationQuote',selectedQuote);
    this.localNotifications.schedule({
      text: notificationQuote,
      foreground: true,
      title: selectedQuote.title,
      trigger: {
        count: 1,
        every: {
          hour: 22,
          minute: 1
        }
      },

    });
  }
}
