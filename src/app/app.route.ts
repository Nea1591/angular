import {Routes} from '@angular/router';
import {JavaComponent} from './java/java.component';
import {PythonComponent} from './python/python.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {AuthGuard} from './auth.guard';


export const route:Routes = [

    {path:'java' , component:JavaComponent},
    {path: 'python' ,component:PythonComponent},
    {path: 'lazy1', loadChildren:'./lazy/lazy.module#LazyModule'},
    {path: 'login', component:LoginComponent},
    {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent}
    


]

