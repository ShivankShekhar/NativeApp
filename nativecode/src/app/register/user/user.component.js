"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var http_1 = require("tns-core-modules/http");
var UserComponent = /** @class */ (function () {
    function UserComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.register = function () {
        var _this = this;
        http_1.request({
            url: "http://10.155.64.54:3000/login",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            content: JSON.stringify({
                "userName": "" + this.userID,
                "password": "" + this.password,
                "email": "" + this.email,
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
    UserComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'ns-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDOUQsOENBQStDO0FBUWhEO0lBU0UsdUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUFyQkMsY0FBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLGdDQUFnQztZQUNyQyxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDRCxjQUFjLEVBQ2Qsa0JBQWtCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLFVBQVUsRUFBRyxLQUFHLElBQUksQ0FBQyxNQUFRO2dCQUM3QixVQUFVLEVBQUcsS0FBRyxJQUFJLENBQUMsUUFBVTtnQkFDL0IsT0FBTyxFQUFHLEtBQUcsSUFBSSxDQUFDLEtBQU87Z0JBQ3pCLEtBQUssRUFBRyxLQUFHLElBQUksQ0FBQyxHQUFLO2FBRXBCLENBQUM7U0FDWCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBWTtZQUNmLElBQUcsUUFBUSxFQUFDO2dCQUNSLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDckU7UUFDTCxDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQXpDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVVzQyx5QkFBZ0I7T0FUM0MsYUFBYSxDQTJDekI7SUFBRCxvQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG4gaW1wb3J0IHsgcmVxdWVzdH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy11c2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91c2VyLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbnByaXZhdGUgcGFzc3dvcmQ6YW55O1xucHJpdmF0ZSB1c2VySUQ6YW55O1xucHJpdmF0ZSBJRDphbnk7XG5wcml2YXRlIGVtYWlsOmFueTtcbnByaXZhdGUgYW5zOmFueTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByZWdpc3Rlcigpe1xuXG4gICAgcmVxdWVzdCh7IFxuICAgICAgdXJsOiBgaHR0cDovLzEwLjE1NS42NC41NDozMDAwL2xvZ2luYCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOlxuICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQgOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwidXNlck5hbWVcIiA6IGAke3RoaXMudXNlcklEfWAsXG4gICAgICAgICAgICAgIFwicGFzc3dvcmRcIiA6IGAke3RoaXMucGFzc3dvcmR9YCxcbiAgICAgICAgICAgICAgXCJlbWFpbFwiIDogYCR7dGhpcy5lbWFpbH1gLFxuICAgICAgICAgICAgICBcImFuc1wiIDogYCR7dGhpcy5hbnN9YFxuXG4gICAgICAgICAgICAgIH0pIFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlOmFueSkgPT4ge1xuICAgICAgICAgIGlmKHJlc3BvbnNlKXsgXG4gICAgICAgICAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbCcpO1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgIH1cbiAgICAgIH0sIChlKSA9PiB7Y29uc29sZS5sb2coXCJSZXF1ZXN0IEVycm9yIDogXCIrZSk7XG4gICAgfSk7IFxuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cblxufVxuIl19