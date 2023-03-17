import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
  readonly sseSubject = new Subject();
  async handleConnection() {
    return this.sseSubject.asObservable();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
