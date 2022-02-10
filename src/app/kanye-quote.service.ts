import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KANYE_QUOTE_URL } from './config/api-urls';

@Injectable({
  providedIn: 'root'
})
export class KanyeQuoteService {

  constructor(private http: HttpClient) { }

  /**
   * getKanyeQuote
   */
  public getKanyeQuote():Observable<any> {
    return this.http.get(KANYE_QUOTE_URL)
  }
}
