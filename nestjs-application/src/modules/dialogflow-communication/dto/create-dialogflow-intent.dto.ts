import { google } from "@google-cloud/dialogflow/build/protos/protos";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDialogflowIntentDto {
  @ApiProperty()
  displayName: string;

  @ApiProperty()
  trainingPhrasesParts: Array<string>

  @ApiProperty()
  messageTexts: Array<string>;
}
