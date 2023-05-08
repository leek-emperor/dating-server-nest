import { PartialType } from '@nestjs/mapped-types';
import { CreateSetInfoDto } from './create-set-info.dto';

export class UpdateSetInfoDto extends PartialType(CreateSetInfoDto) {}
