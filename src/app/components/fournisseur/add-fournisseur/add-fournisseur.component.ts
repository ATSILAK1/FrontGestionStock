import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FournisseurService } from '../../../Service/fournisseur.service';
import { Fournisseur } from '../../../../Models';
import { NavbarComponent } from "../../Home/navbar/navbar.component";
import { DisplayfournisseurComponent } from '../displayfournisseur/displayfournisseur.component';

@Component({
  selector: 'app-add-fournisseur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, DisplayfournisseurComponent],
  templateUrl: './add-fournisseur.component.html',
  styleUrl: './add-fournisseur.component.css'
})
export class AddFournisseurComponent {

/**
 *
 */
constructor(private fournisseurService:FournisseurService) {
  
}
fournisseurForm = new FormGroup({
  nomFournisseur : new FormControl<string>("",Validators.required),
  tel : new FormControl<string>('',Validators.required)
})

onSubmit()
{
 let fournisseur = new Fournisseur()

  if (this.fournisseurForm.valid){
  fournisseur.nomFournisseur = this.fournisseurForm.controls.nomFournisseur.value!;
  fournisseur.telephoneFournisseur = this.fournisseurForm.controls.tel.value!;
  this.fournisseurService.AjouterFournisseur(fournisseur).subscribe();
  }
}

}
