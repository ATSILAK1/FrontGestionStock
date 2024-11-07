import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProduitService } from '../../../Service/produit.service';

@Component({
  selector: 'app-addproduit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addproduit.component.html',
  styleUrl: './addproduit.component.css'
})
export class AddproduitComponent {


/**
 *
 */
constructor( private produitService: ProduitService) {

  
}

errorAjout = ""

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
                                                quantiteStock:this.produitForm.value.quantite!},).subscribe(

                                                  {
                                                    next:  data=> console.log(data),
                                                    error: err =>{this.errorAjout = err.error.nom[0], console.log(err.error.nom[0])} 
                                                  }
                                                )
  }

}
