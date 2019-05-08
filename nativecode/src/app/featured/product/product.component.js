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
        this.productService = new product_service_1.ProductService();
        this.getDimension();
    }
    ProductComponent.prototype.getDimension = function () {
        this.height = platform_1.screen.mainScreen.heightPixels;
        this.width = platform_1.screen.mainScreen.widthPixels;
        console.log(this.height);
        console.log(this.width);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0Qsa0RBQW9EO0FBRXBELHFEQUFtRDtBQUNuRCxzREFBaUQ7QUFTakQ7SUFNSSwwQkFBb0IsY0FBOEIsRUFBUyxnQkFBa0M7UUFBekUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN6RixJQUFJLENBQUMsY0FBYyxHQUFFLElBQUksZ0NBQWMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUE3QlEsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVFzQyxnQ0FBYyxFQUEyQix5QkFBZ0I7T0FOcEYsZ0JBQWdCLENBK0I1QjtJQUFELHVCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFByb2QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCIuL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHtzY3JlZW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7IFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1wcm9kdWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm9kdWN0czogQXJyYXk8UHJvZD47IFxuICAgIFByb2R1IDphbnk7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6YW55O1xuICAgIHByaXZhdGUgd2lkdGg6YW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2U9IG5ldyBQcm9kdWN0U2VydmljZSgpO1xuICAgICAgICB0aGlzLmdldERpbWVuc2lvbigpO1xuICAgIH1cblxuICAgIGdldERpbWVuc2lvbiggKSB7ICBcbiAgICAgIHRoaXMuaGVpZ2h0PXNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcbiAgICAgIHRoaXMud2lkdGg9c2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmhlaWdodCk7IFxuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy53aWR0aCk7IFxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcbiAgICAgIHRoaXMucHJvZHVjdHM9IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBvblRhcCgpeyBcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZmVhdHVyZWQvYWRkXCJdKTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbn1cbiJdfQ==