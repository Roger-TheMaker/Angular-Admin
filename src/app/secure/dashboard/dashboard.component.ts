import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import * as c3 from 'c3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(protected orderService: OrderService) { }

  ngOnInit(): void {

    const chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x'],
          ['Sales'],
        ],
        types: {
          Sales: 'bar'
        }
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    });

    this.orderService.chart().subscribe(
      result => {
        chart.load({
          columns: [
            ['x', ...result.data.map(r => r.date)], // Interesting
            ['Sales', ...result.data.map(r => r.sum)]
          ]
        });
      }
    );
  }
}
