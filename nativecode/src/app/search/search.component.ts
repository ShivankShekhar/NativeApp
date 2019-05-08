import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Search",
    moduleId: module.id,
    styleUrls: ['./search.component.css'],
    templateUrl: "./search.component.html"
})

export class SearchComponent implements OnInit {

    constructor() { 
    }

    ngOnInit(): void { 
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
