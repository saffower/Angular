import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StocksService} from './services/stocks.service';
import {SummaryComponent} from './components/summary/summary.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ManageComponent} from './components/manage/manage.component'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SummaryComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
