"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    // private products:Array<Prod>=[];
    function ProductService() {
        this.products = new Array({ product_item_no: 1, product_name: "Fuel Pumps", description: "", ImageSrc: "~/app/images/fuel.png" }, { product_item_no: 2, product_name: "Steel Pipes", description: "", ImageSrc: "~/app/images/steelpipes.png" }, { product_item_no: 3, product_name: "Nut Bolts", description: "", ImageSrc: "~/app/images/nut.jpg" }, { product_item_no: 4, product_name: "Washers", description: "", ImageSrc: "~/app/images/washers.jpg" }, { product_item_no: 5, product_name: "Metal Sheets", description: "", ImageSrc: "~/app/images/metal.jpg" }, { product_item_no: 6, product_name: "Magnet coils", description: "", ImageSrc: "~/app/images/magnet.JPG" });
        // request({ 
        //     url: `http://10.155.64.54:3000/product?data=all`,
        //     method: "GET"
        // }).then((response: any) => {
        //     console.log("res  : "+ JSON.stringify(response)); 
        //     var jas=JSON.parse(response.content);
        //     for(var i in jas){ 
        //         var item_no=jas[i].productItemNo;
        //         var name=jas[i].productName;
        //         var desc=jas[i].Description;
        //         var Image=jas[i].ImageSource; 
        //         var items:Prod = { product_item_no: item_no, product_name:name, description: desc,ImageSrc:Image};
        //         this.products.push(items); 
        //     }   
        // }, (e) => {console.log("Request Error : "+e);
        //         }); 
    }
    ProductService.prototype.ngOnInit = function () { };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProduct = function (product_name) {
        return this.products.filter(function (product) { return product.product_name === product_name; })[0];
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxEO0lBSUEsbUNBQW1DO0lBRS9CO1FBb0JRLGFBQVEsR0FBRSxJQUFJLEtBQUssQ0FDdkIsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsRUFDckcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsRUFDNUcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsRUFDbkcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsRUFDckcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsRUFDeEcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUseUJBQXlCLEVBQUUsQ0FDNUcsQ0FBQztRQTFCRSxhQUFhO1FBQ2Isd0RBQXdEO1FBQ3hELG9CQUFvQjtRQUNwQiwrQkFBK0I7UUFDL0IseURBQXlEO1FBQ3pELDRDQUE0QztRQUM1QywwQkFBMEI7UUFDMUIsNENBQTRDO1FBQzVDLHVDQUF1QztRQUN2Qyx1Q0FBdUM7UUFDdkMseUNBQXlDO1FBQ3pDLDZHQUE2RztRQUM3RyxzQ0FBc0M7UUFDdEMsV0FBVztRQUNYLGdEQUFnRDtRQUNoRCxlQUFlO0lBQ25CLENBQUM7SUFFTCxpQ0FBUSxHQUFSLGNBQVcsQ0FBQztJQVVSLG9DQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxZQUFvQjtRQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLFlBQVksS0FBSyxZQUFZLEVBQXJDLENBQXFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBekNRLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7O09BQ1csY0FBYyxDQTJDMUI7SUFBRCxxQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiOyBcclxuXHJcbmltcG9ydCB7IFByb2QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xyXG5cclxuXHJcblxyXG4vLyBwcml2YXRlIHByb2R1Y3RzOkFycmF5PFByb2Q+PVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCApe1xyXG4gICAgICAgIC8vIHJlcXVlc3QoeyBcclxuICAgICAgICAvLyAgICAgdXJsOiBgaHR0cDovLzEwLjE1NS42NC41NDozMDAwL3Byb2R1Y3Q/ZGF0YT1hbGxgLFxyXG4gICAgICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgICAgICAvLyB9KS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVzICA6IFwiKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpOyBcclxuICAgICAgICAvLyAgICAgdmFyIGphcz1KU09OLnBhcnNlKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgIC8vICAgICBmb3IodmFyIGkgaW4gamFzKXsgXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgaXRlbV9ubz1qYXNbaV0ucHJvZHVjdEl0ZW1ObztcclxuICAgICAgICAvLyAgICAgICAgIHZhciBuYW1lPWphc1tpXS5wcm9kdWN0TmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBkZXNjPWphc1tpXS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBJbWFnZT1qYXNbaV0uSW1hZ2VTb3VyY2U7IFxyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGl0ZW1zOlByb2QgPSB7IHByb2R1Y3RfaXRlbV9ubzogaXRlbV9ubywgcHJvZHVjdF9uYW1lOm5hbWUsIGRlc2NyaXB0aW9uOiBkZXNjLEltYWdlU3JjOkltYWdlfTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChpdGVtcyk7IFxyXG4gICAgICAgIC8vICAgICB9ICAgXHJcbiAgICAgICAgLy8gfSwgKGUpID0+IHtjb25zb2xlLmxvZyhcIlJlcXVlc3QgRXJyb3IgOiBcIitlKTtcclxuICAgICAgICAvLyAgICAgICAgIH0pOyBcclxuICAgIH0gXHJcblxyXG5uZ09uSW5pdCgpe30gXHJcbiAgICBwcml2YXRlIHByb2R1Y3RzPSBuZXcgQXJyYXk8UHJvZD4oXHJcbiAgICAgICAgeyBwcm9kdWN0X2l0ZW1fbm86IDEsIHByb2R1Y3RfbmFtZTogXCJGdWVsIFB1bXBzXCIsIGRlc2NyaXB0aW9uOiBcIlwiLEltYWdlU3JjOiBcIn4vYXBwL2ltYWdlcy9mdWVsLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBwcm9kdWN0X2l0ZW1fbm86IDIsIHByb2R1Y3RfbmFtZTogXCJTdGVlbCBQaXBlc1wiLCBkZXNjcmlwdGlvbjogXCJcIixJbWFnZVNyYzogXCJ+L2FwcC9pbWFnZXMvc3RlZWxwaXBlcy5wbmdcIiB9LFxyXG4gICAgICAgIHsgcHJvZHVjdF9pdGVtX25vOiAzLCBwcm9kdWN0X25hbWU6IFwiTnV0IEJvbHRzXCIsIGRlc2NyaXB0aW9uOiBcIlwiICxJbWFnZVNyYzogXCJ+L2FwcC9pbWFnZXMvbnV0LmpwZ1wifSxcclxuICAgICAgICB7IHByb2R1Y3RfaXRlbV9ubzogNCwgcHJvZHVjdF9uYW1lOiBcIldhc2hlcnNcIiwgZGVzY3JpcHRpb246IFwiXCIsSW1hZ2VTcmM6IFwifi9hcHAvaW1hZ2VzL3dhc2hlcnMuanBnXCIgfSxcclxuICAgICAgICB7IHByb2R1Y3RfaXRlbV9ubzogNSwgcHJvZHVjdF9uYW1lOiBcIk1ldGFsIFNoZWV0c1wiLCBkZXNjcmlwdGlvbjogXCJcIixJbWFnZVNyYzogXCJ+L2FwcC9pbWFnZXMvbWV0YWwuanBnXCIgfSxcclxuICAgICAgICB7IHByb2R1Y3RfaXRlbV9ubzogNiwgcHJvZHVjdF9uYW1lOiBcIk1hZ25ldCBjb2lsc1wiLCBkZXNjcmlwdGlvbjogXCJcIixJbWFnZVNyYzogXCJ+L2FwcC9pbWFnZXMvbWFnbmV0LkpQR1wiIH0sXHJcbiAgICApOyBcclxuICAgIFxyXG4gICAgZ2V0UHJvZHVjdHMoKTogQXJyYXk8UHJvZD4geyBcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0KHByb2R1Y3RfbmFtZTogc3RyaW5nKTogUHJvZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnByb2R1Y3RfbmFtZSA9PT0gcHJvZHVjdF9uYW1lKVswXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==