import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HTTPService } from '../http.service';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent implements OnInit,AfterViewChecked,AfterViewInit {
ApiValue:any
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private api:HTTPService) {
    console.log(data);
   }

  ngOnInit(): void {
  }


  ngAfterViewChecked(): void {

  }
  ngAfterViewInit(): void {

  }
}
