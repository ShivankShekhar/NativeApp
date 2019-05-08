"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//  import { Directions } from "nativescript-directions";
var MapComponent = /** @class */ (function () {
    function MapComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.back = function () {
        this.routerExtensions.back();
    };
    MapComponent.prototype.onMapReady = function (event) {
        var map = event.object;
        map.addMarkers([{
                id: 1,
                latitude: 37.97,
                longitude: 21.4252,
                title: "Tracy, CA",
                description: "The best place in California!",
                draggable: true,
                onTap: function (marker) {
                    var updatedMarker = Object.assign({}, marker, {
                        selected: !marker.selected
                    });
                    map.updateMarker(updatedMarker);
                }
            }]);
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'ns-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFaEQsc0RBQStEO0FBQy9ELHlEQUF5RDtBQU8zRDtJQUVFLHNCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFFQywyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRSxpQ0FBVSxHQUFqQixVQUFrQixLQUFLO1FBQ2YsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN6QixHQUFHLENBQUMsVUFBVSxDQUFlLENBQUM7Z0JBQzFCLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixLQUFLLEVBQUUsV0FBVztnQkFDbEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLFVBQUMsTUFBTTtvQkFDVixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUU7d0JBQzVDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRO3FCQUM3QixDQUFDLENBQUM7b0JBQ0gsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQzthQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQTNCWSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUdzQyx5QkFBZ0I7T0FGM0MsWUFBWSxDQXlEeEI7SUFBRCxtQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAgaW1wb3J0IHsgSGVyZU1hcmtlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1oZXJlJztcbiAgaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbiAgLy8gIGltcG9ydCB7IERpcmVjdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRpcmVjdGlvbnNcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXAuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAgIGJhY2soKXtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG5cbnB1YmxpYyBvbk1hcFJlYWR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IGV2ZW50Lm9iamVjdDtcbiAgICAgICAgbWFwLmFkZE1hcmtlcnMoPEhlcmVNYXJrZXJbXT5be1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBsYXRpdHVkZTogMzcuOTcsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDIxLjQyNTIsXG4gICAgICAgICAgICB0aXRsZTogXCJUcmFjeSwgQ0FcIiwgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYmVzdCBwbGFjZSBpbiBDYWxpZm9ybmlhIVwiLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgb25UYXA6IChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTWFya2VyID0gT2JqZWN0LmFzc2lnbih7fSwgbWFya2VyLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAhbWFya2VyLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbWFwLnVwZGF0ZU1hcmtlcih1cGRhdGVkTWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xufVxuXG4vLyBkaXJlY3Rpb25zID0gbmV3IERpcmVjdGlvbnMoKTtcbi8vIGRpcigpeyAgXG4vLyAgICAgICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4vLyAgICAgICAgIGZyb206IHsgLy8gb3B0aW9uYWwsIGRlZmF1bHQgJ2N1cnJlbnQgbG9jYXRpb24nXG4vLyAgICAgICAgICAgICBsYXQ6IDUyLjIxNTk4Nyxcbi8vICAgICAgICAgICAgIGxuZzogNS4yODI3NjRcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgdG86IFt7IC8vIGlmIGFuIEFycmF5IGlzIHBhc3NlZCAoYXMgaW4gdGhpcyBleGFtcGxlKSwgdGhlIGxhc3QgaXRlbSBpcyB0aGUgZGVzdGluYXRpb24sIHRoZSBhZGRyZXNzZXMgaW4gYmV0d2VlbiBhcmUgJ3dheXBvaW50cycuXG4vLyAgICAgICAgICAgICBsYXQ6IDUyLjIxOTg3LFxuLy8gICAgICAgICAgICAgbG5nOiA1LjE4Mjc2NFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC8vICxcbi8vICAgICAgICAgLy8ge1xuLy8gICAgICAgICAvLyAgICAgYWRkcmVzczogXCJBYWsgOTgsIFdpZXJpbmdlcndlcmYsIE5ldGhlcmxhbmRzXCJcbi8vICAgICAgICAgLy8gfVxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICB0eXBlOiBcImRyaXZpbmdcIiwgLy8gb3B0aW9uYWwsIGNhbiBiZTogZHJpdmluZywgdHJhbnNpdCwgYmljeWNsaW5nIG9yIHdhbGtpbmdcbi8vICAgICAgICAgLy8gICBpb3M6IHtcbi8vICAgICAgICAgLy8gICAgIHByZWZlckdvb2dsZU1hcHM6IHRydWUsIC8vIElmIHRoZSBHb29nbGUgTWFwcyBhcHAgaXMgaW5zdGFsbGVkLCB1c2UgdGhhdCBvbmUgaW5zdGVhZCBvZiBBcHBsZSBNYXBzLCBiZWNhdXNlIGl0IHN1cHBvcnRzIHdheXBvaW50cy4gRGVmYXVsdCB0cnVlLlxuLy8gICAgICAgICAvLyAgICAgYWxsb3dHb29nbGVNYXBzV2ViOiB0cnVlIC8vIElmIHdheXBvaW50cyBhcmUgcGFzc2VkIGluIGFuZCBHb29nbGUgTWFwcyBpcyBub3QgaW5zdGFsbGVkLCB5b3UgY2FuIGVpdGhlciBvcGVuIEFwcGxlIE1hcHMgYW5kIHRoZSBmaXJzdCB3YXlwb2ludCBpcyB1c2VkIGFzIHRoZSB0by1hZGRyZXNzICh0aGUgcmVzdCBpcyBpZ25vcmVkKSwgb3IgeW91IGNhbiBvcGVuIEdvb2dsZSBNYXBzIG9uIHdlYiBzbyBhbGwgd2F5cG9pbnRzIGFyZSBzaG93biAoc2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSkuIERlZmF1bHQgZmFsc2UuXG4vLyAgICAgICAgIC8vICAgfVxuLy8gICAgICAgICB9KS50aGVuKCgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuLy8gICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICAgICAgICAgIH0pOyBcbi8vIH1cblxufVxuIl19