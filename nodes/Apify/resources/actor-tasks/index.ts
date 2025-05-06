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

import * as getListOfTasks from './get-list-of-tasks';
import * as createTask from './create-task';
import * as getTask from './get-task';
import * as updateTask from './update-task';
import * as deleteTask from './delete-task';
import * as getTaskInput from './get-task-input';
import * as updateTaskInput from './update-task-input';
import * as getListOfTaskRuns from './get-list-of-task-runs';
import * as runTask from './run-task';
import * as runTaskSynchronouslyPost from './run-task-synchronously-post';
import * as runTaskSynchronouslyGet from './run-task-synchronously-get';
import * as runTaskSynchronouslyAndGetDatasetItemsPost from './run-task-synchronously-and-get-dataset-items-post';
import * as runTaskSynchronouslyAndGetDatasetItemsGet from './run-task-synchronously-and-get-dataset-items-get';

const operations: INodePropertyOptions[] = [
	getListOfTasks.option,
	createTask.option,
	getTask.option,
	updateTask.option,
	deleteTask.option,
	getTaskInput.option,
	updateTaskInput.option,
	getListOfTaskRuns.option,
	runTask.option,
	runTaskSynchronouslyPost.option,
	runTaskSynchronouslyGet.option,
	runTaskSynchronouslyAndGetDatasetItemsPost.option,
	runTaskSynchronouslyAndGetDatasetItemsGet.option,
];

export const name = 'Actor tasks';

const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['Actor tasks'],
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
	...getListOfTasks.properties,
	...createTask.properties,
	...getTask.properties,
	...updateTask.properties,
	...deleteTask.properties,
	...getTaskInput.properties,
	...updateTaskInput.properties,
	...getListOfTaskRuns.properties,
	...runTask.properties,
	...runTaskSynchronouslyPost.properties,
	...runTaskSynchronouslyGet.properties,
	...runTaskSynchronouslyAndGetDatasetItemsPost.properties,
	...runTaskSynchronouslyAndGetDatasetItemsGet.properties,
];

const { properties, methods } = runHooks(rawProperties);

export { properties, methods };
