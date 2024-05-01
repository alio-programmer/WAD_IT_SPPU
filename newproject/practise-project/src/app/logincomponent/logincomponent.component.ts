import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.css',
})
export class LogincomponentComponent {
  signupuser: any[] = [];
  loginobj: any = {
    email: '',
    password: '',
  };
  constructor(private router: Router) {}
  ngOnInit() {
    const localdata = localStorage.getItem('users');
    if (localdata) {
      this.signupuser = JSON.parse(localdata);
    }
    console.log(this.signupuser);
  }
  onlogin() {
    console.log('working');
    const userexist = this.signupuser.find(
      (m) =>
        m.email == this.loginobj.email && m.password == this.loginobj.password
    );
    console.log(userexist);
    if (userexist != undefined) {
      console.log('user logged in');
      alert('user data matched user logged in');
      this.router.navigate(['/loggedin']);
    } else {
      alert("'no user with these credentials'");
      console.log('no user with these credentials');
    }
  }
}
