
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { SuperadminComponent } from './superadmin/superadmin.component';

const routes: Routes = [
  { path : 'superadmin', component : SuperadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


