import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Data1serviceService } from '../data1service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userData: FormGroup
  constructor(private user: Data1serviceService, private route: Router) {
    this.userData = new FormGroup({
      userName : new FormControl(''),
      email : new FormControl(''),
      phoneNumber : new FormControl(''),
      password : new FormControl('')
      })
   }

   saveData()
   {
     const regData2 = this.userData.value;
     this.user.userData(regData2).subscribe(() => {
      alert("Registered successfully");
      // this.user.setemail(regData2.email);
      console.log(this.user.getemail()+"User Email");
      this.userData.reset();
      this.route.navigate(["/login"]);
     },error => {
       alert(error)
     });
   
   }
 

  ngOnInit(): void {
    
  }

}
