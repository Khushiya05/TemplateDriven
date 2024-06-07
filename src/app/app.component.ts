import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateDriven';
  
@ViewChild("signUpForm") signUpForm!: NgForm;

  userInfo={
    userDetails: {
        username: "roshni",
        email: "khushiyapatil360@gmail.com"
    },
    secretQuestion: "favoriteteacher",
    answer: "Ravi Sir",
    isSubscribe: true,
    contactMode: "phone"
};

onsignUp(){
      if(this.signUpForm.valid){
        console.log(this.signUpForm.value);
        this.signUpForm.reset();
      }
   }
patchValue() {
  setTimeout(() => {
    this.signUpForm.form.patchValue(this.userInfo);
  });
  
  }
}
