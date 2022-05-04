import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode'
import { UtilityService } from 'src/app/core/services/utility.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string=environment.api_url;
  
  constructor(private http:HttpClient,private utilityService:UtilityService,private router :Router) {

   }
  loginUser(credentials:any){
    return this.http.post(this.apiUrl+'/user/login',credentials,{observe:'response'}).pipe(catchError(this.handleError));
  }

  getUser(){
    let token:any=localStorage.getItem('auth-token')
    let user:any=token &&  jwtDecode(token);
    if(user){
      this.http.get(this.apiUrl+'/user/'+user?._id).subscribe((resp:any)=>{
        this.utilityService.$user.next(resp)
        this.utilityService.isLogin.next(true);
      });
    }
  }


  signUpUser(userData:any){
    return this.http.post(this.apiUrl+'/user/signup',userData,{observe:'response'}).pipe(catchError(this.handleError));
  }

  logout(){
    localStorage.removeItem('auth-token');
    this.utilityService.isLogin.next(false);
    this.router.navigate(['/login']);
  }

  public handleError(error: HttpErrorResponse){
      return throwError(error);
  }
  
}
