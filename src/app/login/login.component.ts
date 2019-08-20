import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(email, password).subscribe(data => {
      if(data.success) {
        window.alert(data.message)
        this.router.navigate(['dashboard'])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
  console.log(email, password)
}

}
