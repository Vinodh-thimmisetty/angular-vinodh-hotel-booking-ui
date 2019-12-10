import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppserviceService {
 

   FULL_DETAIL_VIEW_API = 'https://hotel-booking-vinodh-api.herokuapp.com/v1/booking/singapore/';

  constructor(private http: HttpClient) { }

    getFullDetailView(params) {
    return this.http.get(this.FULL_DETAIL_VIEW_API, { params });
  }

}