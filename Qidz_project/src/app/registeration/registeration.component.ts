import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as userDetails from '../userDetails.json';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  userdetails : any =(userDetails as any).default;
  details:any = [];
   register: FormGroup
   patternMatch:any = false;
   isSubmit:any=false;
   notMatch:any = false;
   userData:any;
  // registration : any ={fname:"", lname:"",email:"",phonenumber:"",male:"",gender:""}
  constructor(private formBuilder:FormBuilder) { 
    this.register = this.formBuilder.group({
   fname : ["", Validators.required],
   lname : ['', Validators.required],
   email :['',([Validators.required, Validators.email])],
   phonenumber :['',([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
   gender : ['',Validators.required],
   pwd : ['',([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
   rpwd : ['', Validators.required]
    }
    )
  }

  ngOnInit(): void {
    
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
       this.userData = {
        "fname":this.register.value.fname,
         "lname" : this.register.value.lname,
         "email":this.register.value.email,
         "phoneNumber":this.register.value.phonenumber,
         "gender":this.register.value.gender,
         "password":this.register.value.password
       }
       this.details.push(this.userData);
       console.log(this.details);
       
     }
}

Mustmatch(){
 console.log(this.register.controls['pwd'].value);
  if(this.register.controls['pwd'].value != this.register.controls['rpwd'].value ){
    this.notMatch = true;
  }else{
    this.notMatch = false;
  }
}

// Mustmatch(pwd:any, rpwd:any){
//   return (formGroup:FormGroup)=>{
//     const pwdControl = formGroup.controls[pwd];
//     const rpwdControl = formGroup.controls[rpwd];

//     if(rpwdControl.errors && !rpwdControl.errors['Mustmatch']){
//       return;
//     }

//     if(pwdControl.value !== rpwdControl.value){
//       rpwdControl.setErrors({Mustmatch : true});
//     }
//     else{
//       rpwdControl.setErrors(null);
//     }
//     return null;
//   }
// }
  // register(){
  //   var data =this.registration;
  //   console.log(this.registration);
  // }

}
