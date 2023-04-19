import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public locationSubject = new BehaviorSubject<any>({ name: 'Home', link: '/', count: 0, isSmall: 'N', hideNav: 'N', hideHeader: 'N'});
  public pageSubject = new BehaviorSubject<any>('{}');
  public paramSubject = new BehaviorSubject<any>('{}');
  public routerSubject = new BehaviorSubject<any>('{}');

  t: any;
  uid: any;
  url: any;
  un: any;
  role: any;

  constructor(private http: HttpClient) { 
        this.url='https://protectivesecurity.org/api/psp_router.php';
    }

  getLocalStorage() {
    //
    if (localStorage.getItem('uid')===null) {
      this.uid="0";
    } else {
      this.uid=localStorage.getItem('uid')
    }

    if (localStorage.getItem('un')===null) {
      this.un="";
    } else {
      this.un=localStorage.getItem('un')
    }

    if (localStorage.getItem('role')===null) {
      this.role="";
    } else {
      this.role=localStorage.getItem('role')
    }
  }

  getData(path: any, id: any, id2: any, id3: any) {
    this.getLocalStorage();
    const data = {
      "q" : path,
      "id": id,
      "id2": id2,
      "id3": id3,      
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  getPing(path: any) {
    this.getLocalStorage();

    let output: any = { page: '', id: '', id2: '', id3: '' };

    let j: any = path.split('/');
    console.log('p1');
    console.log(j);
    console.log('p2');

    if (j[1]!==undefined) { output.page=j[1]; }
    if (j[2]!==undefined) { output.id=j[2];   }
    if (j[3]!==undefined) { output.id2=j[3];  }
    if (j[4]!==undefined) { output.id3=j[4];  }

    return of(output);

  }

  postForm(formID: any, formData: any[]) {
    this.getLocalStorage();
    const data = {
      "q" : formID,
      "data": formData,
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  postLogin(username: any, password: any) {
    const data = {
      "q" : "login",
      "username": username,
      "password": password
    }
    console.log(data)
    this.t= this.http.post('https://protectivesecurity.org/api/auth.php', data);
    return this.t;
  }

  post2FALogin(username: any, password: any) {
    const data = {
      "q" : "login2FA",
      "username": username,
      "password": password
    }
    console.log(data)
    this.t= this.http.post('https://protectivesecurity.org/api/auth.php', data);
    return this.t;
  }

    postRegister(q: any, formData: any) {
    const data = {
      "q" : q,
      "formData": formData
    }
    console.log(data)
    this.t= this.http.post('https://protectivesecurity.org/api/auth.php', data);
    return this.t;
  }

  get2FACode(path: any) {
    this.getLocalStorage();
    const data = {
      "q" : path,
      "uid": this.uid
    }

  this.t= this.http.post('https://protectivesecurity.org/api/auth.php', data);
  return this.t;

  }

  getVerticalMenu() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role
    }
  this.t= this.http.post("https://protectivesecurity.org/api/psp-menu.php", data);
  return this.t;

  }

  getUser() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role
    }

  this.t= this.http.post("https://protectivesecurity.org/api/u.php", data);
  return this.t;

  }
  
  getEnroll(token: any) {
    this.getLocalStorage()
    const data = {
      "q" : "enroll",
      "token": token
    }

  this.t= this.http.post("https://protectivesecurity.org/api/enroll.php", data);
  return this.t;

}

postTemplate(file_data:any) {
  console.log(file_data);
  this.t=this.http.post('https://myna-docs.com/api/upload_security_section.php',file_data);
  return this.t;
}

}