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

export const name = 'Run actor synchronously without input and get dataset items';

const rawOption: INodePropertyOptions = {
	name: 'Run Actor Synchronously without Input and Get Dataset Items',
	value: 'Run actor synchronously without input and get dataset items',
	action: 'Run actor synchronously without input and get dataset items',
	description:
		'Runs a specific actor and returns its dataset items The run must finish in 300 seconds otherwise the API endpoint returns a timeout error The actor is not passed any input It allows to send all possible options in parameters from Get Dataset Items API endpoint Beware that it might be impossible to maintain an idle HTTP connection for a long period of time due to client timeout or network conditions Make sure your HTTP client is configured to have a long enough connection timeout If the connection breaks you will not receive any information about the run and its status To run the Actor asynchronously use the Run Actor API endpoint instead',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/acts/{{$parameter["actorId"]}}/run-sync-get-dataset-items',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
