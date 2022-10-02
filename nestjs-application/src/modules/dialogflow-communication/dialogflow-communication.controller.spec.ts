import { Test, TestingModule } from '@nestjs/testing';
import { DialogflowCommunicationController } from './dialogflow-communication.controller';
import { DialogflowCommunicationService } from './dialogflow-communication.service';

describe('DialogflowCommunicationController', () => {
  let controller: DialogflowCommunicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialogflowCommunicationController],
      providers: [DialogflowCommunicationService],
    }).compile();

    controller = module.get<DialogflowCommunicationController>(DialogflowCommunicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
