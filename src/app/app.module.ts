import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module'; //router 另外設定
import { NgbPopoverModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; //google重構的bootstrap 解決bootstrap popover/tooltip無法正常運作的問題

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { PaintComponent } from './paint/paint.component';
import { ArticleComponent } from './user/article/article.component';
import { PopoverComponent } from './popover/popover.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    CounterComponent,
    NavbarComponent,
    FooterComponent,
    AutoCompleteComponent,
    PaintComponent,
    ArticleComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModalModule,
    NgbPopoverModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
