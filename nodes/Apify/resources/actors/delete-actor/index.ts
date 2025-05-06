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

export const name = 'Delete actor';

const rawOption: INodePropertyOptions = {
	name: 'Delete actor',
	value: 'Delete actor',
	action: 'Delete actor',
	description: 'Deletes an Actor',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/v2/acts/{{$parameter["actorId"]}}',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
