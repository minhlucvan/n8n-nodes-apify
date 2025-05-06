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
		displayName: 'GET /v2/actor-tasks/{actorTaskId}/runs',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Get list of task runs'],
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
				operation: ['Get list of task runs'],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		description:
			'Number of array elements that should be skipped at the start. The default value is `0`.',
		default: 0,
		type: 'number',
		routing: {
			request: {
				qs: {
					offset: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Get list of task runs'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		description: 'Max number of results to return',
		default: 50,
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		routing: {
			request: {
				qs: {
					limit: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Get list of task runs'],
			},
		},
	},
	{
		displayName: 'Desc',
		name: 'desc',
		description: `If \`true\` or \`1\` then the objects are sorted by the \`startedAt\` field in
descending order. By default, they are sorted in ascending order.`,
		default: true,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					desc: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Get list of task runs'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		description: `Return only runs with the provided status ([available
statuses](https://docs.apify.com/platform/actors/running/runs-and-builds#lifecycle))`,
		default: 'SUCCEEDED',
		type: 'string',
		routing: {
			request: {
				qs: {
					status: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actor tasks'],
				operation: ['Get list of task runs'],
			},
		},
	},
];
