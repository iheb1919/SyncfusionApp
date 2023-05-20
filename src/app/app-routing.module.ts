import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainContainerComponent } from './dashbord/main-container/main-container.component';
import { GuardService } from './services/guard.service';
import { HomeComponent } from './components/home/home.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:'full'},
  {path:"login",component:LoginComponent },
  {
    path: '', component:MainContainerComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'col', component: UpdateDataComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
