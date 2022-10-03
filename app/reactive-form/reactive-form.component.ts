import { Component, OnInit } from '@angular/core';  
import { Validators, FormGroup, FormBuilder,NgForm, ɵNgNoValidate, FormControl } from '@angular/forms';  
import { CustomvalidationService } from '../services/customvalidation.service';  
  
@Component({  
  selector: 'app-reactive-form',  
  templateUrl: './reactive-form.component.html',  
  styleUrls: ['./reactive-form.component.scss']  
})  
export class ReactiveFormComponent implements OnInit {  
  [key: string]: any;
  registerForm: FormGroup;
  
  submitted = false;  
  
  clear = true;
  
  constructor(  
    private fb: FormBuilder,  
    private customValidator: CustomvalidationService  
  ) { this.myFormValues()}  
  
  ngOnInit() {  
    this.myFormValues()
  }  
  myFormValues() {
    this.registerForm = this.fb.group({  
      firstname: ['', Validators.required],  
      lastname: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email]],  
      phonenumberPrefix: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      
    {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
    }
  );
  }
  get registerFormControl() {  
    return this.registerForm.controls}  
 
  onSubmit() {  
    console.log("onSubmit");
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("invalid");
      
      this.registerForm.markAllAsTouched();
        } 
        if (this.registerForm.valid)
        {
          console.log("valid");
          console.table(this.registerForm.value);
          this.registerForm.patchValue({
            firstname:'',
            lastname:'',
            email:'',
            phonenumberPrefix:'',
            phonenumber:'',
            password:'',
            confirmedPassword:'',
          });
          this.submitted = false; 
          this.registerForm.markAsUntouched(); 
      }
      
    // if (myForm.valid ) { 
    //   console.table(myForm.value);
    //   this.submitted = false;  
    //   myForm.markAsPristine()
    //   myForm.patchValue({
    //     countryName:'',
    //     firstname:'',
    //   });
       
        
       
    // }  
  } 
  
  resetForm() {
    console.log("Reset all fields to null.");
    this.registerForm.patchValue({
      countryName:'',
      firstname:'',
      lastname:'',
      email:'',
      phonenumber:'',
      password:'',
      confirmedPassword:'',
    });
    this.submitted = false;  
     this.registerForm.reset();
     this.registerForm.markAsUntouched();
    
    //this.registerForm.reset("")
    //this.registerForm.markAsPristine()
    //this.myFormValues()
  }
}  