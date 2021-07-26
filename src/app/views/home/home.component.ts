import { CalcmeService } from './../../services/calcme.service';
import { Calcme } from './../../model/calcme';
import { Component, OnInit } from '@angular/core';
import  { FormControl,  FormGroup, Validators, FormBuilder, AbstractControl  }  from  '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formGroup!: FormGroup;
  calcme!: Calcme;
  submitted = false;

  constructor(private fb: FormBuilder,
              private service: CalcmeService) { }

  ngOnInit(): void{
   
    this.createForm(this.calcme);

  }
  createForm(calcme: Calcme){
    this.formGroup = this.fb.group({
      name: [calcme ? calcme.name: '',[Validators.required]],
      email: [calcme ? calcme.email: '' ,[Validators.email, Validators.required]],
      phone: [calcme ? calcme.phone: '' ,[Validators.required, Validators.maxLength(11)] ]
    })
      
  }

  get f() { 
    return this.formGroup.controls;   
  }

  get name(){
    return this.formGroup.get('name');
  }

  onSubmit(){

    this.submitted = true;

    if(!this.formGroup.valid){
      console.log('Invalido')
      return;                                                                                         
    }

    const calcmeForm = this.formGroup.value as Calcme;
    this.service.create(calcmeForm).subscribe(res => {
       this.calcme = res;
       console.log('User Created!');
    });    

    console.log(this.formGroup.value)
    this.formGroup.reset(this.calcme);
  }

}