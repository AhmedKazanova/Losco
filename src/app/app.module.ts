import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { translateBrowserLoaderFactory } from './localize/translate-browser.loader';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './localize/localize-browser.loader';
import { Location } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { httpInterceptorProviders } from './shared/services/interceptor';
import { CookieModule } from '@gorniv/ngx-universal';
import { LayoutsModule } from './shared/components/layouts/layouts.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CookieModule.forRoot(),
    LayoutsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient, TransferState],
      },
      initialNavigation: true,
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
