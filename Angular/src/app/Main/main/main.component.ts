import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 

  constructor( private location:Location) { }

  ngOnInit() {
  }
  OnclickBuy()
  {
    this.location.back();
 
  }
  onclickFarward()
  {
    this.location.forward();
  }

}
