import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
 import {DetectComponent} from "./detect/detect.component";
 import {MapComponent} from "./map/map.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";



const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent }, 
    { path: "detect", component: DetectComponent }, 
    { path: "locate", component: MapComponent }, 
    { path: "register", loadChildren: "~/app/register/register.module#RegisterModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
