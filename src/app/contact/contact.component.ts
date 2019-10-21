import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import { timer } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  constructor(private s:CartService) { }
  ngOnInit() {
    
  
  }

}
