import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './miniMap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    div {
      width: 100%;
      height: 100%;
    }
  `,
})
export class MiniMapComponent implements AfterViewInit {
  @Input({ required: true}) lngLat!: [number, number];
  @Input() isDraggable: boolean = true;
  @Output() location = new EventEmitter<[number, number]>();
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error('No se encontro el divMap');
    if (!this.lngLat) throw new Error('LngLat no definido');

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: true // Para que no se pueda interactuar con el mapa
    });

    const marker = new Marker({
      color: '#FF5733',
      draggable: this.isDraggable,
    }).setLngLat(this.lngLat).addTo(this.map);

    marker.on('drag', () => {
      const { lng, lat } = marker.getLngLat();
      this.lngLat = [lng, lat];
      this.location.emit(this.lngLat);
    });
  }
}
