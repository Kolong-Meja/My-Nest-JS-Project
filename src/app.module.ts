import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({

  // imports untuk mengimport module
  imports: [],

  // controllers untuk mengimport controller
  controllers: [AppController],

  // providers untuk menginject provider atau service
  providers: [AppService],
  
})
export class AppModule {}
