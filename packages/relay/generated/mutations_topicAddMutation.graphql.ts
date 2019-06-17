/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateTopicInput = {
    readonly clientMutationId?: string | null;
    readonly topic: TopicInput;
};
export type TopicInput = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly sectionId?: number | null;
    readonly title?: string | null;
    readonly content?: string | null;
    readonly likeNum?: any | null;
    readonly commentNum?: any | null;
    readonly type?: number | null;
    readonly status?: number | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
    readonly tags?: ReadonlyArray<string | null> | null;
    readonly mentioncodes?: ReadonlyArray<string | null> | null;
};
export type mutations_topicAddMutationVariables = {
    readonly input: CreateTopicInput;
};
export type mutations_topicAddMutationResponse = {
    readonly createTopic: {
        readonly topic: {
            readonly topicId: number;
            readonly title: string | null;
        } | null;
    } | null;
};
export type mutations_topicAddMutation = {
    readonly response: mutations_topicAddMutationResponse;
    readonly variables: mutations_topicAddMutationVariables;
};



/*
mutation mutations_topicAddMutation(
  $input: CreateTopicInput!
) {
  createTopic(input: $input) {
    topic {
      topicId: id
      title
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateTopicInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTopic",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateTopicPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "topic",
        "storageKey": null,
        "args": null,
        "concreteType": "Topic",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": "topicId",
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "mutations_topicAddMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_topicAddMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_topicAddMutation",
    "id": "4277788b69d71ac39e9fcbe970a21a5a",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '011f63f8afa556445b51f57e953dd7df';
export default node;
