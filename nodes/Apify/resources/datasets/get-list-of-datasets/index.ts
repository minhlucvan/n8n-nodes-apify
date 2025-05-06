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

export const name = 'Get list of datasets';

const rawOption: INodePropertyOptions = {
	name: 'Get List of Datasets',
	value: 'Get list of datasets',
	action: 'Get list of datasets',
	description:
		'Lists all of a user s datasets The response is a JSON array of objects where each object contains basic information about one dataset By default the objects are sorted by the createdAt field in ascending order therefore you can use pagination to incrementally fetch all datasets while new ones are still being created To sort them in descending order use desc 1 parameter The endpoint supports pagination using limit and offset parameters and it will not return more than 1000 array elements',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/datasets',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
