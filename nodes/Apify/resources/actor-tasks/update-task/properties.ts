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
		displayName: 'PUT /v2/actor-tasks/{actorTaskId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Actor Task Id',
		name: 'actorTaskId',
		required: true,
		description: "Task ID or a tilde-separated owner's username and task's name",
		default: 'janedoe~my-task',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Id',
		required: true,
		name: 'id',
		type: 'string',
		default: 'ZxLNxrRaZrSjuhT9y',
		routing: {
			request: {
				body: {
					id: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'User Id',
		required: true,
		name: 'userId',
		type: 'string',
		default: 'BPWZBd7Z9c746JAnF',
		routing: {
			request: {
				body: {
					userId: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
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
				operation: ['Update task'],
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
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		default: 'janedoe',
		routing: {
			request: {
				body: {
					username: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Created At',
		required: true,
		name: 'createdAt',
		type: 'string',
		default: '2018-10-26T07:23:14.855Z',
		routing: {
			request: {
				body: {
					createdAt: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Modified At',
		required: true,
		name: 'modifiedAt',
		type: 'string',
		default: '2018-10-26T13:30:49.578Z',
		routing: {
			request: {
				body: {
					modifiedAt: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Removed At',
		name: 'removedAt',
		type: 'string',
		default: '',
		routing: {
			request: {
				body: {
					removedAt: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Stats',
		name: 'stats',
		type: 'string',
		default: '',
		routing: {
			request: {
				body: {
					stats: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Actor tasks'],
				operation: ['Update task'],
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
				operation: ['Update task'],
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
				operation: ['Update task'],
			},
		},
	},
];
