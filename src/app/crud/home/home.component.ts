import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { CrudService } from '../crud.service';



import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  products: Product[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    })  
  }
  deletenumber(id: any){
       console.log("tamil")
       this.crudService.delete(id).subscribe(res=>{
        this.crudService.getAll().subscribe((data: Product[])=>{
          console.log(data);
          this.products = data;
        })  
       });
      //  this.crudService.delete().subscribe((data: Product[])=>{
      //   console.log(data);
      //   this.products = data;
        // this.crudService.delete(this.productForm.value).subscribe(res => {
        //   console.log('Product created!')
            //}
  }
  //  getElement(id:any){
  //   console.log(id)
  //      ge
  //  }

}