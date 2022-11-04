import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data1serviceService } from '../data1service.service';

import { DataserviceService } from '../dataservice.service';
import { reg } from '../reg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  Login:FormGroup
  user:reg=new reg();
  constructor(private auth: DataserviceService,private route:Router, private song: Data1serviceService) { 
    this.Login=new FormGroup({email:new FormControl('',[Validators.required,customValid1]),
  password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
})
  }

 submit()
  {   
      //   const checkData1 = this.Login.value;
      //   this.auth.checkData(checkData1).subscribe(
      //     ()=>{
      //     alert("Login Successful");
      //     // this.Login.reset();
      //     // this.song.setemail(checkData1.email);
      //     this.route.navigate(["/spotify"])
      // },
      //     ()=>{
      //       alert("Email or Password invalid");
      //       this.route.navigate(["/register"])
      //     })

      console.log("form is submitted");
      if ((this.Login.value.email != '' && this.Login.value.password != '') && (this.Login.value.email != null && this.Login.value.password != null)) {
        console.log("Form Eligble To Submit")
        this.user.email=this.Login.value.email!;
        this.user.password=this.Login.value.password;
        // Token Generate
        this.auth.checkData(this.user).subscribe(
          (response:any) => {
            // if token generated successfully
            console.log("token login ",response.token);
            this.auth.loginUser(response.token, this.user.email);
            this.route.navigate(['/spotify']);
          },
          error => {
            // if error occurs
            console.log(error);
          }
        )
      } else {
        console.log("Fields Are Empty")
      }
  }

  ngOnInit(): void {
    this.Login.reset();
  }
 
}

export function customValid1(control:AbstractControl)
{
  if(control.value&&control.value.match("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$"))
  {
    return null;
  }
  else{
    return { myError1:false}
  }
}
