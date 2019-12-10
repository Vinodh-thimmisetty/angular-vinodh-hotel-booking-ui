import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppserviceService } from './appservice.service';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  imports:      [ MatPaginatorModule,MatSortModule, HttpModule,HttpClientModule, BrowserModule, FormsModule , FormsModule, MatTableModule, MatRadioModule, BrowserAnimationsModule,
  MatCheckboxModule, MatButtonModule,MatInputModule,
  MatGridListModule,MatDialogModule],
  declarations: [ AppComponent, HelloComponent, HotelBookingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppserviceService]
})
export class AppModule { }
