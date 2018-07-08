import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }
usersList=[
  {age:12, name:'user1', isMarried:false},
  {age:34, name:'user1', isMarried:true},
  {age:54, name:'user1', isMarried:true},
  {age:15, name:'user1', isMarried:false},
  {age:37, name:'user1', isMarried:true}

]
  ngOnInit() {
  }

}
