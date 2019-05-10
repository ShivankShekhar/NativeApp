"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("@angular/router");
var platform_1 = require("tns-core-modules/platform");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(_router) {
        this.countries = [
            { name: "Detect Object", imageSrc: "~/app/images/cam.png" },
            { name: "Locate Shipment", imageSrc: "~/app/images/loc.png" },
        ];
        this.router = _router;
        this.getDimension();
    }
    BrowseComponent.prototype.getDimension = function () {
        this.height = platform_1.screen.mainScreen.heightPixels;
        this.width = platform_1.screen.mainScreen.widthPixels;
        console.log(this.height);
        console.log(this.width);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0RBQW9EO0FBRXBELDBDQUF3QztBQUN4QyxzREFBaUQ7QUFRakQ7SUFXSSx5QkFBWSxPQUFjO1FBTjFCLGNBQVMsR0FBeUM7WUFDMUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTtZQUMzRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7U0FFcEUsQ0FBQztRQUdFLElBQUksQ0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNBLElBQUksQ0FBQyxNQUFNLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLFFBQU8sSUFBSSxDQUFDLEtBQUssRUFDakI7WUFDSSxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDakQsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNO1NBQ3BEO0lBQ0wsQ0FBQztJQXRDUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVlzQixlQUFNO09BWGpCLGVBQWUsQ0F3QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiXG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7c2NyZWVufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiOyBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2Jyb3dzZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXI7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6YW55O1xuICAgIHByaXZhdGUgd2lkdGg6YW55O1xuXG4gICAgY291bnRyaWVzOiB7IG5hbWU6IHN0cmluZywgaW1hZ2VTcmM6IHN0cmluZyB9W10gPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiRGV0ZWN0IE9iamVjdFwiLCBpbWFnZVNyYzogXCJ+L2FwcC9pbWFnZXMvY2FtLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiTG9jYXRlIFNoaXBtZW50XCIsIGltYWdlU3JjOiBcIn4vYXBwL2ltYWdlcy9sb2MucG5nXCIgfSxcblxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLnJvdXRlcj1fcm91dGVyO1xuICAgICAgICB0aGlzLmdldERpbWVuc2lvbigpO1xuICAgIH1cbiBcbiAgICBnZXREaW1lbnNpb24oICkgeyAgXG4gICAgdGhpcy5oZWlnaHQ9c2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzO1xuICAgIHRoaXMud2lkdGg9c2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmhlaWdodCk7IFxuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy53aWR0aCk7IFxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBzd2l0Y2goYXJncy5pbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAwOiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kZXRlY3QnXSk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2NhdGUnXSk7IGJyZWFrO1xuICAgICAgICB9ICBcbiAgICB9XG5cbn1cbiJdfQ==