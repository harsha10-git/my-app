import { Component, createComponent, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { NewtasksComponent } from './newtasks/newtasks.component';
import { DiceComponent } from './dice/dice.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { AmazonComponent } from './amazon/amazon.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
 {path: 'dashboard',component:DashboardComponent,children:[
  {path:'Home', component:HomeComponent},
  {path:'Welcome', component:WelcomeComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'calculator', component:CalculatorComponent},
  { path: 'Rectangle', component: RectangleComponent},
  { path: 'Circle', component: CircleComponent},
  { path: 'BMI', component: BMIComponent},
  { path: 'dice', component: DiceComponent},
  { path:'directives', component: DirectivesComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'tasks', component:NewtasksComponent},
  { path:'flipkart', component:FlipkartComponent},
  { path: 'higer-order',component:HigherOrderComponent},
  { path: 'amazon', component:AmazonComponent},
  { path: 'employees', component:EmployeesComponent},
  { path: 'vehicle', component:VehicleComponent},
  { path:'bank', component:BankComponent},
  { path:'createvehicle',component:CreateVehicleComponent},
  { path:'students',component:StudentsComponent},
  { path:'create-user',component:CreateUserComponent},
  { path:'vehicle-details/:id',component:VehicleDetailsComponent},
  { path:'student-progress',component:StudentProgressComponent},
  {path:'student-details',component:StudentDetailsComponent}


  

 ]},
 { path:'', component:LoginComponent},
 { path:'**', component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
