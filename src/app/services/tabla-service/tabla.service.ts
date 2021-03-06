import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  readonly api = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

  constructor(private httpClient: HttpClient) { 
  }


  getApiValues() {
    return this.httpClient.get(this.api);
  }

  
}
