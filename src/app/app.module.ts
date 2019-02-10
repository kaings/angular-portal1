import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home.component';
import { DashboardComponent } from './views/dashboard.component';
import { SubmissionComponent } from './views/submission.component';
import { Comp1Component } from './components/comp-1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'submission', component: SubmissionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SubmissionComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
