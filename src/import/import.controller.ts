import { HttpService } from '@nestjs/axios';
import { Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('import')
export class ImportController {

    constructor(private httpService: HttpService) {}

    @Get()
    public importProductsFile(): Observable<any> {
        return this.httpService.get('https://uevyoxihci.execute-api.eu-west-1.amazonaws.com/dev/import');
    }

    @Get()
    public getProductsById(productId: number): Observable<any> {
        return this.httpService.get(`https://1ztz8u9329.execute-api.eu-west-1.amazonaws.com/dev/products/${productId}`);
    }

    @Post()
    public catalogItemsQueue(productList: any[]): Observable<any> {
        return this.httpService.post('https://uevyoxihci.execute-api.eu-west-1.amazonaws.com/dev/catalogItemsQueue', productList);
    }
}
