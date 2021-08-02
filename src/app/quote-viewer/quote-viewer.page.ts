import { DataService } from './../services/data.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AdmobService } from '../services/admob.service';
import { DatahandlerService } from '../services/datahandler.service';
@Component({
  selector: 'app-quote-viewer',
  templateUrl: './quote-viewer.page.html',
  styleUrls: ['./quote-viewer.page.scss'],
})
export class QuoteViewerPage implements OnInit {
  selectedDetailQuote: any;
  quotesData: any;
  selectedQuoteId: any;
  selectedQuotesData: any;
  quoteListArray: any[];
  isLoading: boolean;

  constructor(
    public route: ActivatedRoute,
    private admobService: AdmobService,
    public datahandlerService: DatahandlerService,
    public dataService: DataService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.admobService.showInterstitial();
    this.isLoading = true;

    
    this.route.queryParamMap.subscribe(async (params: any) => {
      if (params.params.view == 'pushnotification') {
        this.isLoading = false;
        this.selectedDetailQuote = this.dataService.notificationData.text;
      } else {
        this.datahandlerService._singleQuoteSubject.subscribe((value) => {
          // console.log(value);
          this.isLoading = false;
          this.selectedDetailQuote = value;
        });
      }
    });


   

  }


}
