import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'DetailFeedback',
  templateUrl: 'detail-feedback.html',
})
export class DetailFeedback {

   // Define FormBuilder /model properties
   public form     : FormGroup;
   public recordnama    : any;
   public recordtanggal  : any;
   public recordkomentar    : any;
	
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://tugas-akhir-web-mobile.16mb.com/tugasAkhir/";
today;
   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController)
   {
   this.today= new Date().toISOString();

      // Create form builder validation rules
      this.form = fb.group({
         "nama"      : ["", Validators.required],
         "tanggal"    : ["", Validators.required],
		 "komentar"      : ["", Validators.required]
      });
   }



   // Determine whether we adding or editing a record
   // based on any supplied navigation parameters
   ionViewWillEnter()
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Amend entry';
      }
	  
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Buat Feedback';
		 this.recordtanggal = new Date();
      }
   }



   // Assign the navigation retrieved data to properties
   // used as models on the page's HTML form
   selectEntry(item)
   {
      this.recordnama  = item.nama;
      this.recordtanggal = item.tanggal;
	  this.recordkomentar 	= item.komentar;
      this.recordID     = item.id;
   }



   // Save a new record that has been added to the page's HTML form
   // Use angular's http post method to submit the record data
   // to our remote PHP script (note the body variable we have created which
   // supplies a variable of key with a value of create followed by the key/value pairs
   // for the record data
   createEntry(nama, tanggal, komentar)
   {
      let body     : string   = "key=create&nama=" + nama + "&tanggal=" + tanggal + "&komentar=" + komentar,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "manageFeedback.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification(`Selamat! Komentar: ${nama} Berhasil ditambahkan`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }



   // Update an existing record that has been edited in the page's HTML form
   // Use angular's http post method to submit the record data
   // to our remote PHP script (note the body variable we have created which
   // supplies a variable of key with a value of update followed by the key/value pairs
   // for the record data
   updateEntry(nama, tanggal, komentar)
   {
      let body       : string = "key=update&nama=" + nama + "&tanggal=" + tanggal + "&komentar=" + komentar + "&recordID=" + this.recordID,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "manageFeedback.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm  =  true;
            this.sendNotification(`Selamat! Komentar: ${nama} was successfully updated`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }



   // Remove an existing record that has been selected in the page's HTML form
   // Use angular's http post method to submit the record data
   // to our remote PHP script (note the body variable we have created which
   // supplies a variable of key with a value of delete followed by the key/value pairs
   // for the record ID we want to remove from the remote database
   deleteEntry()
   {
      let name       : string = this.form.controls["nama"].value,
          body       : string    = "key=delete&recordID=" + this.recordID,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any    = new Headers({ 'Content-Type': type}),
          options    : any    = new RequestOptions({ headers: headers }),
          url        : any    = this.baseURI + "manageFeedback.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm     = true;
            this.sendNotification(`Selamat! Komentar: ${name} was successfully deleted`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }



   // Handle data submitted from the page's HTML form
   // Determine whether we are adding a new record or amending an
   // existing record
   saveEntry()
   {
      let nama   : string = this.form.controls["nama"].value,
          tanggal : string = this.form.controls["tanggal"].value,
		  komentar   : string = this.form.controls["komentar"].value;


      if(this.isEdited)
      {
         this.updateEntry(nama, tanggal, komentar);
      }
      else
      {
         this.createEntry(nama, tanggal, komentar);
      }
   }



   // Clear values in the page's HTML form fields
   resetFields() : void
   {
      this.recordnama    = "";
      this.recordtanggal  = "";
	  this.recordkomentar    = "";

   }



   // Manage notifying the user of the outcome
   // of remote operations
   sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }


}
