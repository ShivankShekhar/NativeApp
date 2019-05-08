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
                    _this.routerExtensions.navigate(["/featured"]);
                }
            }, function (e) {
                console.log("Request Error : " + e);
            });
            console.log("Dialog result: " + result);
            _this.routerExtensions.navigate(["/featured"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsOENBQXVGO0FBQ3ZGLHFEQUFtRDtBQUNuRCxxREFBdUQ7QUFRdkQ7SUFHSSxnQ0FDWSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsS0FBcUI7UUFGckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHlDQUFRLEdBQVI7UUFDSSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHVDQUFNLEdBQU47UUFBQSxpQkFpQ0M7UUFoQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNaLEtBQUssRUFBRSxRQUFRO1lBQ2YsT0FBTyxFQUFFLDZDQUE2QztZQUN0RCxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBRU4sY0FBTyxDQUFDO2dCQUNKLEdBQUcsRUFBRSxrQ0FBa0M7Z0JBQ3ZDLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1QsY0FBYyxFQUFFLGtCQUFrQjtpQkFDakM7Z0JBQ0QsT0FBTyxFQUNQLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ0gsZUFBZSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZO2lCQUMzRCxDQUFDO2FBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWE7Z0JBQ2xCLElBQUcsUUFBUSxFQUNIO29CQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDckIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQ3JEO1lBQ0wsQ0FBQyxFQUFFLFVBQUMsQ0FBQztnQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1lBS1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQscUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBdkRRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDNUMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLZ0MseUJBQWdCO1lBQ2xCLGdDQUFjO1lBQ3ZCLHVCQUFjO09BTnhCLHNCQUFzQixDQXdEbEM7SUFBRCw2QkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb2QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7ICBcclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi9wcm9kdWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICAgIHN0eWxlVXJsczogWycuL3Byb2R1Y3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgcHJvZHVjdCA6IFByb2Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RfbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnByb2R1Y3RfbmFtZTtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QocHJvZHVjdF9uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKXtcclxuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IFN1cmUsIFlvdSB3YW50IHRvIERlbGV0ZSB0aGlzIEl0ZW0/XCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZRVNcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDQU5DRUxcIiwgXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QoeyBcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vMTAuMTU1LjY0LjU0OjMwMDAvcHJvZHVjdGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdEl0ZW1Ob1wiOiB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wcm9kdWN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbCcpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9mZWF0dXJlZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge2NvbnNvbGUubG9nKFwiUmVxdWVzdCBFcnJvciA6IFwiK2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7ICBcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2ZlYXR1cmVkXCJdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=