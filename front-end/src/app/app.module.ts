import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { WithlistComponent } from './header/withlist/withlist.component';
import { SosanhComponent } from './header/sosanh/sosanh.component';
import { AuthComponent } from './header/auth/auth.component';
import { GiohangComponent } from './header/giohang/giohang.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BannerComponent,
    WithlistComponent,
    SosanhComponent,
    AuthComponent,
    GiohangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }