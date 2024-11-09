import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProduitService } from '../../../../Service/produit.service';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-transactionachatadd',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, DropdownModule,CommonModule ,AutoCompleteModule],
  templateUrl: './transactionachatadd.component.html',
  styleUrl: './transactionachatadd.component.css'
})
export class TransactionachataddComponent implements OnInit{
  
  /**
   *
   */
  constructor(private produitservice : ProduitService) {
    
    
  }

  selectedOption: any;
  filteredOptions: any
  
  produits :any
ngOnInit(): void {
  this.produitservice.GetAllProduit().subscribe(
    {
      next: value => this.produits = value.results 
    }
    
  )
}

   

  transactionForm = new FormGroup({
    id: new FormControl(null),
    fournisseur: new FormControl('', Validators.required),
    date: new FormControl(new Date(), Validators.required),
    montantTotal: new FormControl({ value: 0, disabled: true }),
    produit: new FormControl('',[Validators.required])
})

search(event: any) {
  const query = event.query;
  this.produitservice.searchOptions(query).subscribe((options: any) => {
    this.filteredOptions = options.results;
    console.log(this.filteredOptions)
  });
}

}
