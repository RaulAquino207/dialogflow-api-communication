import { Test, TestingModule } from '@nestjs/testing';
import { DialogflowCommunicationService } from './dialogflow-communication.service';

describe('DialogflowCommunicationService', () => {
  let service: DialogflowCommunicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DialogflowCommunicationService],
    }).compile();

    service = module.get<DialogflowCommunicationService>(DialogflowCommunicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
