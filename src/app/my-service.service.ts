import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  public checking(uname:string,pwd:string){
    if(uname =='admin' && pwd =='123'){
      localStorage.setItem('username','admin');
      return true;
    }
    else {return false;}


  }
}
