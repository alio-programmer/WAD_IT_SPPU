import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signupcomponent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signupcomponent.component.html',
  styleUrl: './signupcomponent.component.css',
})
export class SignupcomponentComponent {
  signupuser: any[] = [];
  signupobj: any = {
    username: '',
    email: '',
    password: '',
  };
  ngOnInit() {
    const users = localStorage.getItem('users');
    if (users) {
      this.signupuser = JSON.parse(users);
    }
  }
  onSignup() {
    let flag: boolean = true;
    if (
      this.signupobj.username === '' ||
      this.signupobj.email === '' ||
      this.signupobj.password === ''
    ) {
      alert('please enter all credentials');
      flag = false;
    }
    if (flag) {
      this.signupuser.push(this.signupobj);
      localStorage.setItem('users', JSON.stringify(this.signupuser));
    }
    this.signupuser = [];
    window.location.reload();
  }
}
