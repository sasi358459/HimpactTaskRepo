import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetApiDataComponent } from './get-api-data/get-api-data.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'getApi'},
  {path:'getApi',component:GetApiDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
