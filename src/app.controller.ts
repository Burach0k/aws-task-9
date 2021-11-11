import { All, Controller, HttpException, HttpStatus, Req } from '@nestjs/common';

@Controller()
export class AppController {
    @All()
    root(@Req() req: any): any {
      const recipient = req.originalUrl.split('/')[1];
      const recipientUrl = process.env[recipient];
  
      if (!recipientUrl) {
        throw new HttpException('Cannot process request', HttpStatus.BAD_GATEWAY);
      }
    }
}