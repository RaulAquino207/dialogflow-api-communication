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

    const { displayName, trainingPhrasesParts, messageTexts } = createDialogflowIntentDto;

    const agentPath = this.IntentsClient.projectAgentPath(googleProjectId);

    const trainingPhrases = [];

    trainingPhrasesParts.forEach(trainingPhrasesPart => {
      const part = {
        text: trainingPhrasesPart,
      };

      const trainingPhrase = {
        type: 'EXAMPLE',
        parts: [part],
      };

      trainingPhrases.push(trainingPhrase);
    });

    const messageText = {
      text: messageTexts,
    };

    const message = {
      text: messageText,
    };

    const intent = {
      displayName: displayName,
      trainingPhrases: trainingPhrases,
      messages: [message],
    };

    const createIntentRequest = {
      parent: agentPath,
      intent: intent,
      languageCode: 'pt-BR'
    };

    try {
      const [response] = await this.IntentsClient.createIntent(createIntentRequest);
      return response;
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
      const [response] = await this.sessionClient.detectIntent(request);
      return response;
    } catch (error) {
      return error
    }
    
  }
}
