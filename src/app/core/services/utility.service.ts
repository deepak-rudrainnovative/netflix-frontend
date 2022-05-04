import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  $user=new BehaviorSubject<any>({_id:'',fullName:'',email:''});
  isLogin = new BehaviorSubject<boolean>(this.hasToken());
  videos= new BehaviorSubject<any>([]);
  constructor() { }

  private hasToken() : boolean {
    return !!localStorage.getItem('auth-token');
  }
  
}
