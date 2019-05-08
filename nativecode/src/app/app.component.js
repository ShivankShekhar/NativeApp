"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var user_details_1 = require("~/app/login/user.details");
var app = require("tns-core-modules/application");
var AppComponent = /** @class */ (function () {
    function AppComponent(userDetails, router, routerExtensions) {
        this.userDetails = userDetails;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.uName = "";
        this.email = "";
        this.uName = this.userDetails.getUser();
        this.email = this.userDetails.getEmail();
        console.log("abc");
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            this.uName = this.userDetails.getUser();
            this.email = this.userDetails.getEmail();
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.logout = function () {
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
        this.userDetails.logout();
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], { clearHistory: true,
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [user_details_1.UserDetails, router_1.Router, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsNENBQXdDO0FBRXhDLHlEQUFtRDtBQUNuRCxrREFBb0Q7QUFRcEQ7SUFNSSxzQkFBb0IsV0FBdUIsRUFBUyxNQUFjLEVBQVUsZ0JBQWtDO1FBQTFGLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIdEcsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBR2xCLElBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbURBQXNCLEVBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDakIsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0lBRXZGLENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxZQUFvQjtRQUU3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSTtZQUMvRCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztRQUVILElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFsRFEsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0FPa0MsMEJBQVcsRUFBaUIsZUFBTSxFQUE0Qix5QkFBZ0I7T0FOckcsWUFBWSxDQW1EeEI7SUFBRCxtQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFJhZFNpZGVEcmF3ZXIsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwifi9hcHAvbG9naW4vdXNlclwiO1xuaW1wb3J0IHtVc2VyRGV0YWlsc30gZnJvbVwifi9hcHAvbG9naW4vdXNlci5kZXRhaWxzXCJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gICAgcHJpdmF0ZSB1TmFtZSA6IHN0cmluZz1cIlwiO1xuICAgIHByaXZhdGUgZW1haWwgOiBzdHJpbmc9XCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckRldGFpbHM6VXNlckRldGFpbHMscHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnVOYW1lID10aGlzLnVzZXJEZXRhaWxzLmdldFVzZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPXRoaXMudXNlckRldGFpbHMuZ2V0RW1haWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWJjXCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBcIi9ob21lXCI7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gdGhpcy5fYWN0aXZhdGVkVXJsID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICB0aGlzLnVOYW1lID10aGlzLnVzZXJEZXRhaWxzLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5lbWFpbCA9dGhpcy51c2VyRGV0YWlscy5nZXRFbWFpbCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkVXJsID09PSB1cmw7XG4gICAgfVxuXG4gICAgbG9nb3V0KCl7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcblxuICAgICAgICB0aGlzLnVzZXJEZXRhaWxzLmxvZ291dCgpO1xuICAgIH1cblxuICAgIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxufVxuIl19