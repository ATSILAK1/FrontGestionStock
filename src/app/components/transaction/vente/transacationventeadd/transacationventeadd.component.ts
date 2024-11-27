import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProduitService } from '../../../../Service/produit.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { TransactionVente } from '../../../../../Models';
import { TransactionService } from '../../../../Service/transaction.service';
import { DisplaytransacationventeComponent } from '../displaytransacationvente/displaytransacationvente.component';
import { NavbarComponent } from '../../../Home/navbar/navbar.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-transacationventeadd',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    DropdownModule,
    AutoCompleteModule,
    DisplaytransacationventeComponent,
    NavbarComponent,
  ],
  templateUrl: './transacationventeadd.component.html',
  styleUrl: './transacationventeadd.component.css',
})
export class TransacationventeaddComponent {
  isVisible = false;
  selectedOption: any;
  filteredOptions: any;

  succesOrError = '';

  prixUnitaire!: number;
  constructor(
    private produitservice: ProduitService,
    private transaction: TransactionService
  ) {}

  formTransacationVente = new FormGroup({
    informationTransaction: new FormControl(''),
    date: new FormControl(new Date()),
    quantiteTransaction: new FormControl(0, [Validators.required]),
    produitTransaction: new FormControl('', [Validators.required]),

    prixUnitaireTransaction: new FormControl(0),
  });

  search(event: any) {
    const query = event.query;
    this.produitservice.searchOptions(query).subscribe((options: any) => {
      this.filteredOptions = options.results;
      console.log(this.filteredOptions);
    });
  }

  ShowDialogBox() {
    this.isVisible = true;
  }

  onSubmit() {
    let temp = new TransactionVente();
    temp.dateTransaction = this.formTransacationVente.controls.date.value!;
    temp.informationTransaction =
      this.formTransacationVente.controls.informationTransaction.value!;
    temp.produitTransaction = this.selectedOption.id;
    temp.quantiteTransaction =
      this.formTransacationVente.controls.quantiteTransaction.value!;
    (temp.montantTransaction =
      this.formTransacationVente.controls.prixUnitaireTransaction.value! *
      temp.quantiteTransaction),
      this.transaction.AjouterTransactionVente(temp).subscribe({
        next: (value: any) => {
          console.log(value);
          this.formTransacationVente.reset();
          this.succesOrError = 'Ajouter avec succes ';
        },
        error: (err: any) => {
          this.succesOrError = err.error.quantiteTransaction[0];
        },
      });
  }
}
