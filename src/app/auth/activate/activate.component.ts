import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-activate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  data: any;

 constructor(
  private _activatedRoute: ActivatedRoute,
  private _router: Router,
  private _dataService: DataService
) { } 

postForm() {

  this._dataService.postRegister("post-password", this.data.formData).subscribe((data:any)=>{
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
    })   
}

}