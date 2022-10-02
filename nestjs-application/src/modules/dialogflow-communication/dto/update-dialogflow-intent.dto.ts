import { PartialType } from '@nestjs/swagger';
import { CreateDialogflowIntentDto } from './create-dialogflow-intent.dto';

export class UpdateDialogflowIntentDto extends PartialType(CreateDialogflowIntentDto) {}
