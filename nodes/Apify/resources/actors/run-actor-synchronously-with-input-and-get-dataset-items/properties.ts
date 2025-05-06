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
		displayName: 'POST /v2/acts/{actorId}/run-sync-get-dataset-items',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
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
				operation: ['Run actor synchronously with input and get dataset items'],
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
				operation: ['Run actor synchronously with input and get dataset items'],
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
				operation: ['Run actor synchronously with input and get dataset items'],
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
				operation: ['Run actor synchronously with input and get dataset items'],
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
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Webhooks',
		name: 'webhooks',
		description: `Specifies optional webhooks associated with the actor run, which can be
used to receive a notification e.g. when the actor finished or failed. The value is a Base64-encoded
JSON array of objects defining the webhooks. For more information, see [Webhooks
documentation](https://docs.apify.com/platform/integrations/webhooks).`,
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
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Format',
		name: 'format',
		description: `Format of the results, possible values are: \`JSON\`, \`jsonl\`, \`csv\`,
\`html\`, \`xlsx\`, \`xml\` and \`rss\`. The default value is \`JSON\`.`,
		default: 'json',
		type: 'string',
		routing: {
			request: {
				qs: {
					format: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Clean',
		name: 'clean',
		description: `If \`true\` or \`1\` then the API endpoint returns only non-empty items and
skips hidden fields (i.e. fields starting with the # character). The \`clean\` parameter is just a shortcut for \`skipHidden=true\` and
\`skipEmpty=true\` parameters. Note that since some objects might be skipped from the output, that the
result might contain less items than the \`limit\` value.`,
		default: false,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					clean: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		description: `Number of items that should be skipped at the start. The default value
is \`0\`.`,
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
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
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
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Fields',
		name: 'fields',
		description: `A comma-separated list of fields which should be picked from the items, only these fields will remain in the resulting record objects. Note that the fields in the outputted items are sorted the same way as
they are specified in the \`fields\` query parameter. You can use this feature to effectively fix the output format.`,
		default: 'myValue,myOtherValue',
		type: 'string',
		routing: {
			request: {
				qs: {
					fields: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Omit',
		name: 'omit',
		description: 'A comma-separated list of fields which should be omitted from the items',
		default: 'myValue,myOtherValue',
		type: 'string',
		routing: {
			request: {
				qs: {
					omit: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Unwind',
		name: 'unwind',
		description: `A comma-separated list of fields which should be unwound, in order which
they should be processed. Each field should be either an array or an object. If the field is an array then every element of the array will become a separate record and merged with parent object. If the unwound field is an object then it is merged with the parent
object If the unwound field is missing or its value is neither an array nor an
object and therefore cannot be merged with a parent object then the item
gets preserved as it is. Note that the unwound items ignore the \`desc\` parameter.`,
		default: 'myValue,myOtherValue',
		type: 'string',
		routing: {
			request: {
				qs: {
					unwind: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Flatten',
		name: 'flatten',
		description: `A comma-separated list of fields which should transform nested objects
into flat structures. For example, with \`flatten="foo"\` the object \`{"foo":{"bar": "hello"}}\`
is turned into \`{"foo.bar": "hello"}\`. The original object with properties is replaced with the flattened
object.`,
		default: 'myValue',
		type: 'string',
		routing: {
			request: {
				qs: {
					flatten: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Desc',
		name: 'desc',
		// eslint-disable-next-line
		description: `By default, results are returned in the same order as they were stored.
To reverse the order, set this parameter to \`true\` or \`1\`.`,
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
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Attachment',
		name: 'attachment',
		description: `If \`true\` or \`1\` then the response will define the \`Content-Disposition:
attachment\` header, forcing a web browser to download the file rather
than to display it. By default this header is not present.`,
		default: true,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					attachment: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Delimiter',
		name: 'delimiter',
		description: `A delimiter character for CSV files, only used if \`format=csv\`. You
might need to URL-encode the character (e.g. use \`%09\` for tab or \`%3B\`
for semicolon). The default delimiter is a simple comma (\`,\`).`,
		default: ';',
		type: 'string',
		routing: {
			request: {
				qs: {
					delimiter: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Bom',
		name: 'bom',
		// eslint-disable-next-line
		description: `All text responses are encoded in UTF-8 encoding. By default, the
\`format=csv\` files are prefixed with the UTF-8 Byte Order Mark (BOM), while \`json\`, \`jsonl\`, \`xml\`, \`html\`
and \`rss\` files are not. If you want to override this default behavior, specify \`bom=1\` query
parameter to include the BOM or \`bom=0\` to skip it.
`,
		default: false,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					bom: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Xml Root',
		name: 'xmlRoot',
		description: `Overrides default root element name of \`xml\` output. By default the root
element is \`items\`.`,
		default: 'items',
		type: 'string',
		routing: {
			request: {
				qs: {
					xmlRoot: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Xml Row',
		name: 'xmlRow',
		description: `Overrides default element name that wraps each page or page function
result object in \`xml\` output. By default the element name is \`item\`.`,
		default: 'item',
		type: 'string',
		routing: {
			request: {
				qs: {
					xmlRow: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Skip Header Row',
		name: 'skipHeaderRow',
		description: 'If `true` or `1` then header row in the `csv` format is skipped',
		default: true,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					skipHeaderRow: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Skip Hidden',
		name: 'skipHidden',
		description:
			'If `true` or `1` then hidden fields are skipped from the output,\ni.e. fields starting with the `#` character.',
		default: false,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					skipHidden: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Skip Empty',
		name: 'skipEmpty',
		description: `If \`true\` or \`1\` then empty items are skipped from the output. Note that if used, the results might contain less items than the limit
value.`,
		default: false,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					skipEmpty: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Simplified',
		name: 'simplified',
		// eslint-disable-next-line
		description: `If \`true\` or \`1\` then, the endpoint applies the
\`fields=url,pageFunctionResult,errorInfo\` and \`unwind=pageFunctionResult\` query parameters. This feature is used
to emulate simplified results provided by the legacy Apify Crawler product and it\'s not recommended to use it in new
integrations.
`,
		default: false,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					simplified: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
	{
		displayName: 'Skip Failed Pages',
		name: 'skipFailedPages',
		description: `If \`true\` or \`1\` then, the all the items with errorInfo property will be
skipped from the output. This feature is here to emulate functionality of API version 1 used for
the legacy Apify Crawler product and it\'s not recommended to use it in
new integrations.`,
		default: false,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					skipFailedPages: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Actors'],
				operation: ['Run actor synchronously with input and get dataset items'],
			},
		},
	},
];
