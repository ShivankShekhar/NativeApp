import { Component, OnInit } from '@angular/core';
import * as Camera from "nativescript-camera";
import * as ImageSource from "tns-core-modules/image-source";
import * as Permissions from "nativescript-permissions";
import { RouterExtensions } from "nativescript-angular/router";
 import { request} from "tns-core-modules/http";

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
  private base64:any;
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
                            this.base64 = res.toBase64String("jpg", 100); 
                            this.isimg=true;
                            console.log(this.base64);
                        })
                }).catch(function (err) {  
                    console.log("Error -> " + err.message);
                }); 
  } 

test(){


// request({ 
//       url: `http://10.155.64.54:5000/obj`,
//       method: "GET",
//       headers: { 
//               "Content-Type": "application/json"
//       },
//       content : JSON.stringify({ 
//               "ImageSource" : `${this.base64}`, 
//               }) 
//     }).then((response:any) => {
      
//           if(response)
//               {alert('Successfull');
//               this.routerExtensions.navigate(["/login"], {clearHistory: true });}
//             else{
//               alert('User name already exist');
//             }
//       }, (e) => {console.log("Request Error : "+e);
//     }); 
}


}
