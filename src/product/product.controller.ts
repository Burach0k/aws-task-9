import { All, Body, Controller, HttpException, HttpStatus, Req } from '@nestjs/common';
import axios from 'axios';

@Controller('products')
export class ProductController {
    @All()
    root(@Req() req: any, @Body() body): any {
      const recipient = req.originalUrl.split('/')[1];
      const recipientUrl = process.env[recipient];
  
      if (recipientUrl) {
        const method = req.method.toLowerCase();
        const data = Object.keys(body || {}).length > 0 && { data: body };
  
        const config = {
          method,
          url: recipientUrl,
          ...data,
        };
  
        return axios(config).then(({ data }) => data);
  
      } else {
        throw new HttpException('Cannot process request', HttpStatus.BAD_GATEWAY);
      }
    }
}
