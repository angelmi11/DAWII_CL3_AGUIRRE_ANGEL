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
    let resp: any = await this.http.get('https://rickandmortyapi.com/api/location').toPromise()
    if (resp?.results.lenght > 0) return "ERROR AL TRAER LOS DATOS"
    return resp.results.filter((location: any) => location.id % 2 === 0);
  }

}
