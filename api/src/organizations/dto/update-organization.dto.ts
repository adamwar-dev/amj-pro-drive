import { PartialType } from '@nestjs/mapped-types';
import { CreateOrgranizationDto } from './create-organization.dto';

export class UpdateOrgranizationDto extends PartialType(CreateOrgranizationDto) {}
