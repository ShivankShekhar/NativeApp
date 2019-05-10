import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
 import { request} from "tns-core-modules/http";

@Component({
  selector: 'ns-forgotpswd',
  templateUrl: './forgotpswd.component.html',
  styleUrls: ['./forgotpswd.component.css'],
  moduleId: module.id,
})
export class ForgotpswdComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }
private userName:any;
private password:any;
private ans:any;
  reset(){

    request({ 
      url: `http://10.155.64.54:3000/login`,
      method: "PUT",
      headers: { 
              "Content-Type":
              "application/json"
      },
      content : JSON.stringify({
              "userName" : `${this.userName}`,
              "password" : `${this.password}`,
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
