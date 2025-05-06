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

export const name = 'Put items';

const rawOption: INodePropertyOptions = {
	name: 'Put Items',
	value: 'Put items',
	action: 'Put items',
	description:
		'Appends an item or an array of items to the end of the dataset The POST payload is a JSON object or a JSON array of objects to save into the dataset IMPORTANT The limit of request payload size for the dataset is 5 MB If the array exceeds the size you ll need to split it into a number of smaller arrays',
	routing: {
		request: {
			method: 'POST',
			url: '=/v2/datasets/{{$parameter["datasetId"]}}/items',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
