import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRootPage } from './app-root.page';

const routes: Routes = [
  {
    path: 'app-root',
    component: AppRootPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'reading',
        loadChildren: () => import('../reading/reading.module').then(m => m.ReadingPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: 'app-root/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app-root/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRootPageRoutingModule {}
