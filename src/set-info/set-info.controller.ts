import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SetInfoService } from './set-info.service';
import { CreateSetInfoDto } from './dto/create-set-info.dto';
import { UpdateSetInfoDto } from './dto/update-set-info.dto';

@Controller('set-info')
export class SetInfoController {
  constructor(private readonly setInfoService: SetInfoService) {}

  @Post()
  create(@Body() createSetInfoDto: CreateSetInfoDto) {
    return this.setInfoService.create(createSetInfoDto);
  }

  @Get()
  findAll() {
    return this.setInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetInfoDto: UpdateSetInfoDto) {
    return this.setInfoService.update(+id, updateSetInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setInfoService.remove(+id);
  }
}
