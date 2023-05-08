import { Injectable } from '@nestjs/common';
import { CreateSetInfoDto } from './dto/create-set-info.dto';
import { UpdateSetInfoDto } from './dto/update-set-info.dto';

@Injectable()
export class SetInfoService {
  create(createSetInfoDto: CreateSetInfoDto) {
    return 'This action adds a new setInfo';
  }

  findAll() {
    return `This action returns all setInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} setInfo`;
  }

  update(id: number, updateSetInfoDto: UpdateSetInfoDto) {
    return `This action updates a #${id} setInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} setInfo`;
  }
}
