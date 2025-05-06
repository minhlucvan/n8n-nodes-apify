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

export const name = 'Run task';

const rawOption: INodePropertyOptions = {
	name: 'Run Task',
	value: 'Run task',
	action: 'Run task',
	description:
		'Runs an actor task and immediately returns without waiting for the run to finish Optionally you can override the actor input configuration by passing a JSON object as the POST payload and setting the Content Type application JSON HTTP header Note that if the object in the POST payload does not define a particular input property the actor run uses the default value defined by the task or actor s input schema if not defined by the task The response is the actor Run object as returned by the Get run endpoint If you want to wait for the run to finish and receive the actual output of the actor run as the response use one of the Run task synchronously API endpoints instead To fetch the actor run results that are typically stored in the default dataset you ll need to pass the ID received in the defaultDatasetId field received in the response JSON to the Get items API endpoint',
	routing: {
		request: {
			method: 'POST',
			url: '=/v2/actor-tasks/{{$parameter["actorTaskId"]}}/runs',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
