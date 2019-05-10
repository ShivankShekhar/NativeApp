import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {NativeScriptFormsModule} from "nativescript-angular/forms";  
import {User} from "./user";
import {UserDetails} from"./user.details"
import { RouterExtensions } from "nativescript-angular/router";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http"; 
import * as dialogs from "tns-core-modules/ui/dialogs";
import {screen} from "tns-core-modules/platform"; 
import {prompt,PromptResult,PromptOptions,inputType,capitalizationType} from "tns-core-modules/ui/dialogs";


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})

export class LoginComponent implements OnInit {
  private passwordTrue=0; 
  private userID:String;
  private password:String;
  private router:Router;
  private _activatedUrl: string; 
  private height:any;
  private width:any;

//  import {screen} from "tns-core-modules/platform"; 
//     height:any;
//     width:any;
// constructor(){
//   this.getDimension();
// }
// getDimension( ) {  
//   this.height=screen.mainScreen.heightPixels;
//   this.width=screen.mainScreen.widthPixels;
//     console.log( this.height); 
//     console.log( this.width); 
// }


    constructor(private _router:Router,private userDetails:UserDetails,private routerExtensions: RouterExtensions){ 
        this.router=_router; 
        this.getDimension();
    } 
 
    ngOnInit() {
        this.userID="";
        this.password=""; 
    }
 
    getDimension( ) {  
      this.height=screen.mainScreen.heightPixels;
      this.width=screen.mainScreen.widthPixels;
    }

    onButtonTap(): void {
        if(this.userID!="" && this.password!=""){
            
        //     // this.userDetails.getUser(this.userID);
        //     // console.log("ID= "+this.userID+" pass="+this.password);   
        //     // if( this.password == this.userDetails.getPassword(this.userID)){
        //     var res=this.userDetails.validateUser(this.userID,this.password); 
        //     console.log("login_first_call = "+res);         
        //     if( res === "True" ){
        //     console.log("Success");
        //       this.passwordTrue=1;
        //       this.router.navigate(['/home']);
        //     }
        //    else
        //      alert("Incorrect ID or Password");

            request({ 
                url: `http://10.155.64.54:3000/login?userName=${this.userID}&password=${this.password}`,
                method: "GET"
            }).then((response: any) => { 
                const str = response.content.toString();  
                console.log("result : "+str);
                if(str=== "True")
                { console.log("Success"); 
                    this.userDetails.updateDet();
                    this.routerExtensions.navigate(["/home"], { clearHistory: true });
                }
                else
                    alert("Incorrect ID or Password");
                }, (e) => {console.log("Request Error : "+e);
            });
            
        }
        else
        alert("User Name or Password cannot be NULL"); 
    }

    log(){
        if(this.userID!="" && this.password!=""){ 
            
                if(this.userID=== "a" && this.password==="aa")
                { console.log("Success"); 
                    this.userDetails.updateDet();
                    this.routerExtensions.navigate(["/home"], { clearHistory: true });
                }
                else
                    alert("Incorrect ID or Password");
            
            }
        else
            alert("User Name or Password cannot be NULL"); 
    }

    forgot(){ 
            this.routerExtensions.navigate(["/forgot"], { clearHistory: true });
    }

    reset(): void {
        this.userID = "";
        this.password = "";
    }

    register(){
        dialogs.action({
            message: "Register New : ",
            cancelButtonText: "Cancel",
            actions: ["Admin", "User"]
        }).then(result => { 
            if(result == "Admin"){
                  this.routerExtensions.navigate(["/register/admin"], { clearHistory: true });
            }else if(result == "User"){
                  this.routerExtensions.navigate(["/register/user"], { clearHistory: true });
            }
        });
    }

}
