import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { properties } from './Apify.properties';
import { methods } from './Apify.methods';

export class Apify implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apify',
		name: 'apify',
		icon: 'file:apify.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Apify API',
		defaults: {
			name: 'Apify',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				displayName: 'Apify API',
				name: 'apifyApi',
				required: true,
			},
		],

		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: 'https://api.apify.com',
		},

		properties,
	};

	methods = methods;
}
