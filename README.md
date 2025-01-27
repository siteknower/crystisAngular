# crystisAngular Example Application

This repository demonstrates how to integrate Crystal Reports into Angular applications using crystis, 
a powerful tool designed for Angular developers.

About crystis
-------------
crystis is an Angular library that allows you to display Crystal Reports directly within your Angular applications. 
It’s the only known solution globally that bridges the gap between Crystal Reports and Angular frameworks, making it a game-changer 
for developers looking to incorporate advanced reporting capabilities, to our knowledge.

Check out the live demo of **crystis** [here](https://www.siteknower.com/sample1).

Features
--------
- Display Crystal Reports seamlessly in Angular applications.
- Quick and straightforward setup.
- No need to install Crystal Reports or Crystal Reports Runtime.
- Example components for integration:
  1. Customer Report
  2. Invoice Report
  3. Demo Report

Getting Started
---------------

Prerequisites
-------------
1. Angular CLI version 19.1.3 (or any version compatible with Angular).
2. Access to an account at siteknower.com (https://www.siteknower.com) to obtain your account code and user code.
   - Demo account code (DEMO1) and user code (0000) are used in these examples to display demo data.
   - First 30 days are free!
4. **No need to install Crystal Reports or its runtime. crystis takes care of everything.**

Installation
------------
1. Clone this repository:
   git clone https://github.com/siteknower/StnwAngular.git
   cd StnwAngular

2. Install dependencies:
   
   npm install
   
   npm install crystis

Setting Up crystis in a New Angular Project
-------------------------------------------
1. Add the following to your app.config.ts:
   import { provideHttpClient } from '@angular/common/http';

   export const appConfig: ApplicationConfig = {
     providers: [
       provideHttpClient(),
     ]
   };

2. Place your .rpt files (e.g., CustomerReport1.rpt, InvoiceReport.rpt) in the public/reports folder.

3. Use the following demo codes for testing:
   this.cs.tcode = "DEMO1";  // your account code
   this.cs.tucode = "0000";  // your user code

File Placement for .rpt Files
-------------
- A For Angular projects using Angular CLI 6 and newer, place the .rpt files in the public/reports folder.
- For older Angular versions (before Angular CLI 6), place the .rpt files in the /assets/reports folder.
- 
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
