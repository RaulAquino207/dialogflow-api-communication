import { Module } from '@nestjs/common';
import { DialogflowCommunicationService } from './dialogflow-communication.service';
import { DialogflowCommunicationController } from './dialogflow-communication.controller';

@Module({
  controllers: [DialogflowCommunicationController],
  providers: [DialogflowCommunicationService]
})
export class DialogflowCommunicationModule {}
