import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
Myname:string;
  constructor() { 
    this.Myname='Esraa';
  }

  ngOnInit() {
  }

}
