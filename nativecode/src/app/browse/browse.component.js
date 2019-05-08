"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("@angular/router");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(_router) {
        // countries: { name: string  }[] = [
        this.countries = [
            { name: "Detect Object", imageSrc: "~/app/images/cam.png" },
            { name: "Locate Shipment", imageSrc: "~/app/images/loc.png" },
        ];
        this.router = _router;
    }
    BrowseComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    BrowseComponent.prototype.onItemTap = function (args) {
        switch (args.index) {
            case 0:
                this.router.navigate(['/detect']);
                break;
            case 1:
                this.router.navigate(['/locate']);
                break;
        }
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: "Browse",
            moduleId: module.id,
            templateUrl: "./browse.component.html",
            styleUrls: ['./browse.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0RBQW9EO0FBRXBELDBDQUF3QztBQVF4QztJQUVJLHlCQUFZLE9BQWM7UUFhMUIscUNBQXFDO1FBQ3JDLGNBQVMsR0FBeUM7WUFDOUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTtZQUMzRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7U0FHaEUsQ0FBQztRQWxCRSxJQUFJLENBQUMsTUFBTSxHQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQVVELG1DQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUN6QixRQUFPLElBQUksQ0FBQyxLQUFLLEVBQ2pCO1lBQ0ksS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2pELEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtTQUNwRDtJQUNMLENBQUM7SUE3QlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FHc0IsZUFBTTtPQUZqQixlQUFlLENBK0IzQjtJQUFELHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkJyb3dzZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9icm93c2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gcHJpdmF0ZSByb3V0ZXI6Um91dGVyO1xuICAgIGNvbnN0cnVjdG9yKF9yb3V0ZXI6Um91dGVyKSB7XG4gICAgICAgIHRoaXMucm91dGVyPV9yb3V0ZXI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIC8vIGNvdW50cmllczogeyBuYW1lOiBzdHJpbmcgIH1bXSA9IFtcbiAgICBjb3VudHJpZXM6IHsgbmFtZTogc3RyaW5nLCBpbWFnZVNyYzogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIkRldGVjdCBPYmplY3RcIiwgaW1hZ2VTcmM6IFwifi9hcHAvaW1hZ2VzL2NhbS5wbmdcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTG9jYXRlIFNoaXBtZW50XCIsIGltYWdlU3JjOiBcIn4vYXBwL2ltYWdlcy9sb2MucG5nXCIgfSxcbiAgICAgICAgLy8geyBuYW1lOiBcIkRldGVjdCBPYmplY3RcIiB9LFxuICAgICAgICAvLyAgeyBuYW1lOiBcIkxvY2F0ZSBTaGlwbWVudFwiICB9LCBcbiAgICBdO1xuXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoKGFyZ3MuaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMDogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0ZWN0J10pOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9jYXRlJ10pOyBicmVhaztcbiAgICAgICAgfSAgXG4gICAgfVxuXG59XG4iXX0=