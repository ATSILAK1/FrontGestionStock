import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProduitService } from '../../../Service/produit.service';
import { DisplayfournisseurComponent } from '../../fournisseur/displayfournisseur/displayfournisseur.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-addproduit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    CommonModule,
    DisplayfournisseurComponent,
  ],
  templateUrl: './addproduit.component.html',
  styleUrl: './addproduit.component.css',
})
export class AddproduitComponent {
  /**
   *
   */
  constructor(private produitService: ProduitService) {}

  isVisible = false;

  ShowDialogBox() {
    this.isVisible = true;
  }

  errorAjout = '';

  produitForm = new FormGroup({
    prix: new FormControl<number>(0, Validators.required),
    nom: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(512),
    ]),
    quantite: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  NewProduitSubmit() {
    if (this.produitForm.valid)
      this.produitService
        .AjouterNouveauProduit({
          prix: this.produitForm.value.prix!,
          nom: this.produitForm.value.nom!,
          description: this.produitForm.value.description!,
          quantiteStock: this.produitForm.value.quantite!,
        })
        .subscribe({
          next: (data) => {
            console.log(data);
            this.produitForm.reset();
          },
          error: (err) => {
            (this.errorAjout = err.error.nom[0]), console.log(err.error.nom[0]);
          },
        });
  }

  getErrorMessage(field: string): string {
    const control = this.produitForm.get(field);
    if (control?.hasError('required')) {
      return 'Ce champ est requis.';
    }
    if (control?.hasError('minlength')) {
      return `Ce champ doit contenir au moins ${control.errors?.['minlength'].requiredLength} caractères.`;
    }
    if (control?.hasError('maxlength')) {
      return `Ce champ ne peut pas dépasser ${control.errors?.['maxlength'].requiredLength} caractères.`;
    }
    if (control?.hasError('pattern')) {
      return 'Veuillez entrer un format valide.';
    }
    if (control?.hasError('min')) {
      return 'La quantité doit être supérieure à 0.';
    }
    return 'Champ invalide.';
  }
}
