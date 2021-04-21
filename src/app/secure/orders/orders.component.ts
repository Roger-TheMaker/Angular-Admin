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
}
