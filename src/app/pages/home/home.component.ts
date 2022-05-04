import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/global/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) {
    
   }

  ngOnInit(): void {
    this.userService.getUser()
  }

}