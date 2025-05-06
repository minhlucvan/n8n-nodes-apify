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

export const name = 'Get list of actors';

const rawOption: INodePropertyOptions = {
	name: 'Get List of Actors',
	value: 'Get list of actors',
	action: 'Get list of actors',
	description:
		'Gets the list of all Actors that the user created or used The response is a list of objects where each object contains a basic information about a single Actor To only get Actors created by the user add the my 1 query parameter The endpoint supports pagination using the limit and offset parameters and it will not return more than 1000 records By default the records are sorted by the createdAt field in ascending order therefore you can use pagination to incrementally fetch all Actors while new ones are still being created To sort the records in descending order use the desc 1 parameter',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/acts',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
