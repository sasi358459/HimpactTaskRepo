import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HTTPService } from '../http.service';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';

@Component({
  selector: 'app-get-api-data',
  templateUrl: './get-api-data.component.html',
  styleUrls: ['./get-api-data.component.css']
})
export class GetApiDataComponent implements OnInit {
  data:any[]=[]
  constructor(private api:HTTPService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getApiValue()
  }

  getApiValue(){
    this.api.getUser().subscribe((res:any)=>{
      this.data=res.data.sort((a:any,b:any)=>{
        if(a.first_name<b.first_name){
          return -1
        }if(a.first_name>b.first_name){
          return 1
        }
        return 0
      })
    },err=>{
      alert(err)
    })
  }
  getApiById(id:any){
    this.api.getUserById(id).subscribe(res=>{
      console.log(res);
    this.dialog.open(ViewDialogComponent,{data:res,width:'500px'})
    })
  }

  onPreview(select:any){
    this.getApiById(select.value)
  }
}
