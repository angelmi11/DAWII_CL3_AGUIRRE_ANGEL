import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocationRikyMortyService {

  constructor(
    private http: HttpClient,
  ) { }

  public async getLocations() {
    let resp = await this.http.get('https://rickandmortyapi.com/api/location').toPromise()
    console.log('resp', resp)
  }

}
