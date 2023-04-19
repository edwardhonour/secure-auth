import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

      step: any = '1';
      username: any = '';
      password: any = '';
      otp: any = '';
      qr_url: any = '';
      data: any;
      showPassword: boolean = false;
      error: any = '';
      email: any = '';
      uid: any = 0;

      constructor(private _dataService: DataService, private _router: Router) { }

      nextStep() {
        if (this.step=='3') { 
           this.postOTP();
        }
        if (this.step=='2') { 
          this.postForm();
        }
        if (this.step=='1') { 
          if (this.email=='') {
            this.error="Invalid Email Address"
          } else {
            this.step='2';
            this.error="";
          }
        }
      }

      public togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
      }

      postForm() {
        this._dataService.postLogin(this.email, this.password).subscribe((data:any)=>{
          this.data=data;
          if (data?.error_code=="0") {
            if (data.fa2=='K') {
               localStorage.setItem('uid',data.uid)
               localStorage.setItem('role',data.role)
               localStorage.setItem('fa2','N')
               this._router.navigate(['/home']);              
            } else {
               this.uid=data.uid;
               this.step=3;
            }
          } else {      
              this.error="Invalid Email or Password";
          }
        });
      }

      postOTP() {
        this._dataService.post2FALogin(this.uid, this.otp).subscribe((data:any)=>{
          this.data=data;
          if (data?.error_code=="0") {
            if (data.fa2=='N') {
               localStorage.setItem('uid',data.uid)
               localStorage.setItem('role',data.role)
               localStorage.setItem('fa2','N')
               this._router.navigate(['/home']);              
            } else {
               this.step=3;
            }
          } else {      
              this.error="Invalid Email or Password";
          }
        });
      }

}
