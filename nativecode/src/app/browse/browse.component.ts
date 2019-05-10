import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Router} from "@angular/router";
import {screen} from "tns-core-modules/platform"; 

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
    private router:Router;
    private height:any;
    private width:any;

    countries: { name: string, imageSrc: string }[] = [
            { name: "Detect Object", imageSrc: "~/app/images/cam.png" },
            { name: "Locate Shipment", imageSrc: "~/app/images/loc.png" },

    ];

    constructor(_router:Router) {
        this.router=_router;
        this.getDimension();
    }
 
    getDimension( ) {  
    this.height=screen.mainScreen.heightPixels;
    this.width=screen.mainScreen.widthPixels;
        console.log( this.height); 
        console.log( this.width); 
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(args: ItemEventData): void {
        switch(args.index)
        {
            case 0: this.router.navigate(['/detect']); break;
            case 1: this.router.navigate(['/locate']); break;
        }  
    }

}
