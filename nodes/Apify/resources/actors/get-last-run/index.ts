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

export const name = 'Get last run';

const rawOption: INodePropertyOptions = {
	name: 'Get Last Run',
	value: 'Get last run',
	action: 'Get last run',
	description:
		'This is not a single endpoint but an entire group of endpoints that lets you to retrieve and manage the last run of given Actor or any of its default storages',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/acts/{{$parameter["actorId"]}}/runs/last',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
