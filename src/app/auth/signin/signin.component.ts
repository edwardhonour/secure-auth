import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

      step: any = '1';
      username: any = '';
      password: any = '';
      otp: any = '';
      qr_url: any = '';

      email: any;

      constructor(private _dataService: DataService) { }

      nextStep() {
        if (this.step=='3') { 
          // Verify OTP Code 
        }
        if (this.step=='2') { 
          // Verify Password 
        }
        if (this.step=='1') { 
          this.step='2';
        }
      }

      postForm() {
  
        this._dataService.postLogin(this.email, this.password).subscribe((data:any)=>{
          if (data?.error_code=="0") {

            localStorage.setItem('uid',data.user.uid)
            localStorage.setItem('role',data.user.role)
          } else {      
              alert('invalid email or password')
          }
        });
}

}
