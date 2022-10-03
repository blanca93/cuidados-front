import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCuidadoComponent } from './features/add-cuidado/add-cuidado.component';
import { AddPersonaComponent } from './features/add-persona/add-persona.component';
import { PanelComponent } from './features/panel/panel.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'panel', pathMatch: 'full'
  },
  {
    path: 'panel', component: PanelComponent
  },
  {
    path: 'add-persona', component: AddPersonaComponent
  },
  {
    path: 'add-cuidado', component: AddCuidadoComponent
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
