import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private _auth:AuthenticationService, private route:Router){
    console.log(_auth.isLogged())

  }

  @ViewChild('userForm') form: any;
  public checkedKeepMe: boolean = false;

  public width: string = '335px';
  public visible: boolean = false;
  public multiple: boolean = false;
  public showCloseIcon: Boolean = true;
  public formHeader: string = 'Success';
  public content: string = 'You have successfully registered, Thank you.';
  public target: string = '#control_wrapper';
  public isModal: boolean = true;
  public animationSettings: object = {
    effect: 'Zoom'
  };
  aze(){
    this.TxtType = !this.TxtType
    console.log("qsdqsd")
  }
  public UserDetails: UserDetails;
  public TxtType : boolean = false
  ngOnInit() {
    this.UserDetails = {
      password: '',
      email:'',
    };
  }
  

    @ViewChild('formElement') element: any;
   

   public Submit() {
    
    this._auth.logIn()
    if(this._auth.isLogged()) this.route.navigate(['/home'])
    console.log(this._auth.isLogged())
    

    /* this.form.reset();
    this.UserDetails = {
     password: '',
     email:'',
   }; */
    
  }

}
export interface UserDetails {
  password: string;
  email: string;
}

