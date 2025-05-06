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

export const name = 'Create task';

const rawOption: INodePropertyOptions = {
	name: 'Create Task',
	value: 'Create task',
	action: 'Create task',
	description:
		'Create a new task with settings specified by the object passed as JSON in the POST payload The response is the full task object as returned by the Get task endpoint The request needs to specify the Content Type application JSON HTTP header When providing your API authentication token we recommend using the request s Authorization header rather than the URL More info',
	routing: {
		request: {
			method: 'POST',
			url: '=/v2/actor-tasks',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
