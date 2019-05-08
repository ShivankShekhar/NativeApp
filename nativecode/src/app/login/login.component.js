"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_details_1 = require("./user.details");
var router_2 = require("nativescript-angular/router");
var http_1 = require("tns-core-modules/http");
var dialogs = require("tns-core-modules/ui/dialogs");
var platform_1 = require("tns-core-modules/platform");
var LoginComponent = /** @class */ (function () {
    //  import {screen} from "tns-core-modules/platform"; 
    //     height:any;
    //     width:any;
    // constructor(){
    //   this.getDimension();
    // }
    // getDimension( ) {  
    //   this.height=screen.mainScreen.heightPixels;
    //   this.width=screen.mainScreen.widthPixels;
    //     console.log( this.height); 
    //     console.log( this.width); 
    // }
    function LoginComponent(_router, userDetails, routerExtensions) {
        this._router = _router;
        this.userDetails = userDetails;
        this.routerExtensions = routerExtensions;
        this.passwordTrue = 0;
        this.router = _router;
        this.getDimension();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userID = "";
        this.password = "";
    };
    LoginComponent.prototype.getDimension = function () {
        this.height = platform_1.screen.mainScreen.heightPixels;
        this.width = platform_1.screen.mainScreen.widthPixels;
        console.log(this.height);
        console.log(this.width);
    };
    LoginComponent.prototype.onButtonTap = function () {
        var _this = this;
        if (this.userID != "" && this.password != "") {
            //     // this.userDetails.getUser(this.userID);
            //     // console.log("ID= "+this.userID+" pass="+this.password);   
            //     // if( this.password == this.userDetails.getPassword(this.userID)){
            //     var res=this.userDetails.validateUser(this.userID,this.password); 
            //     console.log("login_first_call = "+res);         
            //     if( res === "True" ){
            //     console.log("Success");
            //       this.passwordTrue=1;
            //       this.router.navigate(['/home']);
            //     }
            //    else
            //      alert("Incorrect ID or Password");
            http_1.request({
                url: "http://10.155.64.54:3000/login?userName=" + this.userID + "&password=" + this.password,
                method: "GET"
            }).then(function (response) {
                var str = response.content.toString();
                console.log("result : " + str);
                if (str === "True") {
                    console.log("Success");
                    _this.userDetails.updateDet();
                    _this.routerExtensions.navigate(["/home"], { clearHistory: true });
                }
                else
                    alert("Incorrect ID or Password");
            }, function (e) {
                console.log("Request Error : " + e);
            });
        }
        else
            alert("User Name or Password cannot be NULL");
    };
    LoginComponent.prototype.log = function () {
        if (this.userID != "" && this.password != "") {
            if (this.userID === "a" && this.password === "aa") {
                console.log("Success");
                this.userDetails.updateDet();
                this.routerExtensions.navigate(["/home"], { clearHistory: true });
            }
            else
                alert("Incorrect ID or Password");
        }
        else
            alert("User Name or Password cannot be NULL");
    };
    LoginComponent.prototype.reset = function () {
        this.userID = "";
        this.password = "";
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        dialogs.action({
            message: "Register New : ",
            cancelButtonText: "Cancel",
            actions: ["Admin", "User"]
        }).then(function (result) {
            if (result == "Admin") {
                _this.routerExtensions.navigate(["/register/admin"], { clearHistory: true });
            }
            else if (result == "User") {
                _this.routerExtensions.navigate(["/register/user"], { clearHistory: true });
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router, user_details_1.UserDetails, router_2.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3QztBQUd4QywrQ0FBeUM7QUFDekMsc0RBQStEO0FBQy9ELDhDQUF1RjtBQUN2RixxREFBdUQ7QUFDdkQsc0RBQWlEO0FBU2pEO0lBU0Esc0RBQXNEO0lBQ3RELGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixJQUFJO0lBQ0osc0JBQXNCO0lBQ3RCLGdEQUFnRDtJQUNoRCw4Q0FBOEM7SUFDOUMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxJQUFJO0lBR0Esd0JBQW9CLE9BQWMsRUFBUyxXQUF1QixFQUFTLGdCQUFrQztRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBdEJ2RyxpQkFBWSxHQUFDLENBQUMsQ0FBQztRQXVCakIsSUFBSSxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxD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QWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2hGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOUdRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBeUI4QixlQUFNLEVBQXFCLDBCQUFXLEVBQTJCLHlCQUFnQjtPQXZCcEcsY0FBYyxDQWdIMUI7SUFBRCxxQkFBQztDQUFBLEFBaEhELElBZ0hDO0FBaEhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7ICBcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHtVc2VyRGV0YWlsc30gZnJvbVwiLi91c2VyLmRldGFpbHNcIlxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7IFxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQge3NjcmVlbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjsgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBwYXNzd29yZFRydWU9MDsgXG4gIHByaXZhdGUgdXNlcklEOlN0cmluZztcbiAgcHJpdmF0ZSBwYXNzd29yZDpTdHJpbmc7XG4gIHByaXZhdGUgcm91dGVyOlJvdXRlcjtcbiAgcHJpdmF0ZSBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7IFxuICBwcml2YXRlIGhlaWdodDphbnk7XG4gIHByaXZhdGUgd2lkdGg6YW55O1xuXG4vLyAgaW1wb3J0IHtzY3JlZW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7IFxuLy8gICAgIGhlaWdodDphbnk7XG4vLyAgICAgd2lkdGg6YW55O1xuLy8gY29uc3RydWN0b3IoKXtcbi8vICAgdGhpcy5nZXREaW1lbnNpb24oKTtcbi8vIH1cbi8vIGdldERpbWVuc2lvbiggKSB7ICBcbi8vICAgdGhpcy5oZWlnaHQ9c2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzO1xuLy8gICB0aGlzLndpZHRoPXNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuLy8gICAgIGNvbnNvbGUubG9nKCB0aGlzLmhlaWdodCk7IFxuLy8gICAgIGNvbnNvbGUubG9nKCB0aGlzLndpZHRoKTsgXG4vLyB9XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIscHJpdmF0ZSB1c2VyRGV0YWlsczpVc2VyRGV0YWlscyxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpeyBcbiAgICAgICAgdGhpcy5yb3V0ZXI9X3JvdXRlcjsgXG4gICAgICAgIHRoaXMuZ2V0RGltZW5zaW9uKCk7XG4gICAgfSBcbiBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VySUQ9XCJcIjtcbiAgICAgICAgdGhpcy5wYXNzd29yZD1cIlwiOyBcbiAgICB9XG4gXG4gICAgZ2V0RGltZW5zaW9uKCApIHsgIFxuICAgICAgdGhpcy5oZWlnaHQ9c2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzO1xuICAgICAgdGhpcy53aWR0aD1zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuaGVpZ2h0KTsgXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLndpZHRoKTsgXG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudXNlcklEIT1cIlwiICYmIHRoaXMucGFzc3dvcmQhPVwiXCIpe1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnVzZXJEZXRhaWxzLmdldFVzZXIodGhpcy51c2VySUQpO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJJRD0gXCIrdGhpcy51c2VySUQrXCIgcGFzcz1cIit0aGlzLnBhc3N3b3JkKTsgICBcbiAgICAgICAgLy8gICAgIC8vIGlmKCB0aGlzLnBhc3N3b3JkID09IHRoaXMudXNlckRldGFpbHMuZ2V0UGFzc3dvcmQodGhpcy51c2VySUQpKXtcbiAgICAgICAgLy8gICAgIHZhciByZXM9dGhpcy51c2VyRGV0YWlscy52YWxpZGF0ZVVzZXIodGhpcy51c2VySUQsdGhpcy5wYXNzd29yZCk7IFxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJsb2dpbl9maXJzdF9jYWxsID0gXCIrcmVzKTsgICAgICAgICBcbiAgICAgICAgLy8gICAgIGlmKCByZXMgPT09IFwiVHJ1ZVwiICl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7XG4gICAgICAgIC8vICAgICAgIHRoaXMucGFzc3dvcmRUcnVlPTE7XG4gICAgICAgIC8vICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgIGVsc2VcbiAgICAgICAgLy8gICAgICBhbGVydChcIkluY29ycmVjdCBJRCBvciBQYXNzd29yZFwiKTtcblxuICAgICAgICAgICAgcmVxdWVzdCh7IFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly8xMC4xNTUuNjQuNTQ6MzAwMC9sb2dpbj91c2VyTmFtZT0ke3RoaXMudXNlcklEfSZwYXNzd29yZD0ke3RoaXMucGFzc3dvcmR9YCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHsgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gcmVzcG9uc2UuY29udGVudC50b1N0cmluZygpOyAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitzdHIpO1xuICAgICAgICAgICAgICAgIGlmKHN0cj09PSBcIlRydWVcIilcbiAgICAgICAgICAgICAgICB7IGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRldGFpbHMudXBkYXRlRGV0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmNvcnJlY3QgSUQgb3IgUGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgfSwgKGUpID0+IHtjb25zb2xlLmxvZyhcIlJlcXVlc3QgRXJyb3IgOiBcIitlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICBhbGVydChcIlVzZXIgTmFtZSBvciBQYXNzd29yZCBjYW5ub3QgYmUgTlVMTFwiKTsgXG4gICAgfVxuXG4gICAgbG9nKCl7XG4gICAgICAgIGlmKHRoaXMudXNlcklEIT1cIlwiICYmIHRoaXMucGFzc3dvcmQhPVwiXCIpeyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXNlcklEPT09IFwiYVwiICYmIHRoaXMucGFzc3dvcmQ9PT1cImFhXCIpXG4gICAgICAgICAgICAgICAgeyBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEZXRhaWxzLnVwZGF0ZURldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5jb3JyZWN0IElEIG9yIFBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGFsZXJ0KFwiVXNlciBOYW1lIG9yIFBhc3N3b3JkIGNhbm5vdCBiZSBOVUxMXCIpOyBcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VySUQgPSBcIlwiO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gXCJcIjtcbiAgICB9XG5cbiAgICByZWdpc3Rlcigpe1xuICAgICAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIlJlZ2lzdGVyIE5ldyA6IFwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkFkbWluXCIsIFwiVXNlclwiXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7IFxuICAgICAgICAgICAgaWYocmVzdWx0ID09IFwiQWRtaW5cIil7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3JlZ2lzdGVyL2FkbWluXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PSBcIlVzZXJcIil7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3JlZ2lzdGVyL3VzZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==