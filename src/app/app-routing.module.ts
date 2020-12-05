import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OnBoardingComponent} from './on-boarding/on-boarding.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PackagesComponent} from './packages/packages.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'on-boarding', component: OnBoardingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
