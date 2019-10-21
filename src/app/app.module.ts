import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './mat-module';
import { HomeComponent } from './home/home.component'
import { CartService } from './cart.service';
import {User} from './user';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,DemoMaterialModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
