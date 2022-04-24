import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SpringbookService} from './springbook.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { SpringBooksComponent } from './spring-books/spring-books.component';
import { BookserviceService } from './bookservice.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookserviceService],
  bootstrap: [BookComponent]
})
export class AppModule { }
