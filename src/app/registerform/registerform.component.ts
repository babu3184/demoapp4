import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  optionvalue = 'Address';
  formdata: any;
  constructor(public userservice: UserService) { }
 url = 'https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png';
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onChange(event) {
    this.optionvalue = event.target.value;
  }
  // tslint:disable-next-line:typedef
  selectFile(event){
    if (event.target.files){
      // tslint:disable-next-line:prefer-const
      let reader = new FileReader();
      reader. readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader. onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
  // tslint:disable-next-line:typedef
  register(formobj){
    this.formdata = formobj;
    console.log(this.formdata);
  }
}
