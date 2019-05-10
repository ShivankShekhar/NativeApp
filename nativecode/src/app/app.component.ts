import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import {User} from "~/app/login/user";
import {UserDetails} from"~/app/login/user.details"
import * as app from "tns-core-modules/application";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    private uName : string="";
    private email : string="";

    constructor(private userDetails:UserDetails,private router: Router, private routerExtensions: RouterExtensions) {
            this.uName =this.userDetails.getUser();
            this.email =this.userDetails.getEmail();
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        this.uName =this.userDetails.getUser();
        this.email =this.userDetails.getEmail();
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    logout(){
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();

        this.userDetails.logout();
    }

    onNavItemTap(navItemRoute: string): void {

        this.routerExtensions.navigate([navItemRoute], { clearHistory: true,
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
