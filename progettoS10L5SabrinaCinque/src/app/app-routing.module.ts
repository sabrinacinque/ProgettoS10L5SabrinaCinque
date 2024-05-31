import { UsersComponent } from './pages/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path:"completed",
    component: CompletedComponent,
    title:'Todo completed'
  },
  {
    path:"users",
    component: UsersComponent,
    title:'Users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
