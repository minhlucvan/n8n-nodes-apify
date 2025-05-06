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
		displayName: 'POST /v2/actor-tasks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Create task'],
			},
		},
	},
	{
		displayName: 'Act Id',
		required: true,
		name: 'actId',
		type: 'string',
		default: 'asADASadYvn4mBZmm',
		routing: {
			request: {
				body: {
					actId: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Create task'],
			},
		},
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: 'my-task',
		routing: {
			request: {
				body: {
					name: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Create task'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'string',
		default: '',
		routing: {
			request: {
				body: {
					options: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Create task'],
			},
		},
	},
	{
		displayName: 'Input',
		name: 'input',
		type: 'string',
		default: '',
		routing: {
			request: {
				body: {
					input: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Create task'],
			},
		},
	},
];
