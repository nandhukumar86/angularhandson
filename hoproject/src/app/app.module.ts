import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

import {MatTreeModule} from '@angular/material/tree';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { TreeViewModule } from '@progress/kendo-angular-treeview';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentcompComponent,
    ChildcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTreeModule,
    FormsModule,
    ButtonsModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
