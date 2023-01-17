import {RouterModule} from "@angular/router";

export const Route = RouterModule.forRoot([
  {path: '', pathMatch: 'full', loadChildren: ()=> import('./features/home/home.module').then(m=>m.HomeModule)},
  {path: 'about', pathMatch: "full", loadChildren: ()=> import('./features/about/about.module').then(m=>m.AboutModule)},
  {path: 'projects', pathMatch: 'full', loadChildren: ()=> import('./features/projects/projects.module').then(m=>m.ProjectsModule)},
  {path: 'favourites', pathMatch: 'full', loadChildren: ()=> import('./features/favourites/favourites.module').then(m=>m.FavouritesModule)},
  {path: 'cart', pathMatch: 'full', loadChildren: ()=> import('./features/cart/cart.module').then(m=>m.CartModule)}
]);
