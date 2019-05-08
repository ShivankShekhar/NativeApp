"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var app = require("tns-core-modules/application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.onScan = function () {
        var _this = this;
        try {
            this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                showFlipCameraButton: false,
                preferFrontCamera: false,
                showTorchButton: true,
                beepOnScan: true,
                torchOn: false,
                resultDisplayDuration: 200,
            }).then(function (result) {
                // this.data= result;
                setTimeout(function () {
                    _this.showalert(result);
                }, 0);
            })
                .catch(function (err) {
                console.log('Error', err);
            });
        }
        catch (er) {
            console.log(er);
        }
    };
    HomeComponent.prototype.showalert = function (data) {
        alert({
            title: "Scan Result",
            message: "Format: " + data.format + ",\nContent:\n " + data.text,
            okButtonText: "OK"
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            //  styleUrls:["~/app/app.component.css"],
            styleUrls: ['./home.component.css'],
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwyRUFBNkQ7QUFLN0Qsa0RBQW9EO0FBVXBEO0lBR1EsdUJBQVksY0FBNkI7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBQyxjQUFjLENBQUM7SUFFdkMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFBQSxpQkF1QkM7UUF0QkcsSUFBRztZQUNLLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUN6QixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixvQkFBb0IsRUFBRSxLQUFLO2dCQUMzQixpQkFBaUIsRUFBRSxLQUFLO2dCQUN4QixlQUFlLEVBQUUsSUFBSTtnQkFDckIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLHFCQUFxQixFQUFFLEdBQUc7YUFDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQ1gscUJBQXFCO2dCQUNyQixVQUFVLENBQUM7b0JBQ1AsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sRUFBRSxFQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFSixpQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLEtBQUssQ0FBQztZQUNKLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNoRSxZQUFZLEVBQUUsSUFBSTtTQUFDLENBQUMsQ0FBQztJQUUzQixDQUFDO0lBaERXLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQiwwQ0FBMEM7WUFDekMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUtpQyw0Q0FBYztPQUhwQyxhQUFhLENBaUR6QjtJQUFELG9CQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XG5cbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL2xvZ2luL3VzZXJcIjtcbmltcG9ydCB7VXNlckRldGFpbHN9IGZyb21cIi4uL2xvZ2luL3VzZXIuZGV0YWlsc1wiXG5cbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgIFxuICAgIC8vICBzdHlsZVVybHM6W1wifi9hcHAvYXBwLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgICAgIC8vIGRhdGE7XG4gICAgICAgIHByaXZhdGUgYmFyY29kZVNjYW5uZXI6QmFyY29kZVNjYW5uZXI7IFxuICAgICAgICBjb25zdHJ1Y3RvcihiYXJjb2RlU2Nhbm5lcjpCYXJjb2RlU2Nhbm5lcikge1xuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyPWJhcmNvZGVTY2FubmVyOyBcbiBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgXG4gICAgcHVibGljIG9uU2NhbigpIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcbiAgICAgICAgICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogZmFsc2UsICAgXG4gICAgICAgICAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlLCAgICAgXG4gICAgICAgICAgICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0cnVlLCAgICAgICAgXG4gICAgICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSwgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9yY2hPbjogZmFsc2UsICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiAyMDAsICBcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4geyAgIFxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0YT0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd2FsZXJ0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgMCk7ICAgICBcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiBzaG93YWxlcnQoZGF0YSl7IFxuICAgICBhbGVydCh7XG4gICAgICAgdGl0bGU6IFwiU2NhbiBSZXN1bHRcIixcbiAgICAgICBtZXNzYWdlOiBcIkZvcm1hdDogXCIgKyBkYXRhLmZvcm1hdCArIFwiLFxcbkNvbnRlbnQ6XFxuIFwiICsgZGF0YS50ZXh0LFxuICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wifSk7XG4gICAgXG4gfSAgXG59XG4iXX0=