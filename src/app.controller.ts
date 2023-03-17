import { AppService } from './app.service';

import { Controller, Get, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

interface MessageEvent {
  data: string | object;
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('notification')
  sendEvent(): Promise<Observable<unknown>> {
    // return interval(1000).pipe(map((num: number) => ({ data: 'Hello' + num })));

    // setInterval(() => {
    //   this.appService.sseSubject.next({ data: 'hello world' });
    // }, 1000);
    return this.appService.handleConnection();
  }

  @Get('order_page')
  sendNotification() {
    this.appService.sseSubject.next({
      data: 'Order has been placed successfuly',
    });
  }
}
