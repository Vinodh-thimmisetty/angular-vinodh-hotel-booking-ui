import { Component, OnInit, ViewChild ,AfterViewInit, ElementRef} from '@angular/core';

import { MatSelect, MatTableDataSource, MatDialog } from '@angular/material';  

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import { AppserviceService } from '../appservice.service';

export interface HotelInfo {
  country: string;
  hotelName: string;
   hostName: string;
  neighbourhood : string;
   neighbourhoodGroup: string;
  latitude: string;
   longitude: string;
  roomType: string;
   price: string;
} 

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['country', 'hotelName', 'hostName', 'neighbourhood', 'neighbourhoodGroup', 'latitude',
    'longitude', 'roomType', 'price'];

  dataSource: MatTableDataSource<HotelInfo> = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private appService: AppserviceService) { }

 @ViewChild('country', { static: false }) country: ElementRef;
 @ViewChild('hotelName', { static: false }) hotelName: ElementRef;
  @ViewChild('hostName', { static: false }) hostName: ElementRef;
   @ViewChild('neighbourhood', { static: false }) neighbourhood: ElementRef;
    @ViewChild('neighbourhoodGroup', { static: false }) neighbourhoodGroup: ElementRef;
     @ViewChild('latitude', { static: false }) latitude: ElementRef;
      @ViewChild('longitude', { static: false }) longitude: ElementRef;
       @ViewChild('roomType', { static: false }) roomType: ElementRef;
        @ViewChild('price', { static: false }) price: ElementRef; 


  ngOnInit() {

  }

    ngAfterViewInit(): void {
    setTimeout(() => {
         this.appService.getFullDetailView(this.defaultQueryParams())
         .subscribe((data: HotelInfo[]) => { 
            console.log("==================== ::", data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, (error) => {
        console.log("Error ::", error);
      }, () => {        
        console.log("==> Cleanup <==");
        
      console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Final Results ::", this.dataSource);
      });
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  defaultQueryParams(){
    return {
      sortBy: 'price',
      sortDirection: 'desc',
      pageNumber: 0,
      pageSize: 100
    }
  }

}