import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'shared/shared.module';
import { StoreModule } from 'store/store.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { AppInjector } from 'shared/abstracts/app-injector.service';
import { LoginService } from 'app/login/login.service';
import { LinkService } from 'shared/hateoas/link.service';
import { HomeComponent } from './home/home.component';
import { HomeNameComponent } from './home/home-name/home-name.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, HomeNameComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        StoreModule,
        NgxWebstorageModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [LinkService, LoginService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(@Inject(Injector) private injector: Injector) {
        AppInjector.setInjector(injector);
    }
}
