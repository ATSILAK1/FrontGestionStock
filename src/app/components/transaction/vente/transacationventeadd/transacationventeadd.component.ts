import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transacationventeadd',
  standalone: true,
  imports: [],
  templateUrl: './transacationventeadd.component.html',
  styleUrl: './transacationventeadd.component.css'
})
export class TransacationventeaddComponent {




  formTransacationVente = new FormGroup({
    informationTransaction : new FormControl(''),
    date : new FormControl(new Date(),),
    quantiteTransaction : new FormControl('',[Validators.required]),
    produitTransaction : new FormControl("",[Validators.required]),
    montantTransaction : new FormControl(0, ),
  })
}
