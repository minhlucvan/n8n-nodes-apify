/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

/**
 * The following code was generated create-n8n-nodes tool.
 *
 * This file was automatically generated and should not be edited.
 *
 * If changes are required, please refer to the templates and scripts in the repository.
 * Repository: https://github.com/oneflow-vn/create-n8n-nodes
 */

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Get items';

const rawOption: INodePropertyOptions = {
	name: 'Get Items',
	value: 'Get items',
	action: 'Get items',
	description:
		'Returns data stored in the dataset in a desired format Response format The format of the response depends on format query parameter The format parameter can have one of the following values JSON jsonl xml html csv xlsx and rss The following table describes how each format is treated Note that CSV XLSX and HTML tables are limited to 500 columns and the column names cannot be longer than 200 characters JSON XML and RSS formats do not have such restrictions Hidden fields The top level fields starting with the character are considered hidden These are useful to store debugging information and can be omitted from the output by providing the skipHidden 1 or clean 1 query parameters For example if you store the following object to the dataset productName iPhone Xs description Welcome to the big screens debug URL https www apple com lae iphone xs crawledAt 2019 01 21T16 06 03 683Z The debug field will be considered as hidden and can be omitted from the results This is useful to provide nice cleaned data to end users while keeping debugging info available if needed The Dataset object returned by the API contains the number of such clean items in thedataset cleanItemCount property XML format extension When exporting results to XML or RSS formats the names of object properties become XML tags and the corresponding values become tag s children For example the following JavaScript object name Paul Newman address type home street 21st city Chicago type office street null city null will be transformed to the following XML snippet name Paul Newman name address type home type street 21st street city Chicago city address address type office type street city address If the JavaScript object contains a property named then its sub properties are exported as attributes of the parent XML element If the parent XML element does not have any child elements then its value is taken from a JavaScript object property named For example the following JavaScript object address type home street 21st city Chicago type office unknown will be transformed to the following XML snippet address type home street 21st street city Chicago city address address type office unknown address This feature is also useful to customize your RSS feeds generated for various websites By default the whole result is wrapped in a items element and each page object is wrapped in a item element You can change this using xmlRoot and xmlRow URL parameters Pagination The generated response supports pagination The pagination is always performed with the granularity of a single item regardless whether unwind parameter was provided By default the Items in the response are sorted by the time they were stored to the database therefore you can use pagination to incrementally fetch the items as they are being added The maximum number of items that will be returned in a single API call is limited to 250 000 If you specify desc 1 query parameter the results are returned in the reverse order than they were stored i e from newest to oldest items Note that only the order of Items is reversed but not the order of the unwind array elements',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/datasets/{{$parameter["datasetId"]}}/items',
		},
		output: {
			postReceive: [
				{
					type: 'setKeyValue',
					properties: {
						data: '={{$response.body}}',
					},
				},
			],
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
