import { google } from "@google-cloud/dialogflow/build/protos/protos";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDialogflowIntentDto {

  @ApiProperty()
  parent?: string|null;

  /** CreateIntentRequest intent */
  @ApiProperty()
  intent?: any|null;

  /** CreateIntentRequest languageCode */
  @ApiProperty()
  languageCode?: string|null;

  /** CreateIntentRequest intentView */
  @ApiProperty()
  intentView?: any|null;
  }
