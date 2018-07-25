import { AlertService } from './shared/alert-service.service';
import { BaseRestService } from './shared/base-rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatetimePopupModule } from 'ngx-bootstrap-datetime-popup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ToastrModule } from 'ngx-toastr';
import { TasksComponent } from './tasks/tasks.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    DatetimePopupModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [BaseRestService,  AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
