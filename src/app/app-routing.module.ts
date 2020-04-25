import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
 
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LocationComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path:'home',
        component: HomeComponent
      }
    ],
  }, 
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
