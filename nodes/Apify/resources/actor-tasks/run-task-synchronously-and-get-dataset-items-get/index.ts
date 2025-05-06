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

export const name = 'Run task synchronously and get dataset items (GET)';

const rawOption: INodePropertyOptions = {
	name: 'Run Task Synchronously and Get Dataset Items (GET)',
	value: 'Run task synchronously and get dataset items (GET)',
	action: 'Run task synchronously and get dataset items (GET)',
	description:
		'Run a specific task and return its dataset items The run must finish in 300 seconds otherwise the HTTP request fails with a timeout error this won t abort the run itself You can send all the same options in parameters as the Get Dataset Items API endpoint Beware that it might be impossible to maintain an idle HTTP connection for an extended period due to client timeout or network conditions Make sure your HTTP client is configured to have a long enough connection timeout If the connection breaks you will not receive any information about the run and its status To run the Task asynchronously use the Run task asynchronously endpoint instead',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/actor-tasks/{{$parameter["actorTaskId"]}}/run-sync-get-dataset-items',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
