import { INodeProperties, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { apiRequestAllItems } from './genericFunctions';

const resourceLocatorProperty: INodeProperties = {
	displayName: 'Actor ID',
	name: 'actorId',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	modes: [
		{
			displayName: 'From List',
			name: 'list',
			type: 'list',
			placeholder: 'Choose...',
			typeOptions: {
				searchListMethod: 'listActors',
				searchFilterRequired: false,
				searchable: false,
			},
		},
		{
			displayName: 'By URL',
			name: 'url',
			type: 'string',
			// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/input
			placeholder: 'https://console.apify.com/actors/AtBpiepuIUNs2k2ku/input',
			validation: [
				{
					type: 'regex',
					properties: {
						// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/input
						regex: 'https://console.apify.com/actors/([a-zA-Z0-9]+)',
						errorMessage: 'Not a valid LarkSuite App URL',
					},
				},
			],
			extractValue: {
				type: 'regex',
				// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/input -> AtBpiepuIUNs2k2ku
				regex: 'https://console.apify.com/actors/([a-zA-Z0-9]+)',
			},
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: '[a-zA-Z0-9]+',
						errorMessage: 'Not a valid LarkSuite App ID',
					},
				},
			],
			placeholder: 'NVCnbrChXaPbhVs8bISltEhngFg',
			url: '=http:/console.apify.com/actors/{{ $value }}/input',
		},
	],
};

function mapProperty(property: INodeProperties) {
	return {
		...property,
		...resourceLocatorProperty,
	};
}
export function overrideActorProperties(properties: INodeProperties[]) {
	return properties.map((property) => {
		if (property.name === 'actorId') {
			return mapProperty(property);
		}
		return property;
	});
}

export async function listActors(
	this: ILoadOptionsFunctions,
	query?: string,
): Promise<INodeListSearchResult> {
	const searchResults = await apiRequestAllItems.call(
		this,
		'GET',
		'/v2/acts',
		{},
		{
			qs: {
				limit: 100,
				offset: 0,
			},
		},
	);

	// data:
	// - id
	// - createdAt
	// - modifiedAt
	// - name
	// - username
	const { data } = searchResults;
	const { items } = data;

	return {
		results: items.map((b: any) => ({
			name: b.name,
			value: b.id,
			// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/input
			url: `https://console.apify.com/actors/${b.docs_token}/input`,
			description: b.name,
		})),
	};
}
