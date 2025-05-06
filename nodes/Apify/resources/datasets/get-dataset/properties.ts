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

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'GET /v2/datasets/{datasetId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Datasets'],
				operation: ['Get dataset'],
			},
		},
	},
	{
		displayName: 'Dataset Id',
		name: 'datasetId',
		required: true,
		description: 'Dataset ID or `username~dataset-name`',
		default: 'WkzbQMuFYuamGv3YF',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['Datasets'],
				operation: ['Get dataset'],
			},
		},
	},
	{
		displayName: 'Token',
		name: 'token',
		description:
			'API authentication token. It is required only when using the `username~dataset-name` format for `datasetId`.',
		default: 'soSkq9ekdmfOslopH',
		type: 'string',
		typeOptions: { password: true },
		routing: {
			request: {
				qs: {
					token: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Datasets'],
				operation: ['Get dataset'],
			},
		},
	},
];
