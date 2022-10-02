import { protos } from '@google-cloud/dialogflow';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DialogflowCommunicationService } from './dialogflow-communication.service';
import { CreateDialogflowIntentDto } from './dto/create-dialogflow-intent.dto';
import { RequestDialogflowDto } from './dto/request-dialogflow.dto';

@ApiTags('Dialogflow Communication')
@Controller('dialogflow-communication')
export class DialogflowCommunicationController {
  constructor(private readonly dialogflowCommunicationService: DialogflowCommunicationService) {}

  @Post("/execute-query")
  executeQuery(@Body() requestDialogflowDto: RequestDialogflowDto) {
    return this.dialogflowCommunicationService.executeQuery(requestDialogflowDto);
  }

  @Post("/create-intent")
  createIntent(@Body() createDialogflowIntentDto : CreateDialogflowIntentDto) {
    return this.dialogflowCommunicationService.createIntent(createDialogflowIntentDto);
  }

  // @Get()
  // findAll() {
  //   return this.dialogflowCommunicationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dialogflowCommunicationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDialogflowCommunicationDto: UpdateDialogflowCommunicationDto) {
  //   return this.dialogflowCommunicationService.update(+id, updateDialogflowCommunicationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dialogflowCommunicationService.remove(+id);
  // }
}
