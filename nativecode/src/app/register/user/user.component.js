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
            method: "PUT",
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
                if (response.name != "MongoError") {
                    alert('Successfull');
                    _this.routerExtensions.navigate(["/login"], { clearHistory: true });
                }
                else {
                    alert('User name already exist');
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDOUQsOENBQStDO0FBUWhEO0lBU0UsdUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkE4QkM7UUE1QkMsY0FBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLGdDQUFnQztZQUNyQyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDRCxjQUFjLEVBQ2Qsa0JBQWtCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLFVBQVUsRUFBRyxLQUFHLElBQUksQ0FBQyxNQUFRO2dCQUM3QixVQUFVLEVBQUcsS0FBRyxJQUFJLENBQUMsUUFBVTtnQkFDL0IsT0FBTyxFQUFHLEtBQUcsSUFBSSxDQUFDLEtBQU87Z0JBQ3pCLEtBQUssRUFBRyxLQUFHLElBQUksQ0FBQyxHQUFLO2FBRXBCLENBQUM7U0FDWCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBWTtZQUVmLElBQUcsUUFBUSxFQUFDO2dCQUNWLElBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQzlCO29CQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQUM7cUJBQ2pFO29CQUNGLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUNsQzthQUNGO1FBRUwsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFoRFUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FVc0MseUJBQWdCO09BVDNDLGFBQWEsQ0FrRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuIGltcG9ydCB7IHJlcXVlc3R9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtdXNlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXNlci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5wcml2YXRlIHBhc3N3b3JkOmFueTtcbnByaXZhdGUgdXNlcklEOmFueTtcbnByaXZhdGUgSUQ6YW55O1xucHJpdmF0ZSBlbWFpbDphbnk7XG5wcml2YXRlIGFuczphbnk7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcmVnaXN0ZXIoKXtcblxuICAgIHJlcXVlc3QoeyBcbiAgICAgIHVybDogYGh0dHA6Ly8xMC4xNTUuNjQuNTQ6MzAwMC9sb2dpbmAsXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOlxuICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQgOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwidXNlck5hbWVcIiA6IGAke3RoaXMudXNlcklEfWAsXG4gICAgICAgICAgICAgIFwicGFzc3dvcmRcIiA6IGAke3RoaXMucGFzc3dvcmR9YCxcbiAgICAgICAgICAgICAgXCJlbWFpbFwiIDogYCR7dGhpcy5lbWFpbH1gLFxuICAgICAgICAgICAgICBcImFuc1wiIDogYCR7dGhpcy5hbnN9YFxuXG4gICAgICAgICAgICAgIH0pIFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlOmFueSkgPT4ge1xuICAgICAgXG4gICAgICAgICAgaWYocmVzcG9uc2UpeyBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm5hbWUgIT0gXCJNb25nb0Vycm9yXCIpXG4gICAgICAgICAgICAgIHthbGVydCgnU3VjY2Vzc2Z1bGwnKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwge2NsZWFySGlzdG9yeTogdHJ1ZSB9KTt9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBhbGVydCgnVXNlciBuYW1lIGFscmVhZHkgZXhpc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSwgKGUpID0+IHtjb25zb2xlLmxvZyhcIlJlcXVlc3QgRXJyb3IgOiBcIitlKTtcbiAgICB9KTsgXG5cbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbn1cbiJdfQ==