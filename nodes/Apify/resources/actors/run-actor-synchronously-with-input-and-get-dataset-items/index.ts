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

export const name = 'Run actor synchronously with input and get dataset items';

const rawOption: INodePropertyOptions = {
	name: 'Run Actor Synchronously with Input and Get Dataset Items',
	value: 'Run actor synchronously with input and get dataset items',
	action: 'Run actor synchronously with input and get dataset items',
	description:
		'Runs a specific Actor and returns its dataset items The POST payload including its Content Type header is passed as INPUT to the Actor usually application JSON The HTTP response contains the Actors dataset items while the format of items depends on specifying dataset items format parameter You can send all the same options in parameters as the Get Dataset Items API endpoint The Actor is started with the default options you can override them using URL query parameters If the Actor run exceeds 300 seconds the HTTP response will return the 408 status code Request Timeout Beware that it might be impossible to maintain an idle HTTP connection for a long period of time due to client timeout or network conditions Make sure your HTTP client is configured to have a long enough connection timeout If the connection breaks you will not receive any information about the run and its status To run the Actor asynchronously use the Run Actor API endpoint instead',
	routing: {
		request: {
			method: 'POST',
			url: '=/v2/acts/{{$parameter["actorId"]}}/run-sync-get-dataset-items',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
