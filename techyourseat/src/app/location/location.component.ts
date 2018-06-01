import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @ViewChild('gmap') mapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(35.185145, -80.879409),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    new google.maps.Marker({position: {lat: 35.185145, lng: -80.879409}, map: this.map});
  }

}
