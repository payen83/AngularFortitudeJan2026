import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { ApiService } from '../../services/api-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface Product {
  id: number,
  title: string,
  price: number,
  image: string,
  description: string
}

@Component({
  selector: 'app-products-page',
  imports: [...SharedModules],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit{
  public productList: Array<Product> = [];
  public product: Product = {
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: ''
  }
  private snackBar = inject(MatSnackBar);

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ){}

  async ngOnInit() {
    try {
      let response: any = await this.apiService.getHttp('/products');
      if(response){
        console.log(response);
        this.productList = response;
        this.cdr.detectChanges();
      }
    } catch(error: any){
      console.log(error);
      this.openSnackBar(error.message);
    }
  }

  goDetail(id: number){
    this.router.navigateByUrl('/detail/'+id);
  }

  async onSubmit(){
    try {
      let response: any = await this.apiService.postHttp('/products', this.product);
      if(response){
        this.product['id'] = response.id;
        this.productList.unshift(this.product);
        this.cdr.detectChanges();
        this.openSnackBar('Product added successfully');
      }
    } catch(error: any){
      this.openSnackBar(error.message);
    }
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'OK');
  }

}
