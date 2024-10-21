import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  banks:any = [];
  public page:number =1;
  term: string ="";
  column: string ="";
  order: string ="";

  public bankForm: FormGroup = new FormGroup({
    
    account_name: new FormControl(),
    Available_balance:new FormControl(),
    Account_number:new FormControl(),
    City:new FormControl(),
    Profile_picture:new FormControl(),

  });



  constructor(private _bankService:BankService){

    _bankService.getBank().subscribe(
      (data:any)=>{
        this.banks=data;

      },
      (err:any)=>{
        alert("Internal server console.error");
        
      }

    )
  }

  serach(){
    this._bankService.getFilteredBanks(this.term).subscribe(
      (data:any)=>{
        this.banks = data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  pagination(){
    this._bankService.getpagedBanks(this.page).subscribe(
      (data:any)=>{
        this.banks = data
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  sort(){
    this._bankService.getSortedBanks( this.column,this.order).subscribe(
      (data:any)=>{
        this.banks = data
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  submit(){
    console.log(this.bankForm);
    this._bankService.createAccount(this.bankForm.value).subscribe(
      (data:any)=>{
        alert("created succesfully!!!");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  delete(id:string){
    this._bankService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  


}
