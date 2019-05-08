"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var featured_routing_module_1 = require("./featured-routing.module");
var featured_component_1 = require("./featured.component");
var product_component_1 = require("./product/product.component");
var product_detail_component_1 = require("./product/product-detail.component");
var add_item_component_1 = require("./add-item/add-item.component");
var FeaturedModule = /** @class */ (function () {
    function FeaturedModule() {
    }
    FeaturedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                featured_routing_module_1.FeaturedRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                featured_component_1.FeaturedComponent,
                product_component_1.ProductComponent,
                product_detail_component_1.ProductDetailComponent,
                add_item_component_1.AddItemComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FeaturedModule);
    return FeaturedModule;
}());
exports.FeaturedModule = FeaturedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV0RSxvREFBcUU7QUFDdEUscUVBQWtFO0FBQ2xFLDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsK0VBQTRFO0FBQzVFLG9FQUFpRTtBQWtCakU7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFoQjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtDQUFxQjtnQkFDckIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQixpREFBc0I7Z0JBQ3RCLHFDQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGZWF0dXJlZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9mZWF0dXJlZC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgRmVhdHVyZWRDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEZlYXR1cmVkUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBGZWF0dXJlZENvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdERldGFpbENvbXBvbmVudCxcbiAgICAgICAgQWRkSXRlbUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZE1vZHVsZSB7IH1cbiJdfQ==