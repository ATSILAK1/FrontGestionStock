import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../../../Service/statistique.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(private statsService: StatistiqueService) {}

  results: any;

  ngOnInit(): void {
    this.statsService.getStats().subscribe({
      next: (data) => {
        this.results = data;
      },
    });
  }
}
