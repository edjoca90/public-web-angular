import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

}
