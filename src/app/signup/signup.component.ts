import { AuthServiceService } from './../auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signUpUser(email, password);
  }
}
