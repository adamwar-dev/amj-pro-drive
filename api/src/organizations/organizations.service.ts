import { Inject, Injectable } from '@nestjs/common';
import { CreateOrgranizationDto } from './dto/create-organization.dto';
import { UpdateOrgranizationDto } from './dto/update-organization.dto';
import { Model } from 'mongoose';
import { Organization } from './interfaces/organization.interface';

@Injectable()
export class OrganizationsService {
  constructor(
    @Inject('ORGANIZATION_MODEL')
    private organizationModel: Model<Organization>) {}
  
  async create(createOrgranizationDto: CreateOrgranizationDto) {
    const createdOrganization = new this.organizationModel(createOrgranizationDto);
    return createdOrganization.save();
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} orgranization`;
  }

  update(id: number, updateOrgranizationDto: UpdateOrgranizationDto) {
    return `This action updates a #${id} orgranization`;
  }

  remove(id: number) {
    return `This action removes a #${id} orgranization`;
  }
}
