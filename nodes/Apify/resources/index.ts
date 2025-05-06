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
import * as helpers from '../helpers';

import { aggregateNodeMethods } from '../helpers/methods';
import { runHooks } from './hooks';

import * as actors from './actors';
import * as actorTasks from './actor-tasks';
import * as actorRuns from './actor-runs';
import * as datasets from './datasets';

const authenticationProperties: INodeProperties[] = [];

const resourceSelect: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Actor',
				value: 'Actors',
			},
			{
				name: 'Actor Task',
				value: 'Actor tasks',
			},
			{
				name: 'Actor Run',
				value: 'Actor runs',
			},
			{
				name: 'Dataset',
				value: 'Datasets',
			},
		],
		default: 'Actors',
	},
];

const extraProperties: INodeProperties[] = [
	{
		displayName: 'Use Custom Body',
		name: 'useCustomBody',
		type: 'boolean',
		description: 'Whether to use a custom body',
		default: false,
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{\n  "name": "MyActor",\n  "description": "My favourite actor!",\n  "title": "My actor",\n  "isPublic": false,\n  "seoTitle": "My actor",\n  "seoDescription": "My actor is the best",\n  "restartOnError": false,\n  "versions": [\n    {\n      "versionNumber": "0.0",\n      "sourceType": {},\n      "envVars": [\n        {\n          "name": "MY_ENV_VAR",\n          "value": "my-value",\n          "isSecret": false\n        }\n      ],\n      "applyEnvVarsToBuild": false,\n      "buildTag": "latest",\n      "sourceFiles": [\n        {\n          "format": "TEXT",\n          "content": "console.log(\'This is the main.js file\');",\n          "name": "src/main.js"\n        },\n        {\n          "name": "src/placeholder",\n          "folder": true\n        }\n      ]\n    }\n  ],\n  "categories": [\n    "string"\n  ],\n  "defaultRunOptions": {}\n}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actors'],
				operation: ['Create actor'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{\n  "name": "MyActor",\n  "description": "My favourite actor!",\n  "isPublic": false,\n  "seoTitle": "My actor",\n  "seoDescription": "My actor is the best",\n  "title": "My Actor",\n  "restartOnError": false,\n  "versions": [\n    {\n      "name": "MY_ENV_VAR",\n      "value": "my-new-value",\n      "isSecret": false\n    }\n  ],\n  "categories": [\n    "string"\n  ],\n  "defaultRunOptions": {}\n}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actors'],
				operation: ['Update actor'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actors'],
				operation: ['Run actor'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actors'],
				operation: ['With input'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{\n  "actId": "asADASadYvn4mBZmm",\n  "name": "my-task",\n  "options": {\n    "build": "latest",\n    "timeoutSecs": 300,\n    "memoryMbytes": 128\n  },\n  "input": {\n    "hello": "world"\n  }\n}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actor tasks'],
				operation: ['Create task'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{\n  "id": "ZxLNxrRaZrSjuhT9y",\n  "userId": "BPWZBd7Z9c746JAnF",\n  "actId": "asADASadYvn4mBZmm",\n  "name": "my-task",\n  "username": "janedoe",\n  "createdAt": "2018-10-26T07:23:14.855Z",\n  "modifiedAt": "2018-10-26T13:30:49.578Z",\n  "removedAt": "string",\n  "stats": {},\n  "options": {},\n  "input": {}\n}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actor tasks'],
				operation: ['Update task'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actor tasks'],
				operation: ['Update task input'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actor tasks'],
				operation: ['Run task'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actor tasks'],
				operation: ['Run task synchronously (POST)'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Actor tasks'],
				operation: ['Run task synchronously and get dataset items (POST)'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '{\n  "name": "new-dataset-name"\n}',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Datasets'],
				operation: ['Update dataset'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default: '[\n  {\n    "foo": "bar"\n  },\n  {\n    "foo": "hotel"\n  },\n  {\n    "foo": "restaurant"\n  }\n]',
		description: 'Custom body to send',
		routing: {
			request: {
				body: {
					customBody: '={{JSON.parse($value)}}',
				},
			},
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		displayOptions: {
			show: {
				useCustomBody: [true],
				resource: ['Datasets'],
				operation: ['Put items'],
			},
		},
	},
];

const rawProperties: INodeProperties[] = [
	...authenticationProperties,
	...resourceSelect,
	...actors.properties,
	...actorTasks.properties,
	...actorRuns.properties,
	...datasets.properties,
	...extraProperties,
];

const { properties, methods: selfMethods } = runHooks(rawProperties);

const methods = aggregateNodeMethods([
	selfMethods,
	actors.methods,
	actorTasks.methods,
	actorRuns.methods,
	datasets.methods,
]);

export { properties, methods };
