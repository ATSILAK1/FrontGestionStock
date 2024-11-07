import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProduitService } from '../../../Service/produit.service';
import { Produit } from '../../../../Models';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {TableModule} from 'primeng/table';
import { AddproduitComponent } from "../addproduit/addproduit.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produit-display',
  standalone: true,
  imports: [ReactiveFormsModule, TableModule, CommonModule, MatButtonModule, AddproduitComponent,RouterLink] ,
  templateUrl: './produit-display.component.html',
  styleUrl: './produit-display.component.css'
})
export class ProduitDisplayComponent implements OnInit{

  properties: any[] = [];
  propertiesUrl = "http://127.0.0.1:8000/gestion/produit"; //url to query for the properties
  next: string  = "";
  previous: string = "";
  succesOuEchec = ""

  
  constructor( private produitService: ProduitService) {
   
    
  }
  produitForm = new FormGroup({
      prix: new FormControl<number>(0,Validators.required),
      nom: new FormControl<string>("", Validators.required),
      description: new FormControl<string>("",[Validators.required, Validators.maxLength(512)]),
      quantite: new FormControl<number>(0,[Validators.required,Validators.min(0)])
 })
  
 toutlesProduits2:any 
  
  ngOnInit(): void {
  
  this.produitService.GetAllProduit().subscribe(
    {
      next: data =>  {
        this.toutlesProduits2 = data.results
        
      },
    }
  )
  this.setProperties(this.propertiesUrl)
 }
  



  setProperties(url: string) {
    this.produitService.getProperties(url).subscribe(response => {
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

  supprimerProduit(id:number)
  {
    
    this.produitService.SupprimerProduit(id)
  }

}
