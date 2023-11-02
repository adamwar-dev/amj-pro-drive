import { Connection } from 'mongoose';
import { OrganizationSchema } from './schemas/organization.schema';

export const organizationProviders = [
	{
		provide: 'ORGANIZATION_MODEL',
		useFactory: (connection: Connection) => connection.model('Organization', OrganizationSchema),
		inject: ['DATABASE_CONNECTION'],
	},
];