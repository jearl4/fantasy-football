import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KanyeQuoteService } from '../kanye-quote.service';

@Component({
  selector: 'app-kanye-quote',
  templateUrl: './kanye-quote.component.html',
  styleUrls: ['./kanye-quote.component.css']
})
export class KanyeQuoteComponent implements OnInit {
  public quote;
  constructor(private readonly kanyeQuoteService: KanyeQuoteService) {
    this.quote = new Object
  }

  ngOnInit(): void {
    this.quote = this.getQuote()
  }

  /**
   * getQuote
   */
  public getQuote() {
    return this.kanyeQuoteService.getKanyeQuote().subscribe(quote => {
      console.log(quote)
      this.quote = quote['quote']
    })
  }

}
