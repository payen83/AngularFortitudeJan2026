import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient){

  }

  getHttp(path: string){
    let url: string = this.baseURL + path;
    return new Promise((resolve, reject)=>{
      this.httpClient.get(url)
      .subscribe({
        next: (response: any) => { resolve(response) },
        error: (error: any) => { reject(error) }
      });
    });
  }

  postHttp(path: string, payload: any){
    let url: string = this.baseURL + path;
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, payload)
      .subscribe({
        next: (response: any) => { resolve(response) },
        error: (error: any) => { reject(error) }
      });
    });
  }
  
}
