import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';

 import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { MapComponent } from './map/map.component';
import { DetectComponent } from './detect/detect.component';

 

import { registerElement } from "nativescript-angular/element-registry";
import { ForgotpswdComponent } from './forgotpswd/forgotpswd.component';
registerElement("HereMap", () => require("nativescript-here").Here);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MapComponent,
        DetectComponent,
        ForgotpswdComponent
    ],
    providers: [BarcodeScanner], 
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
