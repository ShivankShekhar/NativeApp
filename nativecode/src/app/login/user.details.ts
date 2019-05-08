import { Injectable } from "@angular/core";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http"; 

import {User} from "./user";

@Injectable({
    providedIn: "root"
})

export class UserDetails{

    private user: User={user_ID:"",password:""};
    private email:string="";
    createConn(user: String,password:String) : any { 
        request({ 
            url: `http://10.155.64.54:3000/login?userName=${user}&password=${password}`,
            method: "GET"
        }).then((response: any) => { 
            response.content.toString().then((str)=>{
                console.log("api call"+str);
                return str;
            }) 
            }, (e) => {console.log("Request Error : "+e);
        });  
    }

    validateUser(username:String,password:String) :any {  
 
        //  this.createConn(username,password).then((result) => {   
        //         setTimeout(()=>{
        //             console.log("inside: " +result);
        //             return result;
        //         }, );     
        //     }) 
        //     .catch(err => {
        //         console.log('Error', err);
        //     }); 


            // this.createConn(username,password).then((result) => {   
            //     setTimeout(() =>{
            //         console.log("inside: " +result);
            //         return result;
            //     }, 0);     
            // }) 
            // .catch(err => {
            //     console.log('Error', err);
            // });  
        var r= this.createConn(username,password); 
        console.log("inside: " + r);
        return r
    }

    getUser():any { 
        return this.user.user_ID;
    }

    updateDet(){
        this.user.user_ID="a";
        this.user.password="ac";
        this.email="abc@gmail.com";
    }

    logout(){
        this.user.user_ID="";
        this.user.password="";
        this.email="";
    }

    getEmail():any { 
        return this.email;
    }

    getPassword(user_ID:String):String{
        if(user_ID==this.user.user_ID)
            return this.user.password; 
    }

    updateUser(user:String,password:String){ 
    }
}