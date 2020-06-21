import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JiraffAdminComponent } from './comps/jiraff-admin/jiraff-admin.component';
import { JiraffPageComponent } from './comps/jiraff-admin/jiraff-page/jiraff-page.component';
import { JiraffItemComponent } from './comps/jiraff-admin/jiraff-item/jiraff-item.component';
import { JiraffDetailsComponent } from './comps/jiraff-admin/jiraff-details/jiraff-details.component';
import { JiraffLableComponent } from './comps/jiraff-admin/jiraff-lable/jiraff-lable.component';

@NgModule({
  declarations: [
    AppComponent,
    JiraffAdminComponent,
    JiraffPageComponent,
    JiraffItemComponent,
    JiraffDetailsComponent,
    JiraffLableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
