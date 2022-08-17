import { UsersService } from './../../../services/users.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'src/app/services/sign-in.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private signInService: SignInService,public UserService:UsersService
  ) {
    this.userForm = this.formBuilder.group({ email: [''], password: [''] });
  }

  ngOnInit(): void {}

  login(): void {
    this.signInService.Login(this.userForm.value).subscribe({
      next: (data) => {
        this.UserService.setToken(data.token);
        console.log(data);
        this.ngZone.run(() => this.router.navigateByUrl('/clients'));
      },
      error: (err) => alert("Email o contraseña incorrectos"),
    });
  }
}
