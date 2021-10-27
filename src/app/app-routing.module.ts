import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConcertComponent } from './concert/concert.component';
import { LiveComponent } from './live/live.component';
import { LoginComponent } from './login/login.component';
import { OnlineComponent } from './online/online.component';
import { SignupComponent } from './signup/signup.component';
import { TicketComponent } from './ticket/ticket.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [ 
   {    path:'signup',    
  component:SignupComponent  },
  {     path:'login',
  component:LoginComponent
},
{     path:'about',
  component:AboutComponent
},
{
  path:'video',
  component:VideoComponent
},
{
  path:'concert',
  component:ConcertComponent,
  children: [
    {
      path:'ticket', component: TicketComponent
    },
    {
      path:'live', component: LiveComponent
    },
    {
      path:'online', component: OnlineComponent
    }
  ]
} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [ConcertComponent, 
  TicketComponent, LiveComponent,OnlineComponent ]

