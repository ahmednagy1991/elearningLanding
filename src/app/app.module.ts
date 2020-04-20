import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangToggleComponent } from './components/lang-toggle/lang-toggle.component';
import { LocationComponent } from './components/location/location.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AgmCoreModule } from '@agm/core'; 

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LangToggleComponent,
    LocationComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkcD1poGSDHoHf8HwQRbCCYI5KQAhBQno'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
