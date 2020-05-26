import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  
})
export class HeaderComponent {

  constructor() { 
    console.log("Component Header Creandose!")
  }

  ngOnInit(): void {
    console.log("Component Header ya Creado")
  }

}
