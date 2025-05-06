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

export const name = 'Get dataset';

const rawOption: INodePropertyOptions = {
	name: 'Get Dataset',
	value: 'Get dataset',
	action: 'Get dataset',
	description:
		'Returns dataset object for given dataset ID NOTE Keep in mind that attributes itemCount and cleanItemCount are not propagated right away after data are pushed into a dataset There is a short period up to 5 seconds during which these counters may not match with exact counts in dataset items',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/datasets/{{$parameter["datasetId"]}}',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
