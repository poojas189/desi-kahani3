import { DatahandlerService } from './../services/datahandler.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit, AfterViewInit {
  @ViewChild(IonContent) content: IonContent;
  quotesData: any;
  isLoading: boolean = true;

  constructor(public datahandlerService: DatahandlerService,
    public router: Router) { }

  ngAfterViewInit(): void {
    this.content.scrollToTop();
  }

 async ngOnInit() {
    this.isLoading = true;
    this.datahandlerService._quoteDatabaseSubject.subscribe(data => {
      this.quotesData = data;
      this.isLoading = false;
    });
  }

  navigateToQuotelist(id) {
    // console.log(id);
    this.router.navigate(['/quote-list']);
    this.datahandlerService._dataConfigSubject.next(id);
  }



}
