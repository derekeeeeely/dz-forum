/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateTopicInput = {
    readonly clientMutationId?: string | null;
    readonly patch: TopicPatch;
    readonly id: number;
};
export type TopicPatch = {
    readonly id?: number | null;
    readonly userCode?: string | null;
    readonly sectionId?: number | null;
    readonly title?: string | null;
    readonly tags?: ReadonlyArray<string | null> | null;
    readonly content?: string | null;
    readonly mentioncodes?: ReadonlyArray<string | null> | null;
    readonly likeNum?: any | null;
    readonly commentNum?: any | null;
    readonly type?: number | null;
    readonly status?: number | null;
    readonly createdAt?: any | null;
    readonly updatedAt?: any | null;
    readonly deletedAt?: any | null;
};
export type mutations_topicUpdateMutationVariables = {
    readonly input: UpdateTopicInput;
};
export type mutations_topicUpdateMutationResponse = {
    readonly updateTopic: {
        readonly topic: {
            readonly topicId: number;
            readonly content: string | null;
            readonly deletedAt: any | null;
        } | null;
    } | null;
};
export type mutations_topicUpdateMutation = {
    readonly response: mutations_topicUpdateMutationResponse;
    readonly variables: mutations_topicUpdateMutationVariables;
};



/*
mutation mutations_topicUpdateMutation(
  $input: UpdateTopicInput!
) {
  updateTopic(input: $input) {
    topic {
      topicId: id
      content
      deletedAt
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateTopicInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateTopic",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateTopicPayload",
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
            "name": "content",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "deletedAt",
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
    "name": "mutations_topicUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "mutations_topicUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "mutations_topicUpdateMutation",
    "id": "09304dd5a7f33c687a5b1876e3b0aad7",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '01cf7e8f07be70a84eacb871d419a5a0';
export default node;
