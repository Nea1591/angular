import { Component,ViewEncapsulation} from '@angular/core';
import {JavaComponent} from './java/java.component';
import {PythonComponent} from './python/python.component';
import {DataComponent} from './data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class AppComponent {
  title = 'Learning Angular';
  num1=[];
  constructor(){
    this.num1 = [2,4,7,6,9];
  }


  public record:any =[
    {eName:'Neha',eAge:26, eCity:'Pune'},
    {eName:'Ritesh',eAge:45, eCity:'Pune'},
    {eName:'Salini',eAge:67, eCity:'Mumbai'}
    ]


}
