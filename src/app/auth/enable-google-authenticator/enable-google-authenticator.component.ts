import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-enable-google-authenticator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enable-google-authenticator.component.html',
  styleUrls: ['./enable-google-authenticator.component.css']
})
export class EnableGoogleAuthenticatorComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _dataService: DataService,
    public sanitizer: DomSanitizer
  ) { } 

  otp: any; 
  qrcode: any;
  data: any;
  
  postForm() {

    let formData: any = {
      email: this.otp
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

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ 
    data })=> { 
        this.data=data;
        this.qrcode= this.sanitizer.bypassSecurityTrustResourceUrl(this.data.qrcode);
    })   
  }

}
