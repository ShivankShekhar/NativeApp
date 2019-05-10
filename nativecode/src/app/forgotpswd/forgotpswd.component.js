"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var http_1 = require("tns-core-modules/http");
var ForgotpswdComponent = /** @class */ (function () {
    function ForgotpswdComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    ForgotpswdComponent.prototype.ngOnInit = function () {
    };
    ForgotpswdComponent.prototype.reset = function () {
        var _this = this;
        http_1.request({
            url: "http://10.155.64.54:3000/login",
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            content: JSON.stringify({
                "userName": "" + this.userName,
                "password": "" + this.password,
                "ans": "" + this.ans
            })
        }).then(function (response) {
            if (response) {
                alert('Successfull');
                _this.routerExtensions.navigate(["/login"], { clearHistory: true });
            }
        }, function (e) {
            console.log("Request Error : " + e);
        });
    };
    ForgotpswdComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    ForgotpswdComponent = __decorate([
        core_1.Component({
            selector: 'ns-forgotpswd',
            templateUrl: './forgotpswd.component.html',
            styleUrls: ['./forgotpswd.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ForgotpswdComponent);
    return ForgotpswdComponent;
}());
exports.ForgotpswdComponent = ForgotpswdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290cHN3ZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3Jnb3Rwc3dkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDOUQsOENBQStDO0FBUWhEO0lBRUUsNkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUlELG1DQUFLLEdBQUw7UUFBQSxpQkF1QkM7UUFyQkMsY0FBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLGdDQUFnQztZQUNyQyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDRCxjQUFjLEVBQ2Qsa0JBQWtCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLFVBQVUsRUFBRyxLQUFHLElBQUksQ0FBQyxRQUFVO2dCQUMvQixVQUFVLEVBQUcsS0FBRyxJQUFJLENBQUMsUUFBVTtnQkFDL0IsS0FBSyxFQUFHLEtBQUcsSUFBSSxDQUFDLEdBQUs7YUFFcEIsQ0FBQztTQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFZO1lBQ2YsSUFBRyxRQUFRLEVBQUM7Z0JBQ1IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNyRTtRQUNMLENBQUMsRUFBRSxVQUFDLENBQUM7WUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBcENVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FHc0MseUJBQWdCO09BRjNDLG1CQUFtQixDQXNDL0I7SUFBRCwwQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuIGltcG9ydCB7IHJlcXVlc3R9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZm9yZ290cHN3ZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3Jnb3Rwc3dkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ290cHN3ZC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdHBzd2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbnByaXZhdGUgdXNlck5hbWU6YW55O1xucHJpdmF0ZSBwYXNzd29yZDphbnk7XG5wcml2YXRlIGFuczphbnk7XG4gIHJlc2V0KCl7XG5cbiAgICByZXF1ZXN0KHsgXG4gICAgICB1cmw6IGBodHRwOi8vMTAuMTU1LjY0LjU0OjMwMDAvbG9naW5gLFxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjpcbiAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBjb250ZW50IDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcInVzZXJOYW1lXCIgOiBgJHt0aGlzLnVzZXJOYW1lfWAsXG4gICAgICAgICAgICAgIFwicGFzc3dvcmRcIiA6IGAke3RoaXMucGFzc3dvcmR9YCxcbiAgICAgICAgICAgICAgXCJhbnNcIiA6IGAke3RoaXMuYW5zfWBcblxuICAgICAgICAgICAgICB9KSBcbiAgICB9KS50aGVuKChyZXNwb25zZTphbnkpID0+IHtcbiAgICAgICAgICBpZihyZXNwb25zZSl7IFxuICAgICAgICAgICAgICBhbGVydCgnU3VjY2Vzc2Z1bGwnKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwge2NsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG4gICAgICB9LCAoZSkgPT4ge2NvbnNvbGUubG9nKFwiUmVxdWVzdCBFcnJvciA6IFwiK2UpO1xuICAgIH0pOyBcblxuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cblxufVxuIl19