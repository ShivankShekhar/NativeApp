import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

 import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FeaturedRoutingModule } from "./featured-routing.module";
import { FeaturedComponent } from "./featured.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        FeaturedComponent,
        ProductComponent,
        ProductDetailComponent,
        AddItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturedModule { }
