import { Component, OnInit } from '@angular/core';
import * as Camera from "nativescript-camera";
import * as ImageSource from "tns-core-modules/image-source";
import * as Permissions from "nativescript-permissions";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css'],
  moduleId: module.id,
})

export class DetectComponent implements OnInit {

  private images: Array<any>; 
  private pic:any;
  private isimg:boolean=false;
  constructor(private routerExtensions: RouterExtensions) { 
    this.images = [] ; 
    this.pic = "https://placehold.it/200x200"; 
  }

  ngOnInit() {
      this.isimg=false;
  }

    back(){
        this.routerExtensions.back();
    }

   public capture() {  
            // this.database.createDocument({
            //     "type": "image",
            //     "image": base64,
            //     "timestamp": (new Date()).getTime()
            // });    
           Camera.requestPermissions();  
            Camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: false })
                .then(imageAsset => { 
                    // this.images.push(imageAsset);
                    this.pic=imageAsset;

                    ImageSource.fromAsset(imageAsset)
                        .then(res => {
                            var base64 = res.toBase64String("jpg", 100); 
                            this.isimg=true;
                            console.log(base64);
                        })
                }).catch(function (err) {  
                    console.log("Error -> " + err.message);
                }); 
  } 


    // android :any;
    // public getCameraPermission() {
    //     Permissions.requestPermission(this.android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
    //         console.log("Permission granted!");
    //     }).catch(() => {
    //         console.log("Permission is not granted (sadface)");
    //     });
    // }

}
