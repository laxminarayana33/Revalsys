import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
registration!:FormGroup;


constructor(
  private fb: FormBuilder
){}
// inIt(){
//   this.fb =
// }

 register(){

 }

}
