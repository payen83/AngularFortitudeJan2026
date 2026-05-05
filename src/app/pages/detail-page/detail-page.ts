import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { ApiService } from '../../services/api-service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  imports: [...SharedModules],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.scss',
})
export class DetailPage implements OnInit{
  public id: any = null;
  public product: any = {
    id: '',
    title: '',
    price: '',
    description: '',
    image: ''
  }
  constructor(private apiService: ApiService, 
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,

  ){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
  async ngOnInit() {
    try {
      let response: any = await this.apiService.getHttp('/products/'+this.id);
      if(response) this.product = response;
      this.cdr.detectChanges();
    } catch(error: any){
      console.log(error);
    }
  }

  goBack(){
    this.location.back();
  }

}
