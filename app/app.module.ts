import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ReactiveFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    RouterModule.forRoot([  
      { path: '', component: ReactiveFormComponent },  
      { path: 'reactive-form', component: ReactiveFormComponent }  
    ]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
