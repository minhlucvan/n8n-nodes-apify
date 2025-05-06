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

export const name = 'Get user runs list';

const rawOption: INodePropertyOptions = {
	name: 'Get User Runs List',
	value: 'Get user runs list',
	action: 'Get user runs list',
	description:
		'Gets a list of all runs for a user The response is a list of objects where each object contains basic information about a single actor run The endpoint supports pagination using the limit and offset parameters and it will not return more than 1000 array elements By default the records are sorted by the startedAt field in ascending order Therefore you can use pagination to incrementally fetch all records while new ones are still being created To sort the records in descending order use desc 1 parameter You can also filter runs by status available statuses',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/actor-runs',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
