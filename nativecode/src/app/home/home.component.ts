import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BarcodeScanner } from 'nativescript-barcodescanner';

import {User} from "../login/user";
import {UserDetails} from"../login/user.details"

import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,  
    //  styleUrls:["~/app/app.component.css"],
     styleUrls: ['./home.component.css'],
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {
        // data;
        private barcodeScanner:BarcodeScanner; 
        constructor(barcodeScanner:BarcodeScanner) {
        this.barcodeScanner=barcodeScanner; 
 
    }

    ngOnInit(): void {

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
  
    public onScan() {
        try{
                this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                showFlipCameraButton: false,   
                preferFrontCamera: false,     
                showTorchButton: true,        
                beepOnScan: true,             
                torchOn: false,               
                resultDisplayDuration: 200,  
            }).then((result) => {   
                // this.data= result;
                setTimeout(() =>{
                    this.showalert(result);
                }, 0);     
            }) 
            .catch(err => {
                console.log('Error', err);
            });
        }
        catch (er){
            console.log(er);
        }
    }

 showalert(data){ 
     alert({
       title: "Scan Result",
       message: "Format: " + data.format + ",\nContent:\n " + data.text,
       okButtonText: "OK"});
    
 }  
}
