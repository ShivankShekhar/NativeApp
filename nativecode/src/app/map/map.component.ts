import { Component, OnInit } from '@angular/core';
  import { HereMarker } from 'nativescript-here';
  import { RouterExtensions } from "nativescript-angular/router";
  //  import { Directions } from "nativescript-directions";
@Component({
  selector: 'ns-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  moduleId: module.id,
})
export class MapComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

    back(){
        this.routerExtensions.back();
    }

public onMapReady(event) {
        const map = event.object;
        map.addMarkers(<HereMarker[]>[{
            id: 1,
            latitude: 37.97,
            longitude: 21.4252,
            title: "Tracy, CA", 
            description: "The best place in California!",
            draggable: true,
            onTap: (marker) => {
                const updatedMarker = Object.assign({}, marker, {
                    selected: !marker.selected
                });
                map.updateMarker(updatedMarker);
            }
        }]);
}

// directions = new Directions();
// dir(){  
//         this.directions.navigate({
//         from: { // optional, default 'current location'
//             lat: 52.215987,
//             lng: 5.282764
//         },
//         to: [{ // if an Array is passed (as in this example), the last item is the destination, the addresses in between are 'waypoints'.
//             lat: 52.21987,
//             lng: 5.182764
//         }
//         // ,
//         // {
//         //     address: "Aak 98, Wieringerwerf, Netherlands"
//         // }
//         ],
//         type: "driving", // optional, can be: driving, transit, bicycling or walking
//         //   ios: {
//         //     preferGoogleMaps: true, // If the Google Maps app is installed, use that one instead of Apple Maps, because it supports waypoints. Default true.
//         //     allowGoogleMapsWeb: true // If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can open Google Maps on web so all waypoints are shown (set this property to true). Default false.
//         //   }
//         }).then(() => {
//             console.log("Maps app launched.");
//             }, error => {
//                 console.log(error);
//             }); 
// }

}
