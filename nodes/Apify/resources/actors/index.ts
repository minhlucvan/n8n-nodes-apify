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

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { runHooks } from './hooks';

import * as getListOfActors from './get-list-of-actors';
import * as createActor from './create-actor';
import * as getActor from './get-actor';
import * as updateActor from './update-actor';
import * as deleteActor from './delete-actor';
import * as getListOfRuns from './get-list-of-runs';
import * as runActor from './run-actor';
import * as withInput from './with-input';
import * as withoutInput from './without-input';
import * as runActorSynchronouslyWithInputAndGetDatasetItems from './run-actor-synchronously-with-input-and-get-dataset-items';
import * as runActorSynchronouslyWithoutInputAndGetDatasetItems from './run-actor-synchronously-without-input-and-get-dataset-items';
import * as getLastRun from './get-last-run';

const operations: INodePropertyOptions[] = [
	getListOfActors.option,
	createActor.option,
	getActor.option,
	updateActor.option,
	deleteActor.option,
	getListOfRuns.option,
	runActor.option,
	withInput.option,
	withoutInput.option,
	runActorSynchronouslyWithInputAndGetDatasetItems.option,
	runActorSynchronouslyWithoutInputAndGetDatasetItems.option,
	getLastRun.option,
];

export const name = 'Actors';

const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['Actors'],
		},
	},
	default: '',
};

// overwrite the options of the operationSelect
operationSelect.options = operations;

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : '';

export const rawProperties: INodeProperties[] = [
	operationSelect,
	...getListOfActors.properties,
	...createActor.properties,
	...getActor.properties,
	...updateActor.properties,
	...deleteActor.properties,
	...getListOfRuns.properties,
	...runActor.properties,
	...withInput.properties,
	...withoutInput.properties,
	...runActorSynchronouslyWithInputAndGetDatasetItems.properties,
	...runActorSynchronouslyWithoutInputAndGetDatasetItems.properties,
	...getLastRun.properties,
];

const { properties, methods } = runHooks(rawProperties);

export { properties, methods };
