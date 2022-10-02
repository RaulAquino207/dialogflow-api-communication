import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DialogflowCommunicationModule } from './modules/dialogflow-communication/dialogflow-communication.module';

@Module({
  imports: [DialogflowCommunicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
