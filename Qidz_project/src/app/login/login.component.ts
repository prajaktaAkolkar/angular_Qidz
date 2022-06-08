import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
login:FormGroup
isSubmmit:any = false;

  constructor(private formBuilder:FormBuilder) {
     this.login = this.formBuilder.group({
      email:["",Validators.required],
      
      password:["",Validators.compose([Validators.required, Validators.maxLength(6)])]
    
     }) 
   }

  ngOnInit(): void {


  }

get f(){
  return this.login.controls;
}

submit(){
  this.isSubmmit = true
  if(this.login.invalid){
    return
     }else{
       
       console.log(this.login.value);
       
     }
}
  // loginbtn(){
  //   var data=this.login;
  //   console.log(this.login.value);
  // }
}
