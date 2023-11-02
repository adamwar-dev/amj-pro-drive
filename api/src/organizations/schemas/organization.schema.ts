import * as mongoose from 'mongoose';

export const OrganizationSchema = new mongoose.Schema({
	name: String,
	domain: String,
});