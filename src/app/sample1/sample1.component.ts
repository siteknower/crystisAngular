import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {Crystal} from 'crystis';

@Component({
  selector: 'app-sample1',
  imports: [CommonModule],
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.css'
})
export class Sample1Component implements OnInit {
  cjsonString!: string;
  Users: Array<{ Id: string, Name: string, Town: string, Country: string }> = [];

  constructor(
    private cs: Crystal
  ) { }

  ngOnInit(): void {
    this.Users.push({"Id":"ABDEN","Name":"Maria Weiss","Town":"Berlin","Country":"Germany"});
    this.Users.push({"Id":"AXEIS","Name":"Pedro Alvarez","Town":"México D.F.","Country":"Mexico"});
    this.Users.push({"Id":"BENOI","Name":"Anna Tóth","Town":"Szeged","Country":"Hungary"});
    this.Users.push({"Id":"CAZLE","Name":"Jan Eriksson","Town":"Mannheim","Country":"Sweden"});
    this.Users.push({"Id":"DRFOS","Name":"Giulia Donatelli","Town":"Milano","Country":"Italia"});   
  }

  showReport() {
    this.cjsonString = JSON.stringify({
      Users: this.Users
    });

    this.cs.tjsonstring = this.cjsonString;
    this.cs.tcode = "DEMO1";  // your account code
    this.cs.tucode = "0000";  // your user code
    this.cs.trptfilePath = '/reports/CustomerReport1.rpt'; 

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

  showReport2() {
    this.cjsonString = JSON.stringify({
      Users: this.Users
    });

    this.cs.tjsonstring = this.cjsonString;
    this.cs.tcode = "DEMO1";  // your account code
    this.cs.tucode = "0000";  // your user code
    this.cs.trptfilePath = '/reports/CustomerReport1.rpt'; 

    // this.cs.tSortTableName = 'Users';
    // this.cs.tSortField1 = 'Country';
    // this.cs.tSortDirection = '1';  // '1' - ascending,  '2' - descending
   
    // this.cs.tSortField2 = '';
    // this.cs.tSortField3 = '';
    // this.cs.tSortDirection = '';  
    // this.cs.tReportFormula = '';  
    this.cs.tDEST = '0';  // '0' - on screen,  '1' - on paper

    this.cs.getReportUrl().then((x) => {
      if (x?.trim()) {  // Checks for null/undefined and empty string after trimming whitespace
        window.location.href = x;
      } else {
        alert('Failed to get report URL: Empty response');
      }
    }).catch((error) => {
      console.error(error);
      // Add your preferred error handling here, e.g.:
      // this.showErrorMessage('Unable to generate report URL');
      alert('Unable to generate report URL');
    });
    
  }


 

}

