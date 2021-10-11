import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Product} from 'src/app/crud/product';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  // id=3;
  // Name="tamilselvan"
  // Role="web developer"
    
  product: Product[] = [];
         tamil =this.product

   // tamil=this.product.values;
  //  Name=product.Name;
  //  Role=product.Role;
     

  productForm=new FormGroup({
    id:new FormControl(""),
    Name:new FormControl(""),
    Role:new FormControl("")
 })
  constructor( public fb: FormBuilder, 
     public router: Router,
    private route : ActivatedRoute,
    public crudService: CrudService,) { 
     // this.IUserobj.firstName=this.formvalue.value.firstName;
    //  this.productForm.value=fb.control.value({
//this.product.id=this.formvalue.value.id;
    //  })
    
    // this.productForm = this.fb.group({
    //   id: [''],
    //   Name: [''],
    //   Role: [''],
      
    // })
    // this.productForm.=this.product
     //  this.tamil.bind.=this.productForm
  console.log(this.tamil);
  
  

  
  
  }
    
   

  ngOnInit() {
      
          let id =this.router.url
          let idd=id.toString()
          const st=idd.slice(13)
           console.log(st)
           this.crudService.getById(st).subscribe(res=>{
            this.product.push(res);
            
           //const tamil=this.product;
    
            //const tam=this.product.values(tamil.);
            //console.log(this.tamil)
          
          })    

    //  this.route.paramMap.subscribe(
    //    params=>this.id =params.get("id"))
    //   console.log(this.id)
    //  this.crudService.getById(st).subscribe((res:Product[])=>{
    //           this.Product = res
    //  })  
        
        }  
  
  


  
  submitForm() {
    let id =this.router.url.toString()
    let idd=id.slice(13)
    this.crudService.update( idd,this.productForm.value).subscribe(res => {
       console.log('Product updated!')
       this.router.navigateByUrl('/crud/home')
   })
  
}
}
