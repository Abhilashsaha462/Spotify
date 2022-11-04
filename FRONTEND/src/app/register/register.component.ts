import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup

  constructor(private reg: DataserviceService,private route: Router) { 
    this.regForm=new FormGroup({email:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(25)]),
  password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
})
  }

  submit()
  {
    const regData1 = this.regForm.value;
    this.reg.storeData(regData1).subscribe(() => {
     alert("successfully registered");
     this.route.navigate(["/login"]);
    },error => {
      alert(error)
    });
  
  }

  ngOnInit(): void {}
  
}
