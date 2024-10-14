import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBaseComponent } from './public-base/public-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivateBaseComponent } from './private-base/private-base.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { GenderPipe } from './pipe/gender.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PublicBaseComponent,
    PrivateBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
