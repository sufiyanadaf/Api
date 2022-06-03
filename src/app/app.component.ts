import{SharedService} from './shared/shared.service'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Practice-2';
  result: any;
  data: any = [];
  Array: any = [];
  Responce: any = [];
  Array2: any=[]
  Array1: any=[];

  constructor(private api: SharedService ){

  }
  ngOnInit(): void {
   this.recieveUserInformation1();
   this.recieveUserInformation2();
  }
  recieveUserInformation1(){
    this.api.getUserInformation1().subscribe((Response:any)=>{
      console.log(Response.data)
      this.Array1 = Response.data;
      console.log(this.Array)
      
    })
  }
    recieveUserInformation2(){
    this.api.getUserInformation2().subscribe((Response:any)=>{
      console.log(Response.data)
      this.Array2 = Response.data;
      console.log(this.Array)
      
    })
  }
}
  




