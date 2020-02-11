import { Component, OnInit} from '@angular/core';
import {StockInterface} from './services/stock-interface';
import {StocksService} from './services/stocks.service';

//let symbols: Array<string>=['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // stocks: Array<StockInterface>;
  // symbols: Array<string>;
  // constructor(private service: StocksService){
    //  this.service.load(['APPL']).subscribe(stocks=>{
    //    this.stocks=stocks;
    //  }
      // );
   //}

  //  ngOnInit(){
  //    this.service.load(this.symbols).subscribe(stocks=>{
  //      this.stocks=stocks;
  //    });
  //  }
}
