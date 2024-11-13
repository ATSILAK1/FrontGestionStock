import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProduitService } from '../../../../Service/produit.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TransactionService } from '../../../../Service/transaction.service';
import { TransactionAchat } from '../../../../../Models';
import { NONE_TYPE } from '@angular/compiler';
import { TransactionachatdisplayComponent } from "../transactionachatdisplay/transactionachatdisplay.component";
import { FournisseurService } from '../../../../Service/fournisseur.service';
import { NavbarComponent } from "../../../Home/navbar/navbar.component";

@Component({
  selector: 'app-transactionachatadd',
  standalone: true,
  imports: [FormsModule ,NavbarComponent, ReactiveFormsModule, DropdownModule, CommonModule, AutoCompleteModule, TransactionachatdisplayComponent, NavbarComponent],
  templateUrl: './transactionachatadd.component.html',
  styleUrl: './transactionachatadd.component.css'
})
export class TransactionachataddComponent implements OnInit{
  
  /**
   *
   */
  constructor(private produitservice : ProduitService , private transactionAchatService : TransactionService , private serviceFournisseur:FournisseurService) {
    
    
  }

  selectedOption: any;
  filteredOptions: any

  selectedFournisseur:any
  filtredFournisseur:any

  succesOuEchec = '' 
  



  produits :any
ngOnInit(): void {
  this.succesOuEchec = ''
  this.produitservice.GetAllProduit().subscribe(
    {
      next: value => this.produits = value.results 
    }
    
  )
}

   

  transactionForm = new FormGroup({
    
    fournisseur: new FormControl(0),
    date: new FormControl(new Date(), Validators.required),
    montantTotal: new FormControl(0,[Validators.required]),
    quantiteProduit: new FormControl(0,[Validators.required]),
    produit: new FormControl(0,[Validators.required]),
    informationTransaction : new FormControl('',[Validators.required])
    
})

search(event: any) {
  const query = event.query;
  this.produitservice.searchOptions(query).subscribe((options: any) => {
    this.filteredOptions = options.results;
    console.log(this.filteredOptions)
    
  });
}

SearchFournisseur(event:any)
{
  const query = event.query;
  this.serviceFournisseur.searchOptions(query).subscribe((options: any) => {
    this.filtredFournisseur = options.results;
    console.log(this.filtredFournisseur)
    console.log(this.selectedFournisseur.id)
  });
}

SubmitFrom()
{
  console.log(this.selectedOption)
  var transaction:TransactionAchat = new TransactionAchat()
  if (!this.transactionForm.valid)
    return 

  transaction.fournisseurTransactionAchat = this.selectedFournisseur.id ;
  transaction.dateTransaction             = this.transactionForm.value.date!;
  transaction.montantTransaction          = this.transactionForm.value.montantTotal!;
  transaction.produitTransaction          = this.selectedOption.id
  transaction.informationTransaction      = this.transactionForm.value.informationTransaction!;
  transaction.quantiteTransaction         = this.transactionForm.value.quantiteProduit!;


  this.transactionAchatService.AjouterTransactionAchat(transaction).subscribe(
    {
      next: value => {
        this.succesOuEchec = 'Ajouter Avec Succes'
      },
      error : err => {
        this.succesOuEchec = "Echec de l'Ajout "
      }
    }
  )
}

}
