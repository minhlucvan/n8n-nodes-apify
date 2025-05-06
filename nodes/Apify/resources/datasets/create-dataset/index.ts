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

export const name = 'Create dataset';

const rawOption: INodePropertyOptions = {
	name: 'Create Dataset',
	value: 'Create dataset',
	action: 'Create dataset',
	description:
		'Creates a dataset and returns its object Keep in mind that data stored under unnamed dataset follows data retention period It creates a dataset with the given name if the parameter name is used If a dataset with the given name already exists then returns its object',
	routing: {
		request: {
			method: 'POST',
			url: '=/v2/datasets',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
