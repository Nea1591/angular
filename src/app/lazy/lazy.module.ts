import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import {Routes,RouterModule} from '@angular/router'

export const route:Routes =[
  {path: '',component: LazyComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
