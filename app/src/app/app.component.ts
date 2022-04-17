import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  registration!:FormGroup;
  registarData:  any;
  errorMessage!: string;
  showSpinner = false;

constructor( private fb: FormBuilder){

  this.registration = this.fb.group({
    employeeid:['', Validators.required],
    name:['', Validators.required],
    email:['', Validators.required],
    salary:['', Validators.required],
    phonenumber:['', Validators.required],
    qualification:['', Validators.required],
    designation:['', Validators.required],
    gender:['', Validators.required],
  })
  this.registarData=[];
}
 register(){
   (  err: { error: { msg: { message: string; }[]; message: string; }; })=>{
    this.showSpinner= false;
    console.log(err);
  }
 }

 onSubmit(){
   this.registarData.push(this.registration.value);
   this.registration.reset();
  // console.log('')
 }
reset(){
  this.registration.reset();
}
edit(){
  this.registarData.edit();
}
remove(){
  this.registarData.remove();
}
}
