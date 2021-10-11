import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
   productForm=new FormGroup({
      id:new FormControl(),
      Name:new FormControl(""),
      Role:new FormControl("")
   })
//  productForm = new FormGroup({
//   reference: new FormControl(),
//   quantity: new FormControl('')
// }); 
   
  ngOnInit() {
    
  }

  constructor(
      public fb: FormBuilder,
     public router: Router,
     public crudService: CrudService,
      ){
       this.productForm = this.fb.group({
          id: [''],
          Name: [''],
          Role: [''],
          
        })
    
    
    }
  submitForm() {
    this.crudService.create(this.productForm.value).subscribe(res => {
       console.log('Product created!')
       this.router.navigateByUrl('/crud/home')
   })

}
}