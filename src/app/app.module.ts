import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBaseComponent } from './public-base/public-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicBaseModule } from './public-base/public-base.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
