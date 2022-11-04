import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SongComponent } from './song/song.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"",
    component:HeaderComponent,
    children:[
      {
        path:"",
        component:UserComponent,
        pathMatch:'full'
      },
      {
        path:"user",
        component:UserComponent
      },
      {
          path:"login",
          component:LoginComponent
      },
      {
        path:"home",
        component:HomeComponent
      }
      // {
      //   path:"user",
      //   component:UserComponent
      // }
    ]
  },
  {
    path:"spotify",
    component:SpotifyComponent,
    canActivate: [LoginGuard],
    children:[
      {
        path:"song",
        component:SongComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
