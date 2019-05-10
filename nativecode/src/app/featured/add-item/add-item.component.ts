import { Component, OnInit } from '@angular/core';

import { RouterExtensions } from "nativescript-angular/router";
import * as Camera from "nativescript-camera";
import * as ImageSource from "tns-core-modules/image-source";
import * as Permissions from "nativescript-permissions";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";  
import {NativeScriptFormsModule} from "nativescript-angular/forms";  

// import { Http, Headers, Response, RequestOptions } from "@angular/http";

@Component({
  selector: 'ns-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  moduleId: module.id,
})

export class AddItemComponent implements OnInit {

    //   private images: Array<any>; 
    private pic:any;
    isImage:boolean=false;
    private prodID:number;
    private prodName:String;
    private prodDesc:String; 
    private base64:String;

    constructor(private routerExtensions: RouterExtensions) { 
        this.prodID=null;
        this.prodName="";
        this.prodDesc="";
        // this.images = [] ; 
        this.pic = "https://placehold.it/200x200"; 
    }

    ngOnInit() {
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
            
                Camera.takePicture({ width: 150, height: 150, keepAspectRatio: true, saveToGallery: false })
                    .then(imageAsset => { 
                        // this.images.push(imageAsset);
                        this.pic=imageAsset;
                        ImageSource.fromAsset(imageAsset)
                            .then(res => {
                                
                                this.base64 = res.toBase64String("jpg", 100); 
                                this.isImage=true;
                                console.log(this.base64);
                            })
                    }).catch(function (err) {  
                        console.log("Error -> " + err.message);
                    }); 
    } 

    public upload(){
            var productItemNo = this.prodID
        var productName = this.prodName
        var ImageSource = this.base64
        var Description = this.prodDesc          

        console.log(productItemNo+" name : "+productName); 
    }
  
    public onButtonTap(){           
        request({ 
            url: `http://10.155.64.54:3000/product`,
            method: "POST",
            headers: { 
            "Content-Type": "application/json"
            },
            content :  
            JSON.stringify({
                        "productItemNo": this.prodID,
                        "productName"  : this.prodName,
                        "ImageSource"  : this.base64,//this.pic,
                        "Description"  : this.prodDesc 
                    }) 
        }).then((response: any) => {
            if(response)
                    {
                        alert('Successfull');  
                        this.routerExtensions.navigate(["/featured"]);
                }
            }, (e) => {console.log("Request Error : "+e);
        });  
    } 

}
