import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import {Crystal} from 'crystis';

@Component({
  selector: 'app-sample3',
  imports: [CommonModule, FormsModule],
  templateUrl: './sample3.component.html',
  styleUrl: './sample3.component.css'
})

export class Sample3Component implements OnInit {

  cjsonString!: string;
  InvItems: Array<{ Id: string, Code: string, Name: string, Amount: number, Price: number }> = [];
  Dummy: Array<{ Text1: string }> = [];
 
  constructor(
    private cs: Crystal
  ) { }

  ngOnInit(): void {
    let tid = generateUUID();
    this.InvItems.push({"Id":tid,"Code":"BB8527","Name":"Bread","Amount":1, "Price": 2.15});
    tid = generateUUID();
    this.InvItems.push({"Id":tid,"Code":"SA482","Name":"Chocolate","Amount":2, "Price": 7.65});
    tid = generateUUID();
    this.InvItems.push({"Id":tid,"Code":"QCI24","Name":"Cheese","Amount":1, "Price": 2.08});
    tid = generateUUID();
    this.InvItems.push({"Id":tid,"Code":"MOX58","Name":"Juice","Amount":1, "Price": 3.55});
    tid = generateUUID();
    this.InvItems.push({"Id":tid,"Code":"PB154","Name":"Milk","Amount":3, "Price": 7.87});

    this.Dummy.push({ Text1: "Phoenixer inc." });
  }

  showReport() {
    this.cjsonString = JSON.stringify({
      InvItems: this.InvItems,
      Dummy: this.Dummy,
    });

    this.cs.tjsonstring = this.cjsonString;
    this.cs.tcode = "DEMO1";  // your account code
    this.cs.tucode = "0000";  // your user code
    this.cs.trptfilePath = '/assets/reports/InvoiceReport.rpt'; 

    // this.cs.tSortTableName = 'Users';
    // this.cs.tSortField1 = 'Country';
    // this.cs.tSortDirection = '1';  // '1' - ascending,  '2' - descending
   
    // this.cs.tSortField2 = '';
    // this.cs.tSortField3 = '';
    // this.cs.tSortDirection = '';  
    // this.cs.tReportFormula = '';  
    this.cs.tDEST = '0';  // '0' - on screen,  '1' - on paper

    this.cs.showReport();
  }
}


function generateUUID(): string {
  // Generate a UUID version 4 (randomly generated UUID)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    const random = (Math.random() * 16) | 0; // Generate a random integer between 0 and 15
    const value = char === 'x' ? random : (random & 0x3) | 0x8; // Use bitwise operations for specific UUID rules
    return value.toString(16); // Convert the integer to a hexadecimal string
  });
}

