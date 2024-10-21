import { Component } from '@angular/core';

@Component({
  selector: 'app-newtasks',
  templateUrl: './newtasks.component.html',
  styleUrls: ['./newtasks.component.css']
})
export class NewtasksComponent {
  name: string = "";
  names: string[] = [];

  submit(){
    this.names.push(this.name);
  }

  delete(){
    this.names.pop();
    
  }



  //---------------------------------------



  studentName: string = "";
  studentAge = 0;

  students: any= [];


  create(){

    let student ={
      name: this.studentName,
      age: this.studentAge,
    }

    this.students.push(student);
  }


  
}
