import { Component, Input, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { User } from 'src/app/Models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  headers: String[] = ["Name", "UserName", "Email"];
  values: String[] = ["name", "username", "email"];

  users:User[] = [
    {
      name: "Alpha",
      username: "@alpha",
      email: "alpha@gmail.com"
    },
    {
      name: "Beta",
      username: "@beta",
      email: "beta@gmail.com"
    },
    {
      name: "Gamma",
      username: "@gamma",
      email: "gamma@gmail.com"
    }
  ];

  highlight: Boolean = false;

  enableHighlight(){
    this.highlight = true;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
