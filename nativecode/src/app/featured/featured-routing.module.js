"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var product_component_1 = require("./product/product.component");
var product_detail_component_1 = require("./product/product-detail.component");
var add_item_component_1 = require("./add-item/add-item.component");
var routes = [
    { path: "", component: product_component_1.ProductComponent },
    { path: "add", component: add_item_component_1.AddItemComponent },
    // { path: "product", component: ProductComponent },
    { path: "product/:product_name", component: product_detail_component_1.ProductDetailComponent },
];
var FeaturedRoutingModule = /** @class */ (function () {
    function FeaturedRoutingModule() {
    }
    FeaturedRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], FeaturedRoutingModule);
    return FeaturedRoutingModule;
}());
exports.FeaturedRoutingModule = FeaturedRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlZC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFJdkUsaUVBQStEO0FBQy9ELCtFQUE0RTtBQUM1RSxvRUFBaUU7QUFFakUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUN4QyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFFO0lBQzVDLG9EQUFvRDtJQUNwRCxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7Q0FFdkUsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxxQkFBcUIsQ0FBSTtJQUFELDRCQUFDO0NBQUEsQUFBdEMsSUFBc0M7QUFBekIsc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlZENvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmVkLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBQcm9kdWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQnOyBcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCB9LCBcbiAgICB7IHBhdGg6IFwiYWRkXCIsIGNvbXBvbmVudDogQWRkSXRlbUNvbXBvbmVudCB9LCBcbiAgICAvLyB7IHBhdGg6IFwicHJvZHVjdFwiLCBjb21wb25lbnQ6IFByb2R1Y3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicHJvZHVjdC86cHJvZHVjdF9uYW1lXCIsIGNvbXBvbmVudDogUHJvZHVjdERldGFpbENvbXBvbmVudCB9LFxuICAgIFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==