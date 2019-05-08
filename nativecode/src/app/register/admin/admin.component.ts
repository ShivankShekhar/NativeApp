import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  moduleId: module.id,
})
export class AdminComponent implements OnInit {

 constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  register(){

  }

  cancel(){
    this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }

}
