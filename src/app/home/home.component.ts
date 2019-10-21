import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: Object;
  cal:any;
  remove:number=0;
  result;
  q: any;
  quantity:any;
  q1price: any;
  qprice1: any;
 
  constructor(private router:Router,private s:CartService) { }

  ngOnInit() {
    this.getall();
  }
  getall(){
    this.s.cartgt().subscribe(resp=>{
      this.data=resp;
    })
  }
  fun(b){
    this.s.cartdel(b).subscribe(resp=>{
      this.cal=resp
    this.remove=this.cal.qprice;
    this.getall();
    })
  }
  add(b){
    this.s.cartcal(b).subscribe(resp=>{
      this.result=resp;
      this.q=this.result.quantity+1
      this.q1price=this.result.price
      this.q1price=this.q1price*this.q
      this.s.carmulti(b,this.q,this.q1price).subscribe(resp=>{
        console.log(resp)
      if(resp){
        this.s.cartgt().subscribe(resp=>{
          console.log(this.data)
          this.data=resp
        })
      }
      })
    })
  }
  sub(b){
    this.s.cartcal(b).subscribe(resp=>{
      this.result=resp;
      this.q=this.result.quantity-1;
      this.q1price=this.result.price;
      this.qprice1=this.result-this.q1price
      this.s.carmulti(b,this.q,this.qprice1).subscribe(resp=>{
        console.log(resp)
        if(resp){
          this.s.cartgt().subscribe(resp=>{
            console.log(this.data)
            this.data=resp
          })
        }
      })
    })
  }
}
