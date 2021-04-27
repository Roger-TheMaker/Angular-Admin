import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CredentialInterceptor } from './interceptors/credential.interceptor';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PromptComponentComponent } from './prompt-component/prompt-component.component';
import { PwaService } from './services/pwa.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OverlayModule } from '@angular/cdk/overlay';
const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [AppComponent, PromptComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    PublicModule,
    OverlayModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi: true,
    },
    MatBottomSheet,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PwaService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private pwaService: PwaService) {
    this.pwaService.initPwaPrompt();
  }
}
