import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  showSpinner = false;
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  openSnackBar(message: string, action: string) {
    //this.showSpinner = true
    this._snackBar.open(message, action, {
      duration: 5000,
    });
    
    //this.showSpinner = false;
  }


}
