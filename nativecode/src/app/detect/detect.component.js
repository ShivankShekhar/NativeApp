"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Camera = require("nativescript-camera");
var ImageSource = require("tns-core-modules/image-source");
var router_1 = require("nativescript-angular/router");
var DetectComponent = /** @class */ (function () {
    function DetectComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.isimg = false;
        this.images = [];
        this.pic = "https://placehold.it/200x200";
    }
    DetectComponent.prototype.ngOnInit = function () {
        this.isimg = false;
    };
    DetectComponent.prototype.back = function () {
        this.routerExtensions.back();
    };
    DetectComponent.prototype.capture = function () {
        var _this = this;
        // this.database.createDocument({
        //     "type": "image",
        //     "image": base64,
        //     "timestamp": (new Date()).getTime()
        // });    
        Camera.requestPermissions();
        Camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: false })
            .then(function (imageAsset) {
            // this.images.push(imageAsset);
            _this.pic = imageAsset;
            ImageSource.fromAsset(imageAsset)
                .then(function (res) {
                var base64 = res.toBase64String("jpg", 100);
                _this.isimg = true;
                console.log(base64);
            });
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    DetectComponent = __decorate([
        core_1.Component({
            selector: 'ns-detect',
            templateUrl: './detect.component.html',
            styleUrls: ['./detect.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], DetectComponent);
    return DetectComponent;
}());
exports.DetectComponent = DetectComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0ZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNENBQThDO0FBQzlDLDJEQUE2RDtBQUU3RCxzREFBK0Q7QUFTL0Q7SUFLRSx5QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFEOUMsVUFBSyxHQUFTLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBRTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLDhCQUE4QixDQUFDO0lBQzVDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVDLDhCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVLLGlDQUFPLEdBQWQ7UUFBQSxpQkFxQkE7UUFwQlMsaUNBQWlDO1FBQ2pDLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsMENBQTBDO1FBQzFDLFVBQVU7UUFDWCxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3ZGLElBQUksQ0FBQyxVQUFBLFVBQVU7WUFDWixnQ0FBZ0M7WUFDaEMsS0FBSSxDQUFDLEdBQUcsR0FBQyxVQUFVLENBQUM7WUFFcEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7aUJBQzVCLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ0wsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQXZDVSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU9zQyx5QkFBZ0I7T0FMM0MsZUFBZSxDQW1EM0I7SUFBRCxzQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0ICogYXMgSW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgKiBhcyBQZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kZXRlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0ZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV0ZWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgaW1hZ2VzOiBBcnJheTxhbnk+OyBcbiAgcHJpdmF0ZSBwaWM6YW55O1xuICBwcml2YXRlIGlzaW1nOmJvb2xlYW49ZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyBcbiAgICB0aGlzLmltYWdlcyA9IFtdIDsgXG4gICAgdGhpcy5waWMgPSBcImh0dHBzOi8vcGxhY2Vob2xkLml0LzIwMHgyMDBcIjsgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuaXNpbWc9ZmFsc2U7XG4gIH1cblxuICAgIGJhY2soKXtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG5cbiAgIHB1YmxpYyBjYXB0dXJlKCkgeyAgXG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFiYXNlLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgICAgICAgIC8vICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgLy8gICAgIFwiaW1hZ2VcIjogYmFzZTY0LFxuICAgICAgICAgICAgLy8gICAgIFwidGltZXN0YW1wXCI6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgIC8vIH0pOyAgICBcbiAgICAgICAgICAgQ2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpOyAgXG4gICAgICAgICAgICBDYW1lcmEudGFrZVBpY3R1cmUoeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGltYWdlQXNzZXQgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMucHVzaChpbWFnZUFzc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWM9aW1hZ2VBc3NldDtcblxuICAgICAgICAgICAgICAgICAgICBJbWFnZVNvdXJjZS5mcm9tQXNzZXQoaW1hZ2VBc3NldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2U2NCA9IHJlcy50b0Jhc2U2NFN0cmluZyhcImpwZ1wiLCAxMDApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzaW1nPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFzZTY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikgeyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSk7IFxuICB9IFxuXG5cbiAgICAvLyBhbmRyb2lkIDphbnk7XG4gICAgLy8gcHVibGljIGdldENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgLy8gICAgIFBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKHRoaXMuYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLkNBTUVSQSwgXCJOZWVkZWQgZm9yIGNvbm5lY3Rpdml0eSBzdGF0dXNcIikudGhlbigoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gZ3JhbnRlZCFcIik7XG4gICAgLy8gICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzc2lvbiBpcyBub3QgZ3JhbnRlZCAoc2FkZmFjZSlcIik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxufVxuIl19