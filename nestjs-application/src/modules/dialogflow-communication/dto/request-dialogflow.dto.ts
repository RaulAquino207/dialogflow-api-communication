import { ApiProperty } from "@nestjs/swagger";

export class RequestDialogflowDto {
    @ApiProperty()
    queryText: string;

    @ApiProperty()
    languageCode: string;
}