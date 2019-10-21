import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  result: Object;
 
  constructor(private s:CartService,private router:Router) { }

  ngOnInit() {
  this.getall();
  }
  getall(){
    this.s.allimg().subscribe(resp=>{
      this.result=resp
    })
  }
  addcart(s){
    this.s.addcrt(s).subscribe(resp=>{
      console.log(resp)
    })
    this.getall();
  }
  cart(){
      this.router.navigate(['/home'])
  }
  


}
