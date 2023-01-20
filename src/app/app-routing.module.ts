import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'', redirectTo: 'services', pathMatch: 'full'},
  {path:'services', component: HomeComponent},
  {path:'news', component: NewsComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'map', component: MapComponent},

  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
