import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../../Service/transaction.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-displaytransacationvente',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './displaytransacationvente.component.html',
  styleUrl: './displaytransacationvente.component.css',
})
export class DisplaytransacationventeComponent implements OnInit {
  transactionList: any;
  /**
   *
   */
  constructor(private transactionService: TransactionService) {}
  properties: any[] = [];
  propertiesUrl = 'http://127.0.0.1:8000/gestion/transactionvente'; //url to query for the properties
  next: string = '';
  previous: string = '';
  pageNumber: number = 1;

  ngOnInit(): void {
    this.transactionService.GetAllTransactionAchat().subscribe({
      next: (value: any) => {
        console.log(value);
      },
    });
    this.setProperties(this.propertiesUrl);
  }

  SupprimerTransacationVente(id: number) {
    this.transactionService.SupprimerVente(id).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  setProperties(url: string) {
    this.transactionService.getProperties(url).subscribe((response) => {
      console.log(response);
      this.transactionList = response.results;

      if (response.next) {
        this.next = response.next;
      } else {
        this.next = '';
      }

      if (response.previous) {
        this.previous = response.previous;
      } else {
        this.previous = '';
      }
    });
  }

  fetchNext() {
    this.setProperties(this.next);
    this.pageNumber++;
  }

  fetchPrevious() {
    this.setProperties(this.previous);
    this.pageNumber--;
  }
}
