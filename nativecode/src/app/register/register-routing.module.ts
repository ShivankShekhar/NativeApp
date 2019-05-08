import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RegisterComponent } from "./register.component";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: "", redirectTo: "/admin", pathMatch: "full" },
    { path: "admin", component: AdminComponent }, 
    { path: "user", component: UserComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RegisterRoutingModule { }
