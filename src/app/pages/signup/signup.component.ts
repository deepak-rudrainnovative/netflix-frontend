import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/global/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup;
  message:any="";

  constructor(private el: ElementRef,private router:Router,private userService:UserService) { 
    this.registerForm=new FormGroup({
      fullName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)])
    })
  }

  ngOnInit(): void {
    
  }
  
  get formControl(){
    return this.registerForm.controls;
  }

  handleRegister(){
    
    if(this.registerForm.valid){
      
        this.userService.signUpUser(this.registerForm.value).subscribe(resp=>{
          this.router.navigate(['/login']);
        },(error:any)=>{
          this.message=error.error.message;
        })
    }else{
      for (const key of Object.keys(this.registerForm.controls)) {
        if (this.registerForm.controls[key].invalid) {
          const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
          invalidControl.focus();
          break;
       }
     }
    }
  }


}
