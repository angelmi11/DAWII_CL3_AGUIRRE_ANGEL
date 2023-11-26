import { Component, OnInit } from '@angular/core';
import { LocationRikyMortyService } from './location-riky-morty.service';

@Component({
  selector: 'app-locacion-riki-morty',
  templateUrl: './locacion-riki-morty.component.html',
  styleUrls: ['./locacion-riki-morty.component.css']
})
export class LocacionRikiMortyComponent implements OnInit {
  locations: any[] = [];
  constructor(
    private locationRikyMortyService: LocationRikyMortyService
  ) { }

  async ngOnInit() {
    this.locations = await this.locationRikyMortyService.getLocations();
  }


}
