import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProduitService } from '../../../Service/produit.service';
import { Produit } from '../../../../Models';

@Component({
  selector: 'app-produit-display',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './produit-display.component.html',
  styleUrl: './produit-display.component.css'
})
export class ProduitDisplayComponent {



  constructor( private produitService: ProduitService) {
   
    
  }
  
 produitForm = new FormGroup({
      prix: new FormControl<number>(0,Validators.required),
      nom: new FormControl<string>("", Validators.required),
      description: new FormControl<string>("",[Validators.required, Validators.maxLength(512)]),
      quantite: new FormControl<number>(0,[Validators.required,Validators.min(0)])
 })
      NewProduitSubmit()
  {

    if(this.produitForm.valid)
      this.produitService.AjouterNouveauProduit({prix:this.produitForm.value.prix!,
                                                nom:this.produitForm.value.nom!,
                                                description:this.produitForm.value.description!,
                                                 })
  
      
  }
}
