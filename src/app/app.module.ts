import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemNavbarComponent } from './system-navbar/system-navbar.component';
import { SystemSidebarComponent } from './system-sidebar/system-sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    SystemNavbarComponent,
    SystemSidebarComponent,
    // Outros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
