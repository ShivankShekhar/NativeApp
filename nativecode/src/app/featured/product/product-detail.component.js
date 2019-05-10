"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var http_1 = require("tns-core-modules/http");
var product_service_1 = require("./product.service");
var dialogs = require("tns-core-modules/ui/dialogs");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(routerExtensions, productService, route) {
        this.routerExtensions = routerExtensions;
        this.productService = productService;
        this.route = route;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var product_name = this.route.snapshot.params.product_name;
        this.product = this.productService.getProduct(product_name);
    };
    ProductDetailComponent.prototype.delete = function () {
        var _this = this;
        dialogs.confirm({
            title: "DELETE",
            message: "Are you Sure, You want to Delete this Item?",
            okButtonText: "YES",
            cancelButtonText: "CANCEL",
        }).then(function (result) {
            if (result == true) {
                http_1.request({
                    url: "http://10.155.64.54:3000/product",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    content: JSON.stringify({
                        "productItemNo": _this.route.snapshot.params.product_name
                    })
                }).then(function (response) {
                    if (response) {
                        alert('Successfull');
                        _this.routerExtensions.navigate(["/featured"], { clearHistory: true });
                    }
                }, function (e) {
                    console.log("Request Error : " + e);
                });
            }
            console.log("Dialog result: " + result);
        });
    };
    ProductDetailComponent.prototype.edit = function () {
        console.log("hello");
    };
    ProductDetailComponent.prototype.back = function () {
        this.routerExtensions.back();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./product-detail.component.html",
            styleUrls: ['./product.component.css']
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            product_service_1.ProductService,
            router_1.ActivatedRoute])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsOENBQXVGO0FBQ3ZGLHFEQUFtRDtBQUNuRCxxREFBdUQ7QUFRdkQ7SUFHSSxnQ0FDWSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsS0FBcUI7UUFGckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHlDQUFRLEdBQVI7UUFDSSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHVDQUFNLEdBQU47UUFBQSxpQkFrQ0M7UUFqQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNaLEtBQUssRUFBRSxRQUFRO1lBQ2YsT0FBTyxFQUFFLDZDQUE2QztZQUN0RCxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsSUFBRyxNQUFNLElBQUUsSUFBSSxFQUFDO2dCQUNaLGNBQU8sQ0FBQztvQkFDSixHQUFHLEVBQUUsa0NBQWtDO29CQUN2QyxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNULGNBQWMsRUFBRSxrQkFBa0I7cUJBQ2pDO29CQUNELE9BQU8sRUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNILGVBQWUsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWTtxQkFDM0QsQ0FBQztpQkFFYixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBYTtvQkFDbEIsSUFBRyxRQUFRLEVBQ0g7d0JBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUNyQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztxQkFDN0U7Z0JBQ0wsQ0FBQyxFQUFFLFVBQUMsQ0FBQztvQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQzthQUVOO1lBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUU1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQscUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBeERRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDNUMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLZ0MseUJBQWdCO1lBQ2xCLGdDQUFjO1lBQ3ZCLHVCQUFjO09BTnhCLHNCQUFzQixDQXlEbEM7SUFBRCw2QkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb2QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7ICBcclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi9wcm9kdWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICAgIHN0eWxlVXJsczogWycuL3Byb2R1Y3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgcHJvZHVjdCA6IFByb2Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RfbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnByb2R1Y3RfbmFtZTtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QocHJvZHVjdF9uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKXtcclxuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IFN1cmUsIFlvdSB3YW50IHRvIERlbGV0ZSB0aGlzIEl0ZW0/XCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZRVNcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDQU5DRUxcIiwgXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQ9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly8xMC4xNTUuNjQuNTQ6MzAwMC9wcm9kdWN0YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICBcclxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0SXRlbU5vXCI6IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnByb2R1Y3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3VjY2Vzc2Z1bGwnKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZmVhdHVyZWRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtjb25zb2xlLmxvZyhcIlJlcXVlc3QgRXJyb3IgOiBcIitlKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2soKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==