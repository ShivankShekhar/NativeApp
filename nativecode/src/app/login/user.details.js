"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("tns-core-modules/http");
var UserDetails = /** @class */ (function () {
    function UserDetails() {
        this.user = { user_ID: "", password: "" };
        this.email = "";
    }
    UserDetails.prototype.createConn = function (user, password) {
        http_1.request({
            url: "http://10.155.64.54:3000/login?userName=" + user + "&password=" + password,
            method: "GET"
        }).then(function (response) {
            response.content.toString().then(function (str) {
                console.log("api call" + str);
                return str;
            });
        }, function (e) {
            console.log("Request Error : " + e);
        });
    };
    UserDetails.prototype.validateUser = function (username, password) {
        //  this.createConn(username,password).then((result) => {   
        //         setTimeout(()=>{
        //             console.log("inside: " +result);
        //             return result;
        //         }, );     
        //     }) 
        //     .catch(err => {
        //         console.log('Error', err);
        //     }); 
        // this.createConn(username,password).then((result) => {   
        //     setTimeout(() =>{
        //         console.log("inside: " +result);
        //         return result;
        //     }, 0);     
        // }) 
        // .catch(err => {
        //     console.log('Error', err);
        // });  
        var r = this.createConn(username, password);
        console.log("inside: " + r);
        return r;
    };
    UserDetails.prototype.getUser = function () {
        return this.user.user_ID;
    };
    UserDetails.prototype.updateDet = function () {
        this.user.user_ID = "a";
        this.user.password = "ac";
        this.email = "abc@gmail.com";
    };
    UserDetails.prototype.logout = function () {
        this.user.user_ID = "";
        this.user.password = "";
        this.email = "";
    };
    UserDetails.prototype.getEmail = function () {
        return this.email;
    };
    UserDetails.prototype.getPassword = function (user_ID) {
        if (user_ID == this.user.user_ID)
            return this.user.password;
    };
    UserDetails.prototype.updateUser = function (user, password) {
    };
    UserDetails = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], UserDetails);
    return UserDetails;
}());
exports.UserDetails = UserDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5kZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDhDQUF1RjtBQVF2RjtJQUpBO1FBTVksU0FBSSxHQUFPLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUM7UUFDcEMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQW9FNUIsQ0FBQztJQW5FRyxnQ0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFDLFFBQWU7UUFDbkMsY0FBTyxDQUFDO1lBQ0osR0FBRyxFQUFFLDZDQUEyQyxJQUFJLGtCQUFhLFFBQVU7WUFDM0UsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWE7WUFDbEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQTtRQUNGLENBQUMsRUFBRSxVQUFDLENBQUM7WUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxRQUFlLEVBQUMsUUFBZTtRQUV4Qyw0REFBNEQ7UUFDNUQsMkJBQTJCO1FBQzNCLCtDQUErQztRQUMvQyw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIscUNBQXFDO1FBQ3JDLFdBQVc7UUFHUCwyREFBMkQ7UUFDM0Qsd0JBQXdCO1FBQ3hCLDJDQUEyQztRQUMzQyx5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLFFBQVE7UUFDWixJQUFJLENBQUMsR0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsQ0FBQTtJQUNaLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBQyxlQUFlLENBQUM7SUFDL0IsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksT0FBYztRQUN0QixJQUFHLE9BQU8sSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVcsRUFBQyxRQUFlO0lBQ3RDLENBQUM7SUF0RVEsV0FBVztRQUp2QixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztPQUVXLFdBQVcsQ0F1RXZCO0lBQUQsa0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztBQXZFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiOyBcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlsc3tcclxuXHJcbiAgICBwcml2YXRlIHVzZXI6IFVzZXI9e3VzZXJfSUQ6XCJcIixwYXNzd29yZDpcIlwifTtcclxuICAgIHByaXZhdGUgZW1haWw6c3RyaW5nPVwiXCI7XHJcbiAgICBjcmVhdGVDb25uKHVzZXI6IFN0cmluZyxwYXNzd29yZDpTdHJpbmcpIDogYW55IHsgXHJcbiAgICAgICAgcmVxdWVzdCh7IFxyXG4gICAgICAgICAgICB1cmw6IGBodHRwOi8vMTAuMTU1LjY0LjU0OjMwMDAvbG9naW4/dXNlck5hbWU9JHt1c2VyfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHsgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmNvbnRlbnQudG9TdHJpbmcoKS50aGVuKChzdHIpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwaSBjYWxsXCIrc3RyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9LCAoZSkgPT4ge2NvbnNvbGUubG9nKFwiUmVxdWVzdCBFcnJvciA6IFwiK2UpO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVVc2VyKHVzZXJuYW1lOlN0cmluZyxwYXNzd29yZDpTdHJpbmcpIDphbnkgeyAgXHJcbiBcclxuICAgICAgICAvLyAgdGhpcy5jcmVhdGVDb25uKHVzZXJuYW1lLHBhc3N3b3JkKS50aGVuKChyZXN1bHQpID0+IHsgICBcclxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZTogXCIgK3Jlc3VsdCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAvLyAgICAgICAgIH0sICk7ICAgICBcclxuICAgICAgICAvLyAgICAgfSkgXHJcbiAgICAgICAgLy8gICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuICAgICAgICAvLyAgICAgfSk7IFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlQ29ubih1c2VybmFtZSxwYXNzd29yZCkudGhlbigocmVzdWx0KSA9PiB7ICAgXHJcbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlOiBcIiArcmVzdWx0KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAvLyAgICAgfSwgMCk7ICAgICBcclxuICAgICAgICAgICAgLy8gfSkgXHJcbiAgICAgICAgICAgIC8vIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuICAgICAgICAgICAgLy8gfSk7ICBcclxuICAgICAgICB2YXIgcj0gdGhpcy5jcmVhdGVDb25uKHVzZXJuYW1lLHBhc3N3b3JkKTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGU6IFwiICsgcik7XHJcbiAgICAgICAgcmV0dXJuIHJcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyKCk6YW55IHsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlci51c2VyX0lEO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURldCgpe1xyXG4gICAgICAgIHRoaXMudXNlci51c2VyX0lEPVwiYVwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZD1cImFjXCI7XHJcbiAgICAgICAgdGhpcy5lbWFpbD1cImFiY0BnbWFpbC5jb21cIjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICB0aGlzLnVzZXIudXNlcl9JRD1cIlwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZD1cIlwiO1xyXG4gICAgICAgIHRoaXMuZW1haWw9XCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbWFpbCgpOmFueSB7IFxyXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3N3b3JkKHVzZXJfSUQ6U3RyaW5nKTpTdHJpbmd7XHJcbiAgICAgICAgaWYodXNlcl9JRD09dGhpcy51c2VyLnVzZXJfSUQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIucGFzc3dvcmQ7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXIodXNlcjpTdHJpbmcscGFzc3dvcmQ6U3RyaW5nKXsgXHJcbiAgICB9XHJcbn0iXX0=