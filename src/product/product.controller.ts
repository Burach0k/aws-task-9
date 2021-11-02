import { HttpService } from '@nestjs/axios';
import { Controller, Get, Post } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Product } from 'src/dto/product';

@Controller('products')
export class ProductController {

    constructor(private httpService: HttpService) {}

    @Get()
    public getProductList(): any {
        return this.httpService.get('https://1ztz8u9329.execute-api.eu-west-1.amazonaws.com/dev/products').pipe(map(response => response.data));
    }

    @Post()
    public addProducts(products: Omit<Product, "id">[]): Observable<any> {
        return this.httpService.post('https://1ztz8u9329.execute-api.eu-west-1.amazonaws.com/dev/products', products);
    }

    @Get()
    public getProductsById(productId: number): Observable<any> {
        return this.httpService.get(`https://1ztz8u9329.execute-api.eu-west-1.amazonaws.com/dev/products/${productId}`);
    }
}
