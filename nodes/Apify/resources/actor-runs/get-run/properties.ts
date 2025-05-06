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
		displayName: 'GET /v2/actor-runs/{runId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Actor runs'],
				operation: ['Get run'],
			},
		},
	},
	{
		displayName: 'Run Id',
		name: 'runId',
		required: true,
		default: '3KH8gEpp4d8uQSe8T',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['Actor runs'],
				operation: ['Get run'],
			},
		},
	},
	{
		displayName: 'Wait For Finish',
		name: 'waitForFinish',
		description: `The maximum number of seconds the server waits for the run to finish. By
default it is \`0\`, the maximum value is \`60\`. <!--
MAX_ACTOR_JOB_ASYNC_WAIT_SECS -->
If the build finishes in time then the returned run object will have a terminal status (e.g. \`SUCCEEDED\`),
otherwise it will have a transitional status (e.g. \`RUNNING\`).`,
		default: 60,
		type: 'number',
		routing: {
			request: {
				qs: {
					waitForFinish: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actor runs'],
				operation: ['Get run'],
			},
		},
	},
];
