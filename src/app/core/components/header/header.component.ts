import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/global/services/user.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean=false;
  constructor(public utilityService:UtilityService,private userService:UserService) { }

  ngOnInit(): void {
    this.utilityService.isLogin.subscribe(resp=>{
      this.isLogin=resp;
    })
  }

  logout(){
    this.userService.logout();
  }

}
