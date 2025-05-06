import { INodeProperties, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { apiRequestAllItems } from './genericFunctions';

const resourceLocatorProperty: INodeProperties = {
	displayName: 'Run ID',
	name: 'runId',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	modes: [
		{
			displayName: 'From List',
			name: 'list',
			type: 'list',
			placeholder: 'Choose...',
			typeOptions: {
				searchListMethod: 'listRuns',
				searchFilterRequired: false,
				searchable: false,
			},
		},
		{
			displayName: 'By URL',
			name: 'url',
			type: 'string',
			// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/runs/RDfcScrqIYHW0jfNF#log
			placeholder:
				'https://console.apify.com/actors/AtBpiepuIUNs2k2ku/runs/RDfcScrqIYHW0jfNF#log',
			validation: [
				{
					type: 'regex',
					properties: {
						// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/runs/RDfcScrqIYHW0jfNF#log
						regex: 'https://console.apify.com/actors/([a-zA-Z0-9]+)/runs/([a-zA-Z0-9]+)',
						errorMessage: 'Not a valid Apify Actor Run URL',
					},
				},
			],
			extractValue: {
				type: 'regex',
				// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/runs/RDfcScrqIYHW0jfNF#log -> RDfcScrqIYHW0jfNF
				regex: 'https://console.apify.com/actors/([a-zA-Z0-9]+)/runs/([a-zA-Z0-9]+)',
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
						errorMessage: 'Not a valid Apify Actor Run ID',
					},
				},
			],
			placeholder: 'WAtmhr6rhfBnwqKDY',
			url: '=http:/console.apify.com/actors/{{ $value }}/runs/{{ $value }}#log',
		},
	],
};

function mapProperty(property: INodeProperties) {
	return {
		...property,
		...resourceLocatorProperty,
	};
}
export function overrideRunProperties(properties: INodeProperties[]) {
	return properties.map((property) => {
		if (property.name === 'runId') {
			return mapProperty(property);
		}
		return property;
	});
}

export async function listRuns(
	this: ILoadOptionsFunctions,
	query?: string,
): Promise<INodeListSearchResult> {
	const actorIdParam = this.getNodeParameter('actorId', null) as { value: string };
	const actorTaskIdParam = this.getNodeParameter('actorTaskId', null) as { value: string };

	let path = '/v2/actor-runs';

	if (actorIdParam) {
		path = `/v2/acts/${actorIdParam.value}/runs`;
	}

	if (actorTaskIdParam) {
		path = `/v2/actor-tasks/${actorTaskIdParam.value}/runs`;
	}

	// /v2/acts/{actorId}/runs'
	const searchResults = await apiRequestAllItems.call(
		this,
		'GET',
		path,
		{},
		{
			qs: {
				limit: 100,
				offset: 0,
			},
		},
	);

	// data:
	// - id: HG7ML7M8z78YcAPEB
	// actId: HDSasDasz78YcAPEB
	// actorTaskId: KJHSKHausidyaJKHs
	// status: SUCCEEDED
	// startedAt: '2019-11-30T07:34:24.202Z'
	// finishedAt: '2019-12-12T09:30:12.202Z'
	// buildId: HG7ML7M8z78YcAPEB
	// buildNumber: 0.0.2
	// meta:
	// 	origin: WEB
	// usageTotalUsd: 0.2
	// defaultKeyValueStoreId: sfAjeR4QmeJCQzTfe
	// defaultDatasetId: 3ZojQDdFTsyE7Moy4
	// defaultRequestQueueId: so93g2shcDzK3pA85
	const { data } = searchResults;
	const { items } = data;

	return {
		results: items.map((b: any) => ({
			// finishedAt as name
			name: `${b.finishedAt} (${b.status})`,
			value: b.id,
			// https://console.apify.com/actors/AtBpiepuIUNs2k2ku/input
			url: `https://console.apify.com/actors/${b.docs_token}/input`,
			description: b.status,
		})),
	};
}
