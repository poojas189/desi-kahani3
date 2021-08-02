import { DatahandlerService } from './../services/datahandler.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.page.html',
  styleUrls: ['./quote-list.page.scss'],
})
export class QuoteListPage implements OnInit {
  quotesData: any;
  selectedQuoteId: any;
  selectedQuotesData: any;
  quoteListArray: any[];
  navigateFromFav: boolean;


  constructor(
    public route: ActivatedRoute,
    private admobService: AdmobService,
    public datahandlerService: DatahandlerService,
    public router: Router
  ) { }

  ngOnInit() {
    // this.admobService.showInterstitial();
    this.datahandlerService._dataConfigSubject.subscribe(value => {
      this.selectedQuoteId = value;
    });

    this.datahandlerService._quoteDatabaseSubject.subscribe(data => {

      this.quotesData = data;
      this.selectedQuotesData = this.quotesData.filter(value => value.id === this.selectedQuoteId)[0];
      // console.log('this.selectedQuotesData',this.selectedQuotesData);
      if (this.selectedQuotesData) {
        this.quoteListArray = this.selectedQuotesData.quoteList;
      }

    });


  }

  popupQuote(value) {
    this.datahandlerService._singleQuoteSubject.next(value);
    if (this.navigateFromFav) {
      this.router.navigate(['/quote-viewer'], { queryParams: { view: 'favourite' } });
    } else {
      this.router.navigate(['/quote-viewer']);
    }
  }



}
