import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetserviceService {

  constructor(private http: HttpClient) {
   }

   getPicture(){
     return this.http.get("https://dog.ceo/api/breeds/image/random");
   }
}
