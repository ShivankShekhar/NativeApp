"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var admin_component_1 = require("./admin/admin.component");
var user_component_1 = require("./user/user.component");
var register_routing_module_1 = require("./register-routing.module");
var register_component_1 = require("./register.component");
var forms_1 = require("nativescript-angular/forms");
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        core_1.NgModule({
            declarations: [admin_component_1.AdminComponent, user_component_1.UserComponent, register_component_1.RegisterComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                register_routing_module_1.RegisterRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], RegisterModule);
    return RegisterModule;
}());
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSwyREFBeUQ7QUFDekQsd0RBQXNEO0FBRXRELHFFQUFrRTtBQUNsRSwyREFBeUQ7QUFDekQsb0RBQW1FO0FBYW5FO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBWjFCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGdDQUFjLEVBQUUsOEJBQWEsRUFBQyxzQ0FBaUIsQ0FBQztZQUUvRCxPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLCtCQUF1QjthQUN4QjtZQUVELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FFVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFkbWluQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9hZG1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckNvbXBvbmVudCB9IGZyb20gJy4vdXNlci91c2VyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFJlZ2lzdGVyUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JlZ2lzdGVyLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7IFxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWRtaW5Db21wb25lbnQsIFVzZXJDb21wb25lbnQsUmVnaXN0ZXJDb21wb25lbnRdLFxuXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgUmVnaXN0ZXJSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gIF0sXG5cbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJNb2R1bGUgeyB9XG4iXX0=