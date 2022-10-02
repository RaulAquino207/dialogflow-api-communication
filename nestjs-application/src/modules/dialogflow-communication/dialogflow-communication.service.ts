import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid'
import { protos, v2 } from '@google-cloud/dialogflow'

import { DIALOGFLOW_CONFIG } from '../../config/config';
import { RequestDialogflowDto } from './dto/request-dialogflow.dto';
import { CreateDialogflowIntentDto } from './dto/create-dialogflow-intent.dto';

const { googleProjectId, googlePrivateKey, googlePrivateKeyId, googleClientEmail } = DIALOGFLOW_CONFIG;

@Injectable()
export class DialogflowCommunicationService {

  CONFIGURATION = {
    credentials: {
      private_key: googlePrivateKey,
      client_email: googleClientEmail
    }
  }

  sessionClient = new v2.SessionsClient(this.CONFIGURATION);
  IntentsClient = new v2.IntentsClient(this.CONFIGURATION);

  async createIntent(createDialogflowIntentDto : CreateDialogflowIntentDto) {

    try {
      const responses = await this.IntentsClient.createIntent(createDialogflowIntentDto);

      return responses;
    } catch (error) {
      return error
    }
  }

  async executeQuery(requestDialogflowDto: RequestDialogflowDto) {
    const sessionId = v4();
    const sessionPath = this.sessionClient.projectAgentSessionPath(googleProjectId, sessionId);

    const { queryText, languageCode } = requestDialogflowDto;

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: queryText,
          languageCode: languageCode,
        },
      },
    };

    try {
      const responses = await this.sessionClient.detectIntent(request);
      return responses[0];
    } catch (error) {
      return error
    }
    
  }
}
