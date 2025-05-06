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
		displayName: 'POST /v2/acts/{actorId}/runs',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Actor Id',
		name: 'actorId',
		required: true,
		description: "Actor ID or a tilde-separated owner's username and Actor name",
		default: 'janedoe~my-actor',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Timeout',
		name: 'timeout',
		description: `Optional timeout for the run, in seconds. By default, the run uses a
timeout specified in the default run configuration for the Actor.`,
		default: 60,
		type: 'number',
		routing: {
			request: {
				qs: {
					timeout: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Memory',
		name: 'memory',
		description: `Memory limit for the run, in megabytes. The amount of memory can be set
to a power of 2 with a minimum of 128. By default, the run uses a memory
limit specified in the default run configuration for the Actor.`,
		default: 256,
		type: 'number',
		routing: {
			request: {
				qs: {
					memory: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Max Items',
		name: 'maxItems',
		description: `The maximum number of items that the Actor run should return. This is
useful for pay-per-result Actors, as it allows you to limit the number
of results that will be charged to your subscription. You can access the
maximum number of items in your Actor by using the
\`ACTOR_MAX_PAID_DATASET_ITEMS\` environment variable.`,
		default: 1000,
		type: 'number',
		routing: {
			request: {
				qs: {
					maxItems: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Build',
		name: 'build',
		description: `Specifies the Actor build to run. It can be either a build tag or build
number. By default, the run uses the build specified in the default run
configuration for the Actor (typically \`latest\`).`,
		default: '0.1.234',
		type: 'string',
		routing: {
			request: {
				qs: {
					build: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Wait For Finish',
		name: 'waitForFinish',
		description: `The maximum number of seconds the server waits for the run to finish. By
default, it is \`0\`, the maximum value is \`60\`. <!--
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
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Webhooks',
		name: 'webhooks',
		description: `Specifies optional webhooks associated with the Actor run, which can be
used to receive a notification e.g. when the Actor finished or failed. The value is a Base64-encoded
JSON array of objects defining the webhooks. For more information, see
[Webhooks documentation](https://docs.apify.com/platform/integrations/webhooks).`,
		default: 'dGhpcyBpcyBqdXN0IGV4YW1wbGUK...',
		type: 'string',
		routing: {
			request: {
				qs: {
					webhooks: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
];
