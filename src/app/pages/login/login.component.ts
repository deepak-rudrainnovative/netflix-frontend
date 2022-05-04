import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/core/services/utility.service';
import { UserService } from 'src/app/global/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  message:string="";

  constructor(private el: ElementRef,private userService:UserService,private router:Router,private utilService:UtilityService) { 
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)])
    })
  }

  ngOnInit(){
    
  }
  
  get formControl(){
    return this.loginForm.controls;
  }

  handleLogin(){
    if(this.loginForm.valid){
      this.userService.loginUser(this.loginForm.value).subscribe(resp=>{
        if(resp){
          let token:any=resp.headers.get('x-auth-token');
          localStorage.setItem('auth-token',token);
          this.utilService.$user.next(resp.body);
          this.utilService.isLogin.next(true);
          this.router.navigate(['/home']);
        }
      },(error:any)=>{
        this.message=error.error?.message;      
      })
    }else{
      for (const key of Object.keys(this.loginForm.controls)) {
        if (this.loginForm.controls[key].invalid) {
          const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
          invalidControl.focus();
          break;
       }
     }
    }
  }

}
