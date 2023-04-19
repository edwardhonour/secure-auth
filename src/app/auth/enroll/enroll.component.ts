import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {

  first_name: any;
  last_name: any;
  middle_initial: any;
  phone_mobile: any;
  email: any;

  constructor(private _dataService: DataService) { } 

  nextStep() {

  }
  

  postForm() {

    let formData: any = {
      email: this.email,
      first_name: this.first_name,
      middle_initial: this.middle_initial,
      last_name: this.last_name,
      phone_mobile: this.phone_mobile 
    }

    this._dataService.postRegister("post-register", formData).subscribe((data:any)=>{
      if (data?.error_code=="0") {
        localStorage.setItem('uid',data.user.uid)
        localStorage.setItem('role',data.user.role)
      } else {      
          alert('invalid email or password')
      }
    });
  }
}
