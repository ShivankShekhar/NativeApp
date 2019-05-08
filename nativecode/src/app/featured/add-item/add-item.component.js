"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Camera = require("nativescript-camera");
var ImageSource = require("tns-core-modules/image-source");
var http_1 = require("tns-core-modules/http");
// import { Http, Headers, Response, RequestOptions } from "@angular/http";
var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.isImage = false;
        this.prodID = null;
        this.prodName = "";
        this.prodDesc = "";
        // this.images = [] ; 
        this.pic = "https://placehold.it/200x200";
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.back = function () {
        this.routerExtensions.back();
    };
    AddItemComponent.prototype.capture = function () {
        var _this = this;
        // this.database.createDocument({
        //     "type": "image",
        //     "image": base64,
        //     "timestamp": (new Date()).getTime()
        // });    
        Camera.requestPermissions();
        Camera.takePicture({ width: 150, height: 150, keepAspectRatio: true, saveToGallery: false })
            .then(function (imageAsset) {
            // this.images.push(imageAsset);
            _this.pic = imageAsset;
            ImageSource.fromAsset(imageAsset)
                .then(function (res) {
                _this.base64 = res.toBase64String("jpg", 100);
                _this.isImage = true;
                console.log(_this.base64);
            });
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    AddItemComponent.prototype.upload = function () {
        var productItemNo = this.prodID;
        var productName = this.prodName;
        var ImageSource = this.base64;
        var Description = this.prodDesc;
        console.log(productItemNo + " name : " + productName);
    };
    AddItemComponent.prototype.onButtonTap = function () {
        var _this = this;
        http_1.request({
            url: "http://10.155.64.54:3000/product",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            content: JSON.stringify({
                "productItemNo": this.prodID,
                "productName": this.prodName,
                // "ImageSource"  : this.base64,//this.pic,
                "Description": this.prodDesc
            })
        }).then(function (response) {
            if (response) {
                alert('Successfull');
                _this.routerExtensions.navigate(["/featured"]);
            }
        }, function (e) {
            console.log("Request Error : " + e);
        });
    };
    AddItemComponent = __decorate([
        core_1.Component({
            selector: 'ns-add-item',
            templateUrl: './add-item.component.html',
            styleUrls: ['./add-item.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AddItemComponent);
    return AddItemComponent;
}());
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUMvRCw0Q0FBOEM7QUFDOUMsMkRBQTZEO0FBRTdELDhDQUF1RjtBQUd2RiwyRUFBMkU7QUFTM0U7SUFVSSwwQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsWUFBTyxHQUFTLEtBQUssQ0FBQztRQU9sQixJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztRQUNqQixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxrQ0FBTyxHQUFkO1FBQUEsaUJBc0JDO1FBckJXLGlDQUFpQztRQUNqQyx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLDBDQUEwQztRQUMxQyxVQUFVO1FBQ2QsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFeEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUN2RixJQUFJLENBQUMsVUFBQSxVQUFVO1lBQ1osZ0NBQWdDO1lBQ2hDLEtBQUksQ0FBQyxHQUFHLEdBQUMsVUFBVSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2lCQUM1QixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUVMLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ1EsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNuQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQy9CLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDN0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBQyxVQUFVLEdBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLHNDQUFXLEdBQWxCO1FBQUEsaUJBc0JDO1FBckJHLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSxrQ0FBa0M7WUFDdkMsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLGtCQUFrQjthQUNqQztZQUNELE9BQU8sRUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNILGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDNUIsYUFBYSxFQUFJLElBQUksQ0FBQyxRQUFRO2dCQUM5QiwyQ0FBMkM7Z0JBQzNDLGFBQWEsRUFBSSxJQUFJLENBQUMsUUFBUTthQUNqQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWE7WUFDbEIsSUFBRyxRQUFRLEVBQ0g7Z0JBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNyRDtRQUNMLENBQUMsRUFBRSxVQUFDLENBQUM7WUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhGUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBWXdDLHlCQUFnQjtPQVY3QyxnQkFBZ0IsQ0FrRjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCAqIGFzIFBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7ICBcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiOyAgXG5cbi8vIGltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFkZC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcblxuZXhwb3J0IGNsYXNzIEFkZEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy8gICBwcml2YXRlIGltYWdlczogQXJyYXk8YW55PjsgXG4gICAgcHJpdmF0ZSBwaWM6YW55O1xuICAgIGlzSW1hZ2U6Ym9vbGVhbj1mYWxzZTtcbiAgICBwcml2YXRlIHByb2RJRDpudW1iZXI7XG4gICAgcHJpdmF0ZSBwcm9kTmFtZTpTdHJpbmc7XG4gICAgcHJpdmF0ZSBwcm9kRGVzYzpTdHJpbmc7IFxuICAgIHByaXZhdGUgYmFzZTY0OlN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyBcbiAgICAgICAgdGhpcy5wcm9kSUQ9bnVsbDtcbiAgICAgICAgdGhpcy5wcm9kTmFtZT1cIlwiO1xuICAgICAgICB0aGlzLnByb2REZXNjPVwiXCI7XG4gICAgICAgIC8vIHRoaXMuaW1hZ2VzID0gW10gOyBcbiAgICAgICAgdGhpcy5waWMgPSBcImh0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgyMDBcIjsgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgYmFjaygpe1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXB0dXJlKCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgIC8vICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgIC8vICAgICBcImltYWdlXCI6IGJhc2U2NCxcbiAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aW1lc3RhbXBcIjogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgIC8vIH0pOyAgICBcbiAgICAgICAgICAgIENhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBDYW1lcmEudGFrZVBpY3R1cmUoeyB3aWR0aDogMTUwLCBoZWlnaHQ6IDE1MCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihpbWFnZUFzc2V0ID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmltYWdlcy5wdXNoKGltYWdlQXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWM9aW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlU291cmNlLmZyb21Bc3NldChpbWFnZUFzc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2U2NCA9IHJlcy50b0Jhc2U2NFN0cmluZyhcImpwZ1wiLCAxMDApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ltYWdlPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFzZTY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pOyBcbiAgICB9IFxuXG4gICAgcHVibGljIHVwbG9hZCgpe1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RJdGVtTm8gPSB0aGlzLnByb2RJRFxuICAgICAgICB2YXIgcHJvZHVjdE5hbWUgPSB0aGlzLnByb2ROYW1lXG4gICAgICAgIHZhciBJbWFnZVNvdXJjZSA9IHRoaXMuYmFzZTY0XG4gICAgICAgIHZhciBEZXNjcmlwdGlvbiA9IHRoaXMucHJvZERlc2MgICAgICAgICAgXG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdEl0ZW1ObytcIiBuYW1lIDogXCIrcHJvZHVjdE5hbWUpOyBcbiAgICB9XG5cbiAgICBwdWJsaWMgb25CdXR0b25UYXAoKXsgICAgICAgICAgIFxuICAgICAgICByZXF1ZXN0KHsgXG4gICAgICAgICAgICB1cmw6IGBodHRwOi8vMTAuMTU1LjY0LjU0OjMwMDAvcHJvZHVjdGAsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudCA6ICBcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdEl0ZW1Ob1wiOiB0aGlzLnByb2RJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdE5hbWVcIiAgOiB0aGlzLnByb2ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJJbWFnZVNvdXJjZVwiICA6IHRoaXMuYmFzZTY0LC8vdGhpcy5waWMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlc2NyaXB0aW9uXCIgIDogdGhpcy5wcm9kRGVzYyBcbiAgICAgICAgICAgICAgICAgICAgfSkgXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3VjY2Vzc2Z1bGwnKTsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9mZWF0dXJlZFwiXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGUpID0+IHtjb25zb2xlLmxvZyhcIlJlcXVlc3QgRXJyb3IgOiBcIitlKTtcbiAgICAgICAgfSk7ICBcbiAgICB9IFxuXG59XG4iXX0=