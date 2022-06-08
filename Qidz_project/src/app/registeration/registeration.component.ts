import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
   register: FormGroup
   isSubmit:any=false;
  // registration : any ={fname:"", lname:"",email:"",phonenumber:"",male:"",gender:""}
  constructor(private formBuilder:FormBuilder) { 
    this.register = this.formBuilder.group({
   fname : ["", Validators.required],
   lname : ['', Validators.required],
   email :['',Validators.required],
   phonenumber :['',Validators.required],
   gender : ['',Validators.required],
   pwd : ['',Validators.required],
   rpwd : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    // this.register.controls['fname'].setValue('Daksh')
    
  }

  get val(){
    return this.register.controls
  }


submit(){
  this.isSubmit = true
  if(this.register.invalid){
    return
    
     }else{
       console.log(this.register.value);
       
     }
}
  // register(){
  //   var data =this.registration;
  //   console.log(this.registration);
  // }

}
