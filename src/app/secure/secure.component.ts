import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../classes/auth';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    // aici verificam daca utilizatorul este autentificat
    // o facem aici pentru ca este cea mai de sus componenta
    this.authService.user().subscribe(
      res => { // Roger - Response
        this.user = res.data;
        Auth.user = this.user;
      },
      error => {
        this.router.navigate(['/login']);
      }
    );
  }
}
