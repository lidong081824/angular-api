import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HelloComponent } from './pages/hello/hello.component';
import { AppComponent } from './app.component';
import { CoreRoutingModule } from './core/core-routing.module';
import { EmptyComponent } from './pages/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    // HelloComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
