import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault()
    const errors = []
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value

    if (password != cpassword) {
      errors.push("Passwords doesnt match.")
    }
    if(errors.length == 0){
      this.auth.registerUser(email,password).subscribe(data => {
        console.log(data)
        if(data.success){
          this.router.navigate(['dashboard'])
        }
      })
    }

    console.log(email,password)
  }
}
