import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHouseComponent } from './list-house/list-house.component';
import { NotFoundComponent } from './not-found/not-found.component';


// Regra de rota A primeira é a página vazia, a última é página de erro e no meio fica as outras página, e ** significa qualquer palavra escrita errada após a /
const routes: Routes = [
  {path: '', component: ListHouseComponent},
  {path: 'home', component: ListHouseComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
