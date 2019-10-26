import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';
import { Product } from 'src/app/Shared Classes and types/Product';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {
stdList : Product[]=[];
  constructor(private APIServise:APIService) { }

  ngOnInit() {
   this.APIServise.getAllProducts().subscribe((data)=> {this.stdList=data;console.log(data)},(err)=>{console.log(err);});
  }

}
