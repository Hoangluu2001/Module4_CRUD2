import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/shared/jwt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  errors: any = null;
  email = '';
  password = '';
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public jwtService: JwtService,
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }
  ngOnInit() {
    this.onSubmit();
  }
  onSubmit() {
    this.jwtService.logIn(this.signinForm.value).subscribe(
        (data: { token: string; }) => {
        localStorage.setItem('AccessToken', data.token)
        this.router.navigate(['student'])
      }, (error: any) => {
        console.log(error);
      }
    );
  }
}
