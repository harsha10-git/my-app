import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {


  students:any = [];
  public page: number =1;
  term:string  = "";
  coloumn:string = "";
  order:string = "";


  constructor(private _studentsService:StudentsService){};


  public studentsForm:FormGroup=new FormGroup({
    Name:new FormControl(),
    Phone:new FormControl(),
    City:new FormControl(),
    DOB:new FormControl(),
    Profile_Picture:new FormControl(),
    Email:new FormControl(),
    School_logo:new FormControl(),
    School_name:new FormControl(),
    School_city:new FormControl(),
    School_pin:new FormControl(),

  })

  submit(){
    console.log(this.studentsForm);
  }

}
