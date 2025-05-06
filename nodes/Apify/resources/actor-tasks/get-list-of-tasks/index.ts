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

export const name = 'Get list of tasks';

const rawOption: INodePropertyOptions = {
	name: 'Get List of Tasks',
	value: 'Get list of tasks',
	action: 'Get list of tasks',
	description:
		'Gets the complete list of tasks that a user has created or used The response is a list of objects in which each object contains essential information about a single task The endpoint supports pagination using the limit and offset parameters and it does not return more than a 1000 records By default the records are sorted by the createdAt field in ascending order therefore you can use pagination to incrementally fetch all tasks while new ones are still being created To sort the records in descending order use the desc 1 parameter',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/actor-tasks',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
