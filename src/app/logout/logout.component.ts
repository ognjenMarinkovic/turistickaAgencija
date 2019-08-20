import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
   this.user.logout().subscribe(data =>{
     if(data.success){
       this.router.navigate([''])
       this.auth.setLoggedIn(false)
     }else{
       window.alert("Some problem")
     }
   })
  }

}