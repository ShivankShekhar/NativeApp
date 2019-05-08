import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Prod } from "./product";
import { ProductService } from "./product.service";
import {screen} from "tns-core-modules/platform"; 

@Component({
  selector: 'ns-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  moduleId: module.id,
})

export class ProductComponent implements OnInit {
    products: Array<Prod>; 
    Produ :any;
    private height:any;
    private width:any;

    constructor(private productService: ProductService,private routerExtensions: RouterExtensions) {
        this.productService= new ProductService();
        this.getDimension();
    }

    getDimension( ) {  
      this.height=screen.mainScreen.heightPixels;
      this.width=screen.mainScreen.widthPixels;
        console.log( this.height); 
        console.log( this.width); 
    }

    ngOnInit(): void { 
      this.products= this.productService.getProducts();
    }

    onTap(){ 
      this.routerExtensions.navigate(["/featured/add"]);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
