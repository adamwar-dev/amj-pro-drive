import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { organizationProviders } from './organizations.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [OrganizationsController],
	providers: [
		OrganizationsService,
		...organizationProviders,
	],
})
export class OrganizationsModule {}
