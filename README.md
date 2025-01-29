# crystisAngular Example Application

This repository demonstrates how to integrate Crystal Reports into Angular applications using crystis for Angular, 
a powerful tool designed for Angular developers.

About crystis for Angular
-------------
crystis is an Angular library that allows you to display Crystal Reports directly within your Angular applications.   
It’s the only known solution globally that bridges the gap between Crystal Reports and Angular frameworks, making it a game-changer 
for developers looking to incorporate advanced reporting capabilities.

**No Additional Installations Required:**  
One of the key benefits of crystis is that **you do not need to have Crystal Reports or Crystal Reports Runtime installed** on your system. Everything required to generate and display reports is handled seamlessly by the library, making the setup lightweight and hassle-free.

Check out the live demo of **crystisAngular** [here](https://www.siteknower.com/sample1).

Features
--------
- Display Crystal Reports seamlessly in Angular applications.
- Quick and straightforward setup.
- No need to install Crystal Reports or Crystal Reports Runtime.
- Example components for integration:
  1. Basic sample
     - Example of a basic Crystal Report 
  3. Full sample
     - In this example you can see how to set up a Crystal Report with sorting, filters and destination.
  5. Invoice Report
     - Example of a Crystal Report displaying data from two tables

Getting Started
---------------

Prerequisites
-------------
1. Angular CLI version 19.1.3 (or any version compatible with Angular).
2. Access to an account at siteknower.com (https://www.siteknower.com) to obtain your account code and user code.
   - Demo account code (`DEMO1`) and user code (`0000`) are used in these examples to display demo data.
   - First 30 days are free!
4. **No need to install Crystal Reports or its runtime. crystis takes care of everything.**

### Configuring MIME Types for .rpt Files

To ensure `.rpt` files are served correctly by your web server when using `crystis`, you may need to configure the MIME type for `.rpt` files. In some cases, the web server already recognizes `.rpt` files, and no additional configuration is required. However, if reports fail to load, adding the MIME type is recommended.

- **For IIS**: Add the `.rpt` MIME type to the `web.config` file:
    ```xml
    <configuration>
      <system.webServer>
        <staticContent>
          <mimeMap fileExtension=".rpt" mimeType="application/octet-stream" />
        </staticContent>
      </system.webServer>
    </configuration>
    ```
- **For Apache**: Add the following to your server configuration or `.htaccess` file:
    ```apache
    AddType application/octet-stream .rpt
    ```
- **For NGINX**: Add the following to your `mime.types` file or NGINX configuration:
    ```nginx
    types {
        application/octet-stream rpt;
    }
    ```

**Note:** While some servers may handle `.rpt` files without additional configuration, explicitly adding the MIME type ensures compatibility and avoids potential issues.


Installation
------------
1. Clone this repository:
   git clone https://github.com/siteknower/crystisAngular.git
   cd CrystisAngular

2. Install dependencies:
   
   npm install  
   **npm install crystis**

Setting Up crystis in a New Angular Project
-------------------------------------------
1. Add the following to your app.config.ts:
   
   import { provideHttpClient } from '@angular/common/http';  
   export const appConfig: ApplicationConfig = {
       providers: [
         provideHttpClient(),
       ]
   };

3. Place your .rpt files (e.g., CustomerReport1.rpt, InvoiceReport.rpt) in the public/reports folder.

4. Use the following demo codes for testing:

   this.cs.tcode = "DEMO1";  // your account code  
   this.cs.tucode = "0000";  // your user code

Quick Start Example
-------------
Below is a simple example demonstrating how to integrate crystis into your Angular application.
 ```bash
import { Component, OnInit } from '@angular/core';
import { Crystal } from 'crystis';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  cjsonString!: string;
  Users: Array<{ Id: string, Name: string, Town: string, Country: string }> = [];

  constructor(
    private cs: Crystal
  ) { }

  ngOnInit(): void {
    this.Users.push({ "Id": "ABDEN", "Name": "Maria Weiss", "Town": "Berlin", "Country": "Germany" });
    this.Users.push({ "Id": "AXEIS", "Name": "Pedro Alvarez", "Town": "México D.F.", "Country": "Mexico" });
    this.Users.push({ "Id": "BENOI", "Name": "Anna Tóth", "Town": "Szeged", "Country": "Hungary" });
    this.Users.push({ "Id": "CAZLE", "Name": "Jan Eriksson", "Town": "Mannheim", "Country": "Sweden" });
    this.Users.push({ "Id": "DRFOS", "Name": "Giulia Donatelli", "Town": "Milano", "Country": "Italia" });
  }

  showReport() {
    this.cjsonString = JSON.stringify({
      Users: this.Users
    });

    this.cs.tjsonstring = this.cjsonString;
    this.cs.tcode = "DEMO1";  
    this.cs.tucode = "0000";  
    this.cs.trptfilePath = '/reports/CustomerReport1.rpt';
    this.cs.tDEST = '0';  

    this.cs.showReport();
  }
}
 ```
Key Points:
1. Data Preparation: Populate your array with data to be used in the report.
2. Report Configuration: Set the following properties for crystis:
    - tjsonstring: JSON data passed to the report.
    - tcode: Your account code.
    - tucode: Your user code.
    - trptfilePath: Path to your .rpt file.
    - tDEST: Output destination ('0' for on-screen, '1' for on-printer).
3. Display the Report: Call this.cs.showReport() to render the report.


File Placement for .rpt Files
-------------
- A For Angular projects using Angular CLI 6 and newer, place the .rpt files in the public/reports folder.
- For older Angular versions (before Angular CLI 6), place the .rpt files in the /assets/reports folder.
  
Running the Application
-----------------------
Start the development server:
   ng serve

Access the example app at http://localhost:4200.

Repository Usage
----------------
Feel free to use this repository as:
- A guide to integrate Crystal Reports into your Angular project.
- A base for building your own reporting solutions.

Advertising crystis
-------------------
This repository showcases the unique capabilities of crystis. Its unparalleled ability to integrate Crystal Reports 
with Angular makes it a standout tool in the development landscape.

License
-------
This repository is licensed under MIT License (LICENSE).

## About Us
This project is maintained by **[Siteknower](https://www.siteknower.com)**. For more information about our services, please visit our website.

## Contact
If you have questions, feel free to reach out through our [contact page](https://www.siteknower.com/contact).
