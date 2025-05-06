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

export const name = 'Run actor';

const rawOption: INodePropertyOptions = {
	name: 'Run actor',
	value: 'Run actor',
	action: 'Run actor',
	description:
		'Runs an Actor and immediately returns without waiting for the run to finish The POST payload including its Content Type header is passed as INPUT to the Actor usually application JSON The Actor is started with the default options you can override them using various URL query parameters The response is the Run object as returned by the Get run API endpoint If you want to wait for the run to finish and receive the actual output of the Actor as the response please use one of the Run Actor synchronously API endpoints instead To fetch the Actor run results that are typically stored in the default dataset you ll need to pass the ID received in the defaultDatasetId field received in the response JSON to the Get items API endpoint',
	routing: {
		request: {
			method: 'POST',
			url: '=/v2/acts/{{$parameter["actorId"]}}/runs',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
