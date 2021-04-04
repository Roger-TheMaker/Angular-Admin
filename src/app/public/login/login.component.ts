import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: '',
        password: ''
      }
    );
  }

  submit(): any {

    const data = this.form.getRawValue();

    this.authService.login(data).subscribe(
       res => {
        console.log(res);
      }
    );
  }
}
