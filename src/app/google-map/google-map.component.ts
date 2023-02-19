import {} from 'googlemaps';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
    map: google.maps.Map;
    marker: google.maps.Marker;

    @ViewChild('map') mapElement: HTMLElement;

    ngOnInit(): void {
        const center = { lat: -25.344, lng: 131.031 }
        const mapProperties = {
            center,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement, mapProperties);
        this.marker = new google.maps.Marker({ position: center, map: this.map})
    }
}
