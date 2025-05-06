import { INodeProperties, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { apiRequestAllItems } from './genericFunctions';

const resourceLocatorProperty: INodeProperties = {
	displayName: 'Actor Task ID',
	name: 'actorTaskId',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	modes: [
		{
			displayName: 'From List',
			name: 'list',
			type: 'list',
			placeholder: 'Choose...',
			typeOptions: {
				searchListMethod: 'listActorTasks',
				searchFilterRequired: false,
				searchable: false,
			},
		},
		{
			displayName: 'By URL',
			name: 'url',
			type: 'string',
			// https://console.apify.com/actors/tasks/WAtmhr6rhfBnwqKDY/input
			placeholder: 'https://console.apify.com/actors/tasks/WAtmhr6rhfBnwqKDY/input',
			validation: [
				{
					type: 'regex',
					properties: {
						// https://console.apify.com/actors/tasks/WAtmhr6rhfBnwqKDY/input
						regex: 'https://console.apify.com/actors/tasks/([a-zA-Z0-9]+)',
						errorMessage: 'Not a valid Apify Actor Task URL',
					},
				},
			],
			extractValue: {
				type: 'regex',
				// https://console.apify.com/actors/tasks/WAtmhr6rhfBnwqKDY/input -> WAtmhr6rhfBnwqKDY
				regex: 'https://console.apify.com/actors/tasks/([a-zA-Z0-9]+)',
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
						errorMessage: 'Not a valid Apify Actor Task ID',
					},
				},
			],
			placeholder: 'WAtmhr6rhfBnwqKDY',
			url: '=http:/console.apify.com/actors/tasks/{{ $value }}/input',
		},
	],
};

function mapProperty(property: INodeProperties) {
	return {
		...property,
		...resourceLocatorProperty,
	};
}
export function overrideActorTaskProperties(properties: INodeProperties[]) {
	return properties.map((property) => {
		if (property.name === 'actorTaskId') {
			return mapProperty(property);
		}
		return property;
	});
}

export async function listActorTasks(
	this: ILoadOptionsFunctions,
	query?: string,
): Promise<INodeListSearchResult> {
	// GET /v2/acts/{actorId}/runs
	const searchResults = await apiRequestAllItems.call(
		this,
		'GET',
		'/v2/actor-tasks',
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
