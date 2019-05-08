import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeaturedComponent } from "./featured.component";

import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { AddItemComponent } from './add-item/add-item.component'; 

const routes: Routes = [
    { path: "",component: ProductComponent }, 
    { path: "add", component: AddItemComponent }, 
    // { path: "product", component: ProductComponent },
    { path: "product/:product_name", component: ProductDetailComponent },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeaturedRoutingModule { }
