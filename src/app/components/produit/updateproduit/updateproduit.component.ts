import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../../Models';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../../Service/produit.service';
import { NavbarComponent } from '../../Home/navbar/navbar.component';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-updateproduit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavbarComponent,
    NavbarComponent,
    NgClass,
    ButtonModule,
    DialogModule,
    CommonModule,
  ],
  templateUrl: './updateproduit.component.html',
  styleUrl: './updateproduit.component.css',
})
export class UpdateproduitComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) {}

  produit!: Produit;

  produitId: any;
  isVisible: boolean = false;

  ngOnInit(): void {
    // this.produitId = this.route.snapshot.paramMap.get('id');
  }

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

  updateForm() {
    let produit = {
      prix: this.produitForm.controls.prix.value!,
      description: this.produitForm.controls.description.value!,
      nom: this.produitForm.controls.nom.value!,
      quantiteStock: this.produitForm.controls.quantite.value!,
    };
    if (this.produitForm.valid)
      this.produitService.updateProduit(this.produitId, produit).subscribe({
        next: (value: any) => {
          this.produit = value;
          console.log(this.produit);
        },
      });
  }

  getErrorMessage(field: string): string {
    if (this.produitForm.get(field)?.hasError('required')) {
      return 'Ce champ est requis';
    }
    if (this.produitForm.get(field)?.hasError('min')) {
      return 'La valeur doit être supérieure à 0';
    }
    return '';
  }

  showDialog(id: number): void {
    this.isVisible = true;

    this.produitService.getProduit(id).subscribe({
      next: (value: any) => {
        this.produit = value;
        console.log(this.produit);

        this.produitForm.patchValue({
          prix: this.produit.prix,
          nom: this.produit.nom,
          description: this.produit.description,
          quantite: this.produit.quantiteStock,
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    }); // Affiche la boîte de dialogue
  }
}
