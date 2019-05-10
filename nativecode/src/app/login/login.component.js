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
    LoginComponent.prototype.forgot = function () {
        this.routerExtensions.navigate(["/forgot"], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3QztBQUd4QywrQ0FBeUM7QUFDekMsc0RBQStEO0FBQy9ELDhDQUF1RjtBQUN2RixxREFBdUQ7QUFDdkQsc0RBQWlEO0FBV2pEO0lBU0Esc0RBQXNEO0lBQ3RELGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixJQUFJO0lBQ0osc0JBQXNCO0lBQ3RCLGdEQUFnRDtJQUNoRCw4Q0FBOEM7SUFDOUMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxJQUFJO0lBR0Esd0JBQW9CLE9BQWMsRUFBUyxXQUF1QixFQUFTLGdCQUFrQztRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBdEJ2RyxpQkFBWSxHQUFDLENBQUMsQ0FBQztRQXVCakIsSUFBSSxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQUEsaUJBbUNDO1FBbENHLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBRSxFQUFFLElBQUksSUFB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Q3BCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDaEY7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoSFEsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0F5QjhCLGVBQU0sRUFBcUIsMEJBQVcsRUFBMkIseUJBQWdCO09BdkJwRyxjQUFjLENBa0gxQjtJQUFELHFCQUFDO0NBQUEsQUFsSEQsSUFrSEM7QUFsSFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjsgIFxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQge1VzZXJEZXRhaWxzfSBmcm9tXCIuL3VzZXIuZGV0YWlsc1wiXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjsgXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7c2NyZWVufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiOyBcbmltcG9ydCB7cHJvbXB0LFByb21wdFJlc3VsdCxQcm9tcHRPcHRpb25zLGlucHV0VHlwZSxjYXBpdGFsaXphdGlvblR5cGV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcGFzc3dvcmRUcnVlPTA7IFxuICBwcml2YXRlIHVzZXJJRDpTdHJpbmc7XG4gIHByaXZhdGUgcGFzc3dvcmQ6U3RyaW5nO1xuICBwcml2YXRlIHJvdXRlcjpSb3V0ZXI7XG4gIHByaXZhdGUgX2FjdGl2YXRlZFVybDogc3RyaW5nOyBcbiAgcHJpdmF0ZSBoZWlnaHQ6YW55O1xuICBwcml2YXRlIHdpZHRoOmFueTtcblxuLy8gIGltcG9ydCB7c2NyZWVufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiOyBcbi8vICAgICBoZWlnaHQ6YW55O1xuLy8gICAgIHdpZHRoOmFueTtcbi8vIGNvbnN0cnVjdG9yKCl7XG4vLyAgIHRoaXMuZ2V0RGltZW5zaW9uKCk7XG4vLyB9XG4vLyBnZXREaW1lbnNpb24oICkgeyAgXG4vLyAgIHRoaXMuaGVpZ2h0PXNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcbi8vICAgdGhpcy53aWR0aD1zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcbi8vICAgICBjb25zb2xlLmxvZyggdGhpcy5oZWlnaHQpOyBcbi8vICAgICBjb25zb2xlLmxvZyggdGhpcy53aWR0aCk7IFxuLy8gfVxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLHByaXZhdGUgdXNlckRldGFpbHM6VXNlckRldGFpbHMscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKXsgXG4gICAgICAgIHRoaXMucm91dGVyPV9yb3V0ZXI7IFxuICAgICAgICB0aGlzLmdldERpbWVuc2lvbigpO1xuICAgIH0gXG4gXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlcklEPVwiXCI7XG4gICAgICAgIHRoaXMucGFzc3dvcmQ9XCJcIjsgXG4gICAgfVxuIFxuICAgIGdldERpbWVuc2lvbiggKSB7ICBcbiAgICAgIHRoaXMuaGVpZ2h0PXNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcbiAgICAgIHRoaXMud2lkdGg9c2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudXNlcklEIT1cIlwiICYmIHRoaXMucGFzc3dvcmQhPVwiXCIpe1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnVzZXJEZXRhaWxzLmdldFVzZXIodGhpcy51c2VySUQpO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJJRD0gXCIrdGhpcy51c2VySUQrXCIgcGFzcz1cIit0aGlzLnBhc3N3b3JkKTsgICBcbiAgICAgICAgLy8gICAgIC8vIGlmKCB0aGlzLnBhc3N3b3JkID09IHRoaXMudXNlckRldGFpbHMuZ2V0UGFzc3dvcmQodGhpcy51c2VySUQpKXtcbiAgICAgICAgLy8gICAgIHZhciByZXM9dGhpcy51c2VyRGV0YWlscy52YWxpZGF0ZVVzZXIodGhpcy51c2VySUQsdGhpcy5wYXNzd29yZCk7IFxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJsb2dpbl9maXJzdF9jYWxsID0gXCIrcmVzKTsgICAgICAgICBcbiAgICAgICAgLy8gICAgIGlmKCByZXMgPT09IFwiVHJ1ZVwiICl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7XG4gICAgICAgIC8vICAgICAgIHRoaXMucGFzc3dvcmRUcnVlPTE7XG4gICAgICAgIC8vICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgIGVsc2VcbiAgICAgICAgLy8gICAgICBhbGVydChcIkluY29ycmVjdCBJRCBvciBQYXNzd29yZFwiKTtcblxuICAgICAgICAgICAgcmVxdWVzdCh7IFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly8xMC4xNTUuNjQuNTQ6MzAwMC9sb2dpbj91c2VyTmFtZT0ke3RoaXMudXNlcklEfSZwYXNzd29yZD0ke3RoaXMucGFzc3dvcmR9YCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHsgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gcmVzcG9uc2UuY29udGVudC50b1N0cmluZygpOyAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgOiBcIitzdHIpO1xuICAgICAgICAgICAgICAgIGlmKHN0cj09PSBcIlRydWVcIilcbiAgICAgICAgICAgICAgICB7IGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRldGFpbHMudXBkYXRlRGV0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmNvcnJlY3QgSUQgb3IgUGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgfSwgKGUpID0+IHtjb25zb2xlLmxvZyhcIlJlcXVlc3QgRXJyb3IgOiBcIitlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICBhbGVydChcIlVzZXIgTmFtZSBvciBQYXNzd29yZCBjYW5ub3QgYmUgTlVMTFwiKTsgXG4gICAgfVxuXG4gICAgbG9nKCl7XG4gICAgICAgIGlmKHRoaXMudXNlcklEIT1cIlwiICYmIHRoaXMucGFzc3dvcmQhPVwiXCIpeyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXNlcklEPT09IFwiYVwiICYmIHRoaXMucGFzc3dvcmQ9PT1cImFhXCIpXG4gICAgICAgICAgICAgICAgeyBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEZXRhaWxzLnVwZGF0ZURldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5jb3JyZWN0IElEIG9yIFBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGFsZXJ0KFwiVXNlciBOYW1lIG9yIFBhc3N3b3JkIGNhbm5vdCBiZSBOVUxMXCIpOyBcbiAgICB9XG5cbiAgICBmb3Jnb3QoKXsgXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2ZvcmdvdFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlcklEID0gXCJcIjtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKXtcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJSZWdpc3RlciBOZXcgOiBcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJBZG1pblwiLCBcIlVzZXJcIl1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4geyBcbiAgICAgICAgICAgIGlmKHJlc3VsdCA9PSBcIkFkbWluXCIpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yZWdpc3Rlci9hZG1pblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQgPT0gXCJVc2VyXCIpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yZWdpc3Rlci91c2VyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=