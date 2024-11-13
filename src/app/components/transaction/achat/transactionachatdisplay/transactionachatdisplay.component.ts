import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../../Service/transaction.service';

@Component({
  selector: 'app-transactionachatdisplay',
  standalone: true,
  imports: [],
  templateUrl: './transactionachatdisplay.component.html',
  styleUrl: './transactionachatdisplay.component.css'
})
export class TransactionachatdisplayComponent implements OnInit {

transactionList:any 
/**
 *
 */
constructor(private transactionService:TransactionService) {
  
}
properties: any[] = [];
propertiesUrl = "http://127.0.0.1:8000/gestion/transactionachat"; //url to query for the properties
next: string  = "";
previous: string = "";

  ngOnInit(): void {
   this.transactionService.GetAllTransactionAchat().subscribe(
    {
      next : (value:any) => {
        console.log(value);
        
      }
    }
    
   )
   this.setProperties(this.propertiesUrl)
  }


  setProperties(url: string) {
    this.transactionService.getProperties(url).subscribe(response => {
     console.log(response.results) 
     this.transactionList = response.results
      
      if (response.next) {
        this.next = response.next;
      }

      if (response.previous) {
        this.previous = response.previous;
      }
    });
  }

 
  fetchNext() {
    this.setProperties(this.next);
  }

  
  fetchPrevious() {
    this.setProperties(this.previous);
  }

  SupprimerTransacationAchat(id:number)
  {
    this.transactionService.SupprimerAchat(id).subscribe({
      next: (response:any)=>
      {
        console.log(response)
      },
      error: (err:any)=>
      {
        console.log(err)
      }
    })
  }

}
