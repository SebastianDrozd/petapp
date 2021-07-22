import { Component } from '@angular/core';
import { PetserviceService } from './services/petservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petapp';
  picture;
  bad = false
  constructor(private petService : PetserviceService){}
  
  getPicture(){
      this.petService.getPicture().subscribe(data => {this.picture = data; this.bad = true;})
  }
}
