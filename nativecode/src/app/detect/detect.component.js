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
                _this.base64 = res.toBase64String("jpg", 100);
                _this.isimg = true;
                console.log(_this.base64);
            });
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    DetectComponent.prototype.test = function () {
        // request({ 
        //       url: `http://10.155.64.54:5000/obj`,
        //       method: "GET",
        //       headers: { 
        //               "Content-Type": "application/json"
        //       },
        //       content : JSON.stringify({ 
        //               "ImageSource" : `${this.base64}`, 
        //               }) 
        //     }).then((response:any) => {
        //           if(response)
        //               {alert('Successfull');
        //               this.routerExtensions.navigate(["/login"], {clearHistory: true });}
        //             else{
        //               alert('User name already exist');
        //             }
        //       }, (e) => {console.log("Request Error : "+e);
        //     }); 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0ZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNENBQThDO0FBQzlDLDJEQUE2RDtBQUU3RCxzREFBK0Q7QUFVL0Q7SUFNRSx5QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGOUMsVUFBSyxHQUFTLEtBQUssQ0FBQztRQUcxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBRTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLDhCQUE4QixDQUFDO0lBQzVDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVDLDhCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVLLGlDQUFPLEdBQWQ7UUFBQSxpQkFxQkE7UUFwQlMsaUNBQWlDO1FBQ2pDLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsMENBQTBDO1FBQzFDLFVBQVU7UUFDWCxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3ZGLElBQUksQ0FBQyxVQUFBLFVBQVU7WUFDWixnQ0FBZ0M7WUFDaEMsS0FBSSxDQUFDLEdBQUcsR0FBQyxVQUFVLENBQUM7WUFFcEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7aUJBQzVCLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ0wsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVILDhCQUFJLEdBQUo7UUFHQSxhQUFhO1FBQ2IsNkNBQTZDO1FBQzdDLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsbURBQW1EO1FBQ25ELFdBQVc7UUFDWCxvQ0FBb0M7UUFDcEMsbURBQW1EO1FBQ25ELG9CQUFvQjtRQUNwQixrQ0FBa0M7UUFFbEMseUJBQXlCO1FBQ3pCLHVDQUF1QztRQUN2QyxvRkFBb0Y7UUFDcEYsb0JBQW9CO1FBQ3BCLGtEQUFrRDtRQUNsRCxnQkFBZ0I7UUFDaEIsc0RBQXNEO1FBQ3RELFdBQVc7SUFDWCxDQUFDO0lBaEVZLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUXNDLHlCQUFnQjtPQU4zQyxlQUFlLENBbUUzQjtJQUFELHNCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCAqIGFzIFBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG4gaW1wb3J0IHsgcmVxdWVzdH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kZXRlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0ZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV0ZWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgaW1hZ2VzOiBBcnJheTxhbnk+OyBcbiAgcHJpdmF0ZSBwaWM6YW55O1xuICBwcml2YXRlIGlzaW1nOmJvb2xlYW49ZmFsc2U7XG4gIHByaXZhdGUgYmFzZTY0OmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgIHRoaXMuaW1hZ2VzID0gW10gOyBcbiAgICB0aGlzLnBpYyA9IFwiaHR0cHM6Ly9wbGFjZWhvbGQuaXQvMjAweDIwMFwiOyBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pc2ltZz1mYWxzZTtcbiAgfVxuXG4gICAgYmFjaygpe1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cblxuICAgcHVibGljIGNhcHR1cmUoKSB7ICBcbiAgICAgICAgICAgIC8vIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICAgICAgLy8gICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAvLyAgICAgXCJpbWFnZVwiOiBiYXNlNjQsXG4gICAgICAgICAgICAvLyAgICAgXCJ0aW1lc3RhbXBcIjogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgLy8gfSk7ICAgIFxuICAgICAgICAgICBDYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7ICBcbiAgICAgICAgICAgIENhbWVyYS50YWtlUGljdHVyZSh7IHdpZHRoOiAzMDAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oaW1hZ2VBc3NldCA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmltYWdlcy5wdXNoKGltYWdlQXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpYz1pbWFnZUFzc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIEltYWdlU291cmNlLmZyb21Bc3NldChpbWFnZUFzc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2U2NCA9IHJlcy50b0Jhc2U2NFN0cmluZyhcImpwZ1wiLCAxMDApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzaW1nPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXNlNjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gIH0gXG5cbnRlc3QoKXtcblxuXG4vLyByZXF1ZXN0KHsgXG4vLyAgICAgICB1cmw6IGBodHRwOi8vMTAuMTU1LjY0LjU0OjUwMDAvb2JqYCxcbi8vICAgICAgIG1ldGhvZDogXCJHRVRcIixcbi8vICAgICAgIGhlYWRlcnM6IHsgXG4vLyAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4vLyAgICAgICB9LFxuLy8gICAgICAgY29udGVudCA6IEpTT04uc3RyaW5naWZ5KHsgXG4vLyAgICAgICAgICAgICAgIFwiSW1hZ2VTb3VyY2VcIiA6IGAke3RoaXMuYmFzZTY0fWAsIFxuLy8gICAgICAgICAgICAgICB9KSBcbi8vICAgICB9KS50aGVuKChyZXNwb25zZTphbnkpID0+IHtcbiAgICAgIFxuLy8gICAgICAgICAgIGlmKHJlc3BvbnNlKVxuLy8gICAgICAgICAgICAgICB7YWxlcnQoJ1N1Y2Nlc3NmdWxsJyk7XG4vLyAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHtjbGVhckhpc3Rvcnk6IHRydWUgfSk7fVxuLy8gICAgICAgICAgICAgZWxzZXtcbi8vICAgICAgICAgICAgICAgYWxlcnQoJ1VzZXIgbmFtZSBhbHJlYWR5IGV4aXN0Jyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICB9LCAoZSkgPT4ge2NvbnNvbGUubG9nKFwiUmVxdWVzdCBFcnJvciA6IFwiK2UpO1xuLy8gICAgIH0pOyBcbn1cblxuXG59XG4iXX0=