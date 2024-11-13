import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../../Service/fournisseur.service';

@Component({
  selector: 'app-displayfournisseur',
  standalone: true,
  imports: [],
  templateUrl: './displayfournisseur.component.html',
  styleUrl: './displayfournisseur.component.css'
})
export class DisplayfournisseurComponent implements OnInit{
  
  
  properties : any
  propertiesUrl = "http://127.0.0.1:8000/gestion/fournisseur"; //url to query for the properties
  next: string  = "";
  previous: string = "";
  constructor(private fournisseurService:FournisseurService){

  }
  ngOnInit(): void {
  this.setProperties(this.propertiesUrl)
  }

  setProperties(url: string) {
    this.fournisseurService.getProperties(url).subscribe(response => {
     console.log(response.results) 
     this.properties = response.results;
      
      if (response.next) {
        this.next = response.next;
      }

      if (response.previous) {
        this.previous = response.previous;
      }
    });
  }

 
  fetchNext() {
    this.setProperties(this.next);
  }

  
  fetchPrevious() {
    this.setProperties(this.previous);
  }

}
