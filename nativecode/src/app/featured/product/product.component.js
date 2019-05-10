"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var product_service_1 = require("./product.service");
var platform_1 = require("tns-core-modules/platform");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, routerExtensions) {
        this.productService = productService;
        this.routerExtensions = routerExtensions;
        this.pic = '~/app/featured/images/ADD.png';
        this.productService = new product_service_1.ProductService();
        this.getDimension();
        this.pic = "https://placehold.it/5x5";
    }
    ProductComponent.prototype.getDimension = function () {
        this.height = platform_1.screen.mainScreen.heightPixels;
        this.width = platform_1.screen.mainScreen.widthPixels;
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
    };
    ProductComponent.prototype.onTap = function () {
        this.routerExtensions.navigate(["/featured/add"]);
    };
    ProductComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'ns-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.RouterExtensions])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0Qsa0RBQW9EO0FBRXBELHFEQUFtRDtBQUNuRCxzREFBaUQ7QUFTakQ7SUFPSSwwQkFBb0IsY0FBOEIsRUFBUyxnQkFBa0M7UUFBekUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZyRixRQUFHLEdBQUssK0JBQStCLENBQUM7UUFHNUMsSUFBSSxDQUFDLGNBQWMsR0FBRSxJQUFJLGdDQUFjLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRywwQkFBMEIsQ0FBQztJQUMxQyxDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUE3QlEsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVNzQyxnQ0FBYyxFQUEyQix5QkFBZ0I7T0FQcEYsZ0JBQWdCLENBK0I1QjtJQUFELHVCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFByb2QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCIuL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtzY3JlZW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7ICBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtcHJvZHVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvZHVjdHM6IEFycmF5PFByb2Q+OyBcbiAgICBQcm9kdSA6YW55O1xuICAgIHByaXZhdGUgaGVpZ2h0OmFueTtcbiAgICBwcml2YXRlIHdpZHRoOmFueTtcbiAgICBwcml2YXRlIHBpYzphbnk9J34vYXBwL2ZlYXR1cmVkL2ltYWdlcy9BREQucG5nJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlPSBuZXcgUHJvZHVjdFNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5nZXREaW1lbnNpb24oKTtcbiAgICAgICAgdGhpcy5waWMgPSBcImh0dHBzOi8vcGxhY2Vob2xkLml0LzV4NVwiOyBcbiAgICB9XG5cbiAgICBnZXREaW1lbnNpb24oICkgeyAgXG4gICAgICB0aGlzLmhlaWdodD1zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG4gICAgICB0aGlzLndpZHRoPXNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcbiAgICAgIHRoaXMucHJvZHVjdHM9IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBvblRhcCgpeyBcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZmVhdHVyZWQvYWRkXCJdKTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbn1cbiJdfQ==