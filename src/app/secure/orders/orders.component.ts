import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage: number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.load();
  }

  load(currentPage = 1): void {
    this.orderService.all(currentPage).subscribe(
      res => {
          this.orders = res.data;
          this.lastPage = res.meta.last_page;
      }
    );
  }

  export(): any {
    this.orderService.export().subscribe(
      res => {
        const blob = new Blob([res], {type: 'text/csv'});
        const downloadUrl = window.URL.createObjectURL(res);
        const link = document.createElement('a'); // Roger - anchor link
        link.href = downloadUrl;
        link.download = 'orders.csv';
        link.click();
        // a very hacky way to download a file
      }
    );
  }
}
