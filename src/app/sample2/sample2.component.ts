import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import {Crystal} from 'crystis';

@Component({
  selector: 'app-sample2',
  imports: [CommonModule, FormsModule],
  templateUrl: './sample2.component.html',
  styleUrl: './sample2.component.css'
})
export class Sample2Component implements OnInit {
  cjsonString!: string;
  Users: Array<{ Id: string, Name: string, Town: string, Country: string }> = [];
  currentSortColumn: string = 'Id';
  isAscending: boolean = true;
  direction: string = 'ascending'

  optselected: string = 'optscreen';
  chkselected: boolean = false;

  constructor(
    private cs: Crystal
  ) { }

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers) {
      this.Users = JSON.parse(storedUsers);

      const storedchkslctd = localStorage.getItem('chkslctd');
      this.chkselected = storedchkslctd ? storedchkslctd === '1' : false;

      const storedoptctd = localStorage.getItem('optctd');
      this.optselected = storedoptctd === '1' ? 'optscreen' : 'optpaper';
   
      const storeSortColumn = localStorage.getItem('currentSortColumn');
      this.currentSortColumn = storeSortColumn ?? 'Id';

      const storeddirection = localStorage.getItem('direction');
      this.direction = storeddirection ?? 'ascending';
    } else {
      // Initialize with default data
      this.Users = [
        { Id: 'ABDEN', Name: 'Maria Weiss', Town: 'Berlin', Country: 'Germany' },
        { Id: 'AXEIS', Name: 'Pedro Alvarez', Town: 'Mexico D.F.', Country: 'Mexico' },
        { Id: 'BENOI', Name: 'Anna Tóth', Town: 'Szeged', Country: 'Hungary' },
        { Id: 'CAZLE', Name: 'Jan Eriksson', Town: 'Mannheim', Country: 'Sweden' },
        { Id: 'DRFOS', Name: 'Giulia Donatelli', Town: 'Milano', Country: 'Italia' }
      ];
      this.saveUsersToLocalStorage();
    }
  }

  showReport() {
    this.saveUsersToLocalStorage();

    this.cjsonString = JSON.stringify({
      Users: this.Users
    });

    this.cs.tjsonstring = this.cjsonString;
    // this.cs.tcode = 'FRUZ'; // Replace with dynamic value
    // this.cs.tucode ='F6FD'; 
    this.cs.tcode = "DEMO1";  // your account code
    this.cs.tucode = "0000";  // your user code
    this.cs.trptfilePath = '/assets/reports/CustomerReport1.rpt'; 

    this.cs.tSortTableName = 'Users';
    this.cs.tSortField1 = this.currentSortColumn;
    if (this.direction == 'ascending') {
      this.cs.tSortDirection = '1'
    } else{
      this.cs.tSortDirection = '2'
    }   

    // this.cs.tSortField2 = '';
    // this.cs.tSortField3 = '';
    // this.cs.tSortDirection = '';
    // this.cs.tReportFormula = '';  // '1' - ascending,  '1' - descending
    // this.cs.tDEST = '0';  // '0' - on screen,  '1' - on paper

    if (this.optselected == 'optscreen') {
      this.cs.tDEST = '0';
    }
    else {
      this.cs.tDEST = '1';
    }

    if (this.chkselected == true) {
      this.cs.tReportFormula = "{Users.Country} = 'Germany'";
    } else {
      this.cs.tReportFormula = "";
    }

    this.cs.showReport();
  }

  saveUsersToLocalStorage(): void {
    localStorage.setItem('Users', JSON.stringify(this.Users));
  }

  sortTable(column: string): void {
    // Toggle sort order if the same column is clicked again
    if (this.currentSortColumn === column) {
      this.isAscending = !this.isAscending;
      if (this.isAscending){
        this.direction = 'ascending';
        this.cs.tSortDirection = '1';
      } else{
        this.direction = 'descending';
        this.cs.tSortDirection = '2';
      }
    } else {
      this.isAscending = true;
      this.direction = 'ascending';
      this.currentSortColumn = column;
    }

    // Sort the Users array
    this.Users.sort((a, b) => {
      const valueA = a[column as keyof typeof a];
      const valueB = b[column as keyof typeof b];
      
      if (valueA < valueB) return this.isAscending ? -1 : 1;
      if (valueA > valueB) return this.isAscending ? 1 : -1;
      return 0;
    });

    localStorage.setItem('currentSortColumn',  this.currentSortColumn);
    localStorage.setItem('direction',  this.direction);
  }

  addRow(id: string, name: string, town: string, country: string, inputs: HTMLInputElement[]): void {
    if (id && name && town && country) {
      // Add the new row to the Users array
      this.Users.push({ Id: id.trim(), Name: name.trim(), Town: town.trim(), Country: country.trim() });
      // Save updated Users array to localStorage
      this.saveUsersToLocalStorage();
      // Clear the input fields
      inputs.forEach(input => input.value = '');
    } else {
      alert('All fields are required!');
    }
  }
  
  deleteRow(index: number): void {
    if (confirm('Are you sure you want to delete this row?')) {
      this.Users.splice(index, 1);
      this.saveUsersToLocalStorage();
    }
  }

  formulaclick(): void {
    localStorage.setItem('chkslctd',  this.chkselected ? '0' : '1');
  }

  optclick(index: number): void {
    localStorage.setItem('optctd',  index.toString());

  }
}


