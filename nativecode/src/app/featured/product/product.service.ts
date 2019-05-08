import { Injectable,OnInit } from "@angular/core";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http"; 

import { Prod } from "./product";

@Injectable({
    providedIn: "root"
})
export class ProductService {



// private products:Array<Prod>=[];

    constructor( ){
        // request({ 
        //     url: `http://10.155.64.54:3000/product?data=all`,
        //     method: "GET"
        // }).then((response: any) => {
        //     console.log("res  : "+ JSON.stringify(response)); 
        //     var jas=JSON.parse(response.content);
        //     for(var i in jas){ 
        //         var item_no=jas[i].productItemNo;
        //         var name=jas[i].productName;
        //         var desc=jas[i].Description;
        //         var Image=jas[i].ImageSource; 
        //         var items:Prod = { product_item_no: item_no, product_name:name, description: desc,ImageSrc:Image};
        //         this.products.push(items); 
        //     }   
        // }, (e) => {console.log("Request Error : "+e);
        //         }); 
    } 

ngOnInit(){} 
    private products= new Array<Prod>(
        { product_item_no: 1, product_name: "Fuel Pumps", description: "",ImageSrc: "~/app/images/fuel.png" },
        { product_item_no: 2, product_name: "Steel Pipes", description: "",ImageSrc: "~/app/images/steelpipes.png" },
        { product_item_no: 3, product_name: "Nut Bolts", description: "" ,ImageSrc: "~/app/images/nut.jpg"},
        { product_item_no: 4, product_name: "Washers", description: "",ImageSrc: "~/app/images/washers.jpg" },
        { product_item_no: 5, product_name: "Metal Sheets", description: "",ImageSrc: "~/app/images/metal.jpg" },
        { product_item_no: 6, product_name: "Magnet coils", description: "",ImageSrc: "~/app/images/magnet.JPG" },
    ); 
    
    getProducts(): Array<Prod> { 
        return this.products;
    }

    getProduct(product_name: string): Prod {
        return this.products.filter((product) => product.product_name === product_name)[0];
    }

}

