import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/products/edit/edit.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product/add/:id",
    component: EditComponent
  },
  {
    path: "product/edit/:id",
    component: EditComponent
  },
  {
    path: "product/delete/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
