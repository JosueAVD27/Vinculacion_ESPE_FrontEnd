import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';
import { Transaction } from '../../interfaces/incidentes.interface';
import { Chart, ChartConfiguration, ChartData, ChartTypeRegistry, ChartDataset } from 'chart.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.css']
})
export class Grafico2Component implements OnInit {
  public chart!: Chart;

  constructor(private connectService: ConnectService) { }

  public filteredTransactions!: Observable<Transaction[]>;

  ngOnInit(): void {
    this.filteredTransactions = this.connectService.filteredTransactions;
    this.filteredTransactions.subscribe((transactions: Transaction[]) => {
      this.createBarChart(transactions);
    });
  }

  createBarChart(transactions: Transaction[]): void {
    const labels = transactions.map(transaction => transaction.item);
    const data: ChartData<any, any> = {
      labels: labels,
      datasets: [{
        label: 'Número de incidentes',
        data: transactions.map(transaction => transaction.cost as number),
        backgroundColor: 'rgba(75, 192, 40, 0.6)',
        borderColor: 'rgba(75, 192, 40, 1)',
        borderWidth: 1
      }]
    };

    if (this.chart) {
      this.chart.destroy();
    }

    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
