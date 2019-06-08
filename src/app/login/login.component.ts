import { Component, OnInit } from '@angular/core';
import {MyServiceService as serv }  from '../my-service.service';
import {Router, RoutesRecognized} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [serv]
})
export class LoginComponent implements OnInit {
  mssg:string;
  firstname:string;
  pwd:any;

  constructor(private myservice:serv,private routes:Router) { }

  ngOnInit() {
  }

  public check( user:string,pwd:string){
    var output = this.myservice.checking(user,pwd);
    if(output == true ){

    this.routes.navigate(['/dashboard']);
    }
    else{
      this.mssg ="Login credentials are incorrect";
    }
  }

  public getData(){
    console.log(this.firstname,this.pwd);

  }

}
