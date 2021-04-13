import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentPage = 1;
  lastPage: number;

  constructor(private  userService: UserService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): any {
    this.userService.all(this.currentPage).subscribe(
      res => {
        this.users = res.data;
        this.lastPage = res.meta.last_page; // Ok
      }
    );
  }

  prev(): any{
    if (this.currentPage === 1) {
      return ;
    }
    this.currentPage --;
    this.refresh();
  }


  next(): any{
    if (this.currentPage === this.lastPage) {
      return ;
    }
    this.currentPage ++;
    this.refresh();
  }
}
