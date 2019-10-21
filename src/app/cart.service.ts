import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  allimg(){
  return  this.http.get('http://localhost:3000/posts');
  }

  addcrt(d){
    return this.http.post('http://localhost:3000/pcart/',d);
  }
  cartgt(){
    return this.http.get('http://localhost:3000/pcart')
  }
  cartdel(d){
    return this.http.delete('http://localhost:3000/pcart/' + d)
  }
  cartcal(d:number){
    return this.http.get('http://localhost:3000/pcart/'+d)
  }
   carmulti(d:any,f:any,g:any){
     return this.http.patch('http://localhost:3000/pcart/'+d,{
       'quantity':f,
       'qprice':g
     })
   }

}
