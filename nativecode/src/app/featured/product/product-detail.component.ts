import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Prod } from "./product";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";  
import { ProductService } from "./product.service";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./product-detail.component.html",
      styleUrls: ['./product.component.css']
})
export class ProductDetailComponent implements OnInit {
   product : Prod;

    constructor(
        private routerExtensions: RouterExtensions,
        private productService: ProductService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const product_name = this.route.snapshot.params.product_name;
        this.product = this.productService.getProduct(product_name);
    }

    delete(){
        dialogs.confirm({
            title: "DELETE",
            message: "Are you Sure, You want to Delete this Item?",
            okButtonText: "YES",
            cancelButtonText: "CANCEL", 
        }).then(result => {
            
                request({ 
                    url: `http://10.155.64.54:3000/product`,
                    method: "DELETE",
                    headers: { 
                    "Content-Type": "application/json"
                    },
                    content :  
                    JSON.stringify({
                                "productItemNo": this.route.snapshot.params.product_name
                            }) 
                }).then((response: any) => {
                    if(response)
                            {
                                alert('Successfull');  
                                this.routerExtensions.navigate(["/featured"]);
                        }
                    }, (e) => {console.log("Request Error : "+e);
                });  




            console.log("Dialog result: " + result);
            this.routerExtensions.navigate(["/featured"]);
        });
    }

    edit(){
        console.log("hello");
    }

    back(){
        this.routerExtensions.back();
    }
}
