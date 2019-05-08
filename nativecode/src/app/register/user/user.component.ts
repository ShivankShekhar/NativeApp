import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
 import { request} from "tns-core-modules/http";

@Component({
  selector: 'ns-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  moduleId: module.id,
})
export class UserComponent implements OnInit {

private password:any;
private userID:any;
private ID:any;
private email:any;
private ans:any;


  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  register(){

    request({ 
      url: `http://10.155.64.54:3000/login`,
      method: "POST",
      headers: { 
              "Content-Type":
              "application/json"
      },
      content : JSON.stringify({
              "userName" : `${this.userID}`,
              "password" : `${this.password}`,
              "email" : `${this.email}`,
              "ans" : `${this.ans}`

              }) 
    }).then((response:any) => {
          if(response){ 
              alert('Successfull');
              this.routerExtensions.navigate(["/login"], {clearHistory: true });
          }
      }, (e) => {console.log("Request Error : "+e);
    }); 
  }

  cancel(){
    this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }

}
