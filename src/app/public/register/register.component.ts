import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirm: ''
      }
    );
  }

  submit(): void {
    const data = this.form.getRawValue();

    this.authService.login(data).subscribe(
       res => {
        console.log(res);
      }
    );
  }
}
