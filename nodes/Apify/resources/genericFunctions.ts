import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
} from 'n8n-workflow';

/**
 * Make an API request to Trello
 *
 */
export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: object,
	query?: IDataObject,
): Promise<any> {
	query = query || {};

	const options: IRequestOptions = {
		method,
		body,
		qs: query,
		uri: `https://api.apify.com${endpoint}`,
		json: true,
	};

	if (method === 'GET') {
		delete options.body;
	}

	return await this.helpers.requestWithAuthentication.call(this, 'apifyApi', options);
}

export async function apiRequestAllItems(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject,
	query: IDataObject = {},
): Promise<any> {
	const returnData: IDataObject[] = [];
	query.limit = query.limit || 999;

	// @ts-ignore
	console.log('endpoint', endpoint);

	let responseData;

	do {
		responseData = await apiRequest.call(this, method, endpoint, body, query);

		// {
		// 	data: {
		// 		total: 26,
		// 		count: 26,
		// 		offset: 0,
		// 		limit: 1000,
		// 		desc: false,
		// 		items: [
		// 			[Object], [Object], [Object],
		// 			[Object], [Object], [Object],
		// 			[Object], [Object], [Object],
		// 			[Object], [Object], [Object],
		// 			[Object], [Object], [Object],
		// 			[Object], [Object], [Object],
		// 			[Object], [Object], [Object],
		// 			[Object], [Object], [Object],
		// 			[Object], [Object]
		// 		]
		// 	}
		// }

		returnData.push(responseData);
	} while (query.limit <= responseData.length);

	const combinedData = {
		data: {
			total: 0,
			count: 0,
			offset: 0,
			limit: 0,
			desc: false,
			items: [] as IDataObject[],
		},
	};

	// returnData [
	// 	{
	// 		data: {
	// 			total: 26,
	// 			count: 26,
	// 			offset: 0,
	// 			limit: 999,
	// 			desc: false,
	// 			items: [Array]
	// 		}
	// 	}
	// ]

	for (const result of returnData) {
		combinedData.data.total += typeof result.total === 'number' ? result.total : 0;
		combinedData.data.count += typeof result.count === 'number' ? result.count : 0;
		combinedData.data.offset += typeof result.offset === 'number' ? result.offset : 0;
		combinedData.data.limit += typeof result.limit === 'number' ? result.limit : 0;

		if (
			result.data &&
			typeof result.data === 'object' &&
			'items' in result.data &&
			Array.isArray((result.data as IDataObject).items)
		) {
			combinedData.data.items = [
				...combinedData.data.items,
				...(result.data.items as IDataObject[]),
			];
		}
	}

	return combinedData;
}
