import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this. _httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }

  getVehicle(id:string):Observable<any>{
    return this. _httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/",data);
  }

  deleteVehicle(id:string):Observable<any>{
    return this. _httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }
}
