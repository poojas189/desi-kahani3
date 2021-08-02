import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteListPageRoutingModule } from './quote-list-routing.module';

import { QuoteListPage } from './quote-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    QuoteListPageRoutingModule
  ],
  declarations: [QuoteListPage]
})
export class QuoteListPageModule {}
