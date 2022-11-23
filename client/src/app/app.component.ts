import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { IPagination } from './modules/pagination';
import { IProduct } from './modules/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'SkiNet';
    products: IProduct[];

    constructor(private http:HttpClient) {}

    ngOnInit(): void {
      this.http.get('https://localhost:7002/api/products?pageSize=50').subscribe((response: IPagination)=> {
        this.products=response.data;
      },  error =>{
        console.log(error);
      });
    }
}
