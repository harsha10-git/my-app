import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  
  age:number =20;
  name: string = "HARSHA";
  phone: string = "+91" ;
  isInValid:boolean = false;

  submit(){
    alert("sumit clicked");
  }

  typing(){
    alert("typing")
  }

}
