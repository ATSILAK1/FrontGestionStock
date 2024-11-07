import { Component, Input, input, OnInit } from '@angular/core';
import { Produit } from '../../../../Models';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../../Service/produit.service';
import { NavbarComponent } from "../../Home/navbar/navbar.component";

@Component({
  selector: 'app-updateproduit',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent,NavbarComponent],
  templateUrl: './updateproduit.component.html',
  styleUrl: './updateproduit.component.css'
})
export class UpdateproduitComponent implements OnInit {
 
 constructor(private route: ActivatedRoute , private produitService:ProduitService){}

  produit!: Produit
  produitId :any

  ngOnInit(): void {
  this.produitId = this.route.snapshot.paramMap.get('id')

   this.produitService.getProduit(this.produitId).subscribe({
    next: (value:any) => {
      this.produit = value;
      console.log(this.produit)
    


      this.produitForm.patchValue({
        prix        : this.produit.prix,
        nom         : this.produit.nom,
        description : this.produit.description,
        quantite    : this.produit.quantiteStock
      })
    },
    error : (err:any) => {
      console.log(err)
      
    }
  });
  
  }

 

  
 

  produitForm = new FormGroup({
    prix: new FormControl<number>(0,Validators.required),
    nom: new FormControl<string>("", Validators.required),
    description: new FormControl<string>("",[Validators.required, Validators.maxLength(512)]),
    quantite: new FormControl<number>(0,[Validators.required,Validators.min(0)])
})


updateFrom()
{
  let produit = {
    prix:this.produitForm.controls.prix.value!,
    description: this.produitForm.controls.description.value!,
    nom:this.produitForm.controls.nom.value!,
    quantiteStock:this.produitForm.controls.quantite.value!
  }
  if (this.produitForm.valid)
    this.produitService.updateProduit(this.produitId,produit).subscribe({
      
      next: (value:any) => {
        this.produit = value;
        console.log(this.produit)
    }}
  
    )
}

}
