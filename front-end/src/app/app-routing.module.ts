import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithlistComponent } from './header/withlist/withlist.component';
const routes: Routes = [
  { path:'', redirectTo:'',pathMatch:'full'},
  { path: 'withlist', component:WithlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
