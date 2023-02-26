import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './localize/translate-server.loader';
import { TransferState } from '@angular/platform-browser';
import { routes } from './app-routing.module';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeServerLoaderFactory } from './localize/localize-server.loader';
import { Location } from '@angular/common';
import { httpInterceptorProviders } from './shared/services/interceptor';
import { CookieModule } from '@gorniv/ngx-universal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeServerLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, TransferState],
      },
      initialNavigation: true,
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
