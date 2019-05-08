import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";
import {NativeScriptFormsModule} from "nativescript-angular/forms"; 
@NgModule({
  declarations: [AdminComponent, UserComponent,RegisterComponent],

  imports: [
    NativeScriptCommonModule,
    RegisterRoutingModule,
    NativeScriptFormsModule
  ],

  schemas: [NO_ERRORS_SCHEMA]
})

export class RegisterModule { }
