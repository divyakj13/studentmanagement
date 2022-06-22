import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from '../users';
import { User2 } from '../user2';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  userList: User2[] = [];
  editnum: number = 0;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.userList = this.listService.getUsers();
    
  }
  remove(id: number) {
    alert("Are you sure to remove details?");
    this.listService.removeUser(id);
    this.userList = this.listService.getUsers();
  }

}

